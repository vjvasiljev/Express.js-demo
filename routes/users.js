const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User list");
});

router.get("/new", (req, res) => {
  res.send("New user form");
});

router
  .route("/:id")
  .get((req, res) => {
    req.params.id;
    res.send(`Get User With ID ${req.params.id}`);
    // console.log(req.user);
  })
  .put((req, res) => {
    req.params.id;
    res.send(`Update User With ID ${req.params.id}`);
  })
  .delete((req, res) => {
    req.params.id;
    res.send(`Delete User With ID ${req.params.id}`);
  });

const users = [{ name: "John" }, { name: "Jane" }, { name: "Joe" }];
router.param("id", (req, res, next, id) => {
  console.log(`User ID is: ${id}`);
  req.user = users[id];
  next();
});

module.exports = router;
