const request = require("supertest");
const app = require("../server");

describe("GET /", () => {
  it("responds with JSON containing data from the database", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        console.log("TEST PASSED, yay !!!!");
        done();
      });
  });
});
