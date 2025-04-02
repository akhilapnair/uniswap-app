const User = require("../models/user");
const { check, validationResult } = require('express-validator');

exports.verifyUser = async (req, res) => {
  let response;

    console.log(req.body,'--------------------->');
    User.findOne({ username: req.body.username }).then(function (result) {
        console.log(result,'------------------------------>',req.body.username);
        // if (result)
        // req.check('username', 'User already exists').not().equals(result.username);
        // req.check('fname', 'First Name missing').notEmpty();
        // req.check('password', 'Password cannot be empty').notEmpty();
        // req.check('password', 'Passwords don\'t match').equals(req.body.rpassword);
        // req.check('phoneno', 'Phoneno is invalid').isMobilePhone(["en-IN"]);
        // Validate fields using express-validator
  // check('username', 'Username is required').notEmpty(),
  // check('email', 'Invalid email').isEmail(),
  // check('fname', 'First Name is required').notEmpty(),
  // check('password', 'Password cannot be empty').notEmpty(),
  // check('password', 'Passwords do not match').custom((value, { req }) => value === req.body.rpassword),
  // check('phoneno', 'Phone number is invalid').isMobilePhone('en-IN'),
        // const errors = req.validationErrors();
        // if (errors) {
        //     response = {
        //         success: false,
        //         errors,
        //     }
        //     res.send(response);
        // }
        // else {
            response = {
                success: true,
                errors: null
            }
            User.saveUser(req.body, function (result) {
                res.send(response);
            });
        // }
    });
};

// const { check, validationResult } = require('express-validator');

// Your API endpoint
// exports.verifyUser = [
//   // Validate fields using express-validator
//   // check('username', 'Username is required').notEmpty(),
// //   check('email', 'Invalid email').isEmail(),
// //   check('fname', 'First Name is required').notEmpty(),
// //   check('password', 'Password cannot be empty').notEmpty(),
// //   check('password', 'Passwords do not match').custom((value, { req }) => value === req.body.rpassword),
// //   check('phoneno', 'Phone number is invalid').isMobilePhone('en-IN'),

//   // Controller logic
//   async (req, res) => {
//     try {
//       // Check for validation errors
//       // const errors = validationResult(req);
//       // if (!errors.isEmpty()) {
//       //   return res.status(400).json({
//       //     success: false,
//       //     errors: errors.array(),
//       //   });
//       // }

//       // Proceed with logic if validation is successful
//       const { username, email, fname, password, phoneno } = req.body;
//       let existingUser = await User.findOne({ username });
//       if (existingUser) {
//         return res.status(400).json({ success: false, errors: [{ msg: "User already exists" }] });
//       }

//       // Proceed to create the new user
//       const newUser = new User({
//         username,
//         email,
//         fname,
//         password,
//         phoneno,
//       });

//       await newUser.save();

//       return res.status(200).json({
//         success: true,
//         errors: null,
//       });

//     } catch (error) {
//       console.error("Error during registration:", error);
//       return res.status(500).json({
//         success: false,
//         errors: [{ msg: "Server Error" }],
//       });
//     }
//   }
// ];
