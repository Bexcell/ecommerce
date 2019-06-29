const express = require('express')
const router = express.Router();

const { signUp, signIn, signOut, requireSignIn } = require("../controllers/auth");
const { userSignUpValidator } = require("../validator/index");

router.post("/signUp", userSignUpValidator, signUp);
router.post("/signIn", signIn); 
router.get("/signOut", signOut);




module.exports = router;