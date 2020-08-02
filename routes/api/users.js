const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// @route   POST api/users
// @desc    register users
// @access  public
router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("email", "Email is invalid").isEmail(),
    check(
      "password",
      "please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    console.log(req.body); //for this to work, u have to initialize the middleware for body parser
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors:errors.array()});
    }
    res.send("user route");
  }
);
module.exports = router;
