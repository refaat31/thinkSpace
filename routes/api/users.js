const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

const User = require("../../models/User");
const { json } = require("express");
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
  async (req, res) => {
    //console.log(req.body); //for this to work, u have to initialize the middleware for body parser
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    try {
      //see if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ errors: [{ msg: "user exists" }] });
      }

      //get user's gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      user = new User({
        name,
        email,
        avatar,
        password,
      });
      //encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();
      //return jsonwebtoken
      res.send("user registered");
    } catch (error) {
      console.log(err.messsage);
      res.status(500).send("server error");
    }
  }
);
module.exports = router;
