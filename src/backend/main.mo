actor {
  public shared ({ caller }) func buildNotification(_ : ()) : async () {
    assert false; // This line should never be reached. It means there is a persistent problem on the platform.
  };
};
