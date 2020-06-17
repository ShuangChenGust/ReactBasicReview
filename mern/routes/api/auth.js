// const express = require('express')
// const router = express.Router()
// const auth = require('../../middleware/auth')
// const User - require('../../models/Users')

const express = require('express')
const router = express.Router()

//@route Get api/auth
//desc Test route
//@access Public

router.get('/', (req, res) => res.send('Auth route'))

module.exports = router;
