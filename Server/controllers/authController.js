const User = require("../../Database/model/user.model");
const jwt = require("jsonwebtoken");
const validator = require("email-validator");

const register = async (req, res) => {
  console.log(req.body,"req"); 
  const { email, password, username } = req.body;
  console.log(username)
  try {
    if (!username) return res.status(400).send("username is required");
    if (!email) return res.status(400).send("email is required");

    if (!validator.validate(email)) {
      return res.status(400).send("enter valid email id");
    }
    if (!password || password.length > 6) {
      return res.status(400).send("enter valid password");
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).send("email is taken");
    }

    const user = await new User({
      email,
      username,
      password,
    });

    await user.save();

    res.status(200).send("user addded successfully");
  } catch (err) {
    return res.staus(400).send("error creating user");
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send("user does not exist");
    }

    user.comparePassword(password, (err, match) => {
      if (!match || err) return res.status(400).send("password does not match");

      let token = jwt.sign({ _id: user._id }, "ew23243weqdf3rtqfsq34ref", {
        expiresIn: "24h",
      });

      
      res.status(200).send({
        token,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    });
  } catch (error) {
    res.status(400).send("login failed");
  }
};
;


module.exports={
  signin,
  register
}