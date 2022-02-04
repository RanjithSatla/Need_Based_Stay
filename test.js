// const app = require("./app");
// const Post = require("./models/userModel");
// const mongoose = require("mongoose");
// const supertest = require("supertest");

// beforeEach((done) => {
//   mongoose.connect(
//     "mongodb://localhost:27017/JestDB",
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => done()
//   );
// });

// afterEach((done) => {
//   mongoose.connection.db.dropDatabase(() => {
//     mongoose.connection.close(() => done());
//   });
// });c

// test("GET /user/login", async () => {
//   const post = await Post.create({ title: "Post 1", content: "Lorem ipsum" });

//   await supertest(app).get("/user/login").expect(200);
//   .then((response) => {
//     // Check type and length
//     expect(Array.isArray(response.body)).toBeTruthy();
//     expect(response.body.length).toEqual(1);

//     // Check data
//     expect(response.body[0]._id).toBe(post.id);
//     expect(response.body[0].title).toBe(post.title);
//     expect(response.body[0].content).toBe(post.content);
//   });
// });
