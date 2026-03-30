import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Premium access management
  let premiumUsers = Map.empty<Principal, Bool>();

  // User profiles
  public type UserProfile = {
    name : Text;
    email : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // User profile functions (required by frontend)
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Premium access functions
  public query ({ caller }) func hasPremiumAccess() : async Bool {
    // No authorization check needed - users can query their own premium status
    // Anonymous users (guests) will simply get false
    switch (premiumUsers.get(caller)) {
      case (?isPremium) { isPremium };
      case (null) { false };
    };
  };

  public type PremiumUserState = {
    principal : Principal;
    isPremium : Bool;
  };

  public query ({ caller }) func getAllPremiumUsers() : async [PremiumUserState] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all premium users");
    };
    premiumUsers.toArray().map(
      func((principal, isPremium)) {
        {
          principal;
          isPremium;
        };
      }
    );
  };

  public shared ({ caller }) func grantPremiumAccess(user : Principal) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can grant premium access");
    };
    premiumUsers.add(user, true);
  };
};
