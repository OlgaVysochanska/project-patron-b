const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../../app");
const User = require("../../models/user-model");

const DB_HOST_TEST =
  "mongodb+srv://ivanpanin:N9qUAWfq3gBavJnq@cluster0.amkeg2b.mongodb.net/db-contacts-test?retryWrites=true&w=majority";

describe("test /api/user/login route", () => {
  let server = null;
  beforeAll(async () => {
    server = app.listen(3000);
    await mongoose.connect(DB_HOST_TEST);
  });

  afterAll(async () => {
    server.close();
    await mongoose.connection.close();
  });

  test("test login route with current data", async () => {
    const loginData = {
      email: "wenesday@white.com",
      password: "7654321",
    };

    const res = await request(app).post("/api/users/login").send(loginData);

    const user = await User.findOne({ email: loginData.email });
    expect(res.statusCode).toBe(201);
    expect(res.body.token).toBe(user.token);
    expect(res.body.user.email).toBe(loginData.email);
    expect(res.body.user.subscription).toBe("starter");
  });
});
