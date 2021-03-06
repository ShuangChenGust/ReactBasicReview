const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check')
const User = require('../../models/Users');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const config = require('config')


//@route POST api/users
//@desc Register User
//@access Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min:6})
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }


    const { name, email, password } = req.body;

    try{

    let user = await User.findOne({ email });
    if(user){
        return res
        .status(400)
        .json({errors:[{msg:'User already exists'}]});
    }
    const avatar = gravatar.url(email, {
        s:'200', //default size
        r:'pg', //rating
        d:'mm' //default image ...like an icon image
    })

    user = new User({
        name,
        email,
        avatar,
        password // not hashed
    })


      //create a salt value for encrypting
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt)

      await user.save();

    //   const payload = {
    //       user:{
    //           id:user.id
    //       }
    //   }

    //   jwt.sign(
    //       payload, 
    //       config.get('jwtSecret'),
    //       {expiresIn:36000},
    //       (err, token) => {
    //           if(err) throw err;
    //           res.json({token}) //send the token back to the client
    //       }
    //       );
      res.send('User registered');
    }
    catch(err){
        //server error
        console.error(err.message);
        res.status(500),send('Server Error');
    }

    
})

module.exports = router;