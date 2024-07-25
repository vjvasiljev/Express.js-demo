const express = require("express");
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
// app.use(logger);

// app.get("/", logger, (req, res) => {
//   //   res.status(500).json({ message: "Hello World!" });
//   res.render("index", { text: "World" });
// });

const userRouter = require("./routes/users");

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
