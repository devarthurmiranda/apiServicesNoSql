const User = require("../model/User");

describe("get all users", () => {
  it("should return all users", async () => {
    const users = await User.find();
    expect(users).toBeTruthy();
  });
});