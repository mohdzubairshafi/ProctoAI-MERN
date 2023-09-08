import asyncHandler from "express-async-handler";
import User from "./../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc Auth User/set token
// route POST /api/users/auth
// @access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    // Call the generateToken function to create and set a JWT token for the user
    generateToken(res, user._id);

    // Send a 201 Created status along with user data and a success message
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      password_encrypted: user.password,
      message: "User Successfully login with role: " + user.role,
    });
  } else {
    // If user creation fails, return a
    res.status(401);
    throw new Error("Invalid User email or password ");
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  // Destructure user input from the request body
  const { name, email, password, role } = req.body;

  // Check if a user with the provided email already exists
  const userExist = await User.findOne({ email });

  if (userExist) {
    // If the user already exists, return a 400 Bad Request status and an error message
    res.status(400);
    throw new Error("User Already Exists");
  }

  // Create a new user with the provided details
  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  // If the user is successfully created, generate a token and send it in the response
  if (user) {
    // Call the generateToken function to create and set a JWT token for the user
    generateToken(res, user._id);

    // Send a 201 Created status along with user data and a success message
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      password_encrypted: user.password,
      message: "User Successfully created with role: " + user.role,
    });
  } else {
    // If user creation fails, return a 400 Bad Request status and an error message
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: " User logout User" });
});
// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private (should Have valid JWt token)
const getUserProfile = asyncHandler(async (req, res) => {
  //this user coming from authmiddleware where we create user key and attach it in req
  console.log(req.user);
  // create Object that we want to send to user
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    role: req.user.role,
  };
  res.status(200).json(user);
});
// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  // search user in db
  const user = await User.findById(req.user._id);
  // user present
  if (user) {
    // we can update user value here
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.role = req.body.role || user.role;

    // we can update password here too or make other function to make it more secure
    if (req.body.password) {
      user.password = req.body.password;
    }
    // save the new user  and get updated res for client
    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
    });
  } else {
    // User not present
    res.status(404);
    throw new Error("User Not Found");
  }
  // res.status(200).json({ message: "update user Profile" });
});
export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
