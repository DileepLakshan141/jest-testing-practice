const supertest = require("supertest");
const app = require("./app");

describe("testing the sample endpoints /users", () => {
  it("create a user when username and password is provided", async () => {
    const response = await supertest(app).get("/test").send();
    expect(response.statusCode).toBe(200);
  });

  it("create a new user", async () => {
    const response = await supertest(app)
      .post("/user")
      .send({ username: "sam", password: "sam123" });
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({ username: "sam", password: "sam123" });
  });

  it("should throw error", async () => {
    const response = await supertest(app)
      .post("/user")
      .send({ username: "sam" });
    expect(response.body.error).toBeDefined();
  });
});
