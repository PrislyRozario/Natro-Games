const express = require('express');
const router = express.Router();

const app = express();

/* GET home page. */
router.get("/", (req, res) => {
  //Checks if the users is logged in or not and show the required pages.
  if (req.session.email){
    res.render("dashboard.html");
  }else {
    res.render('login.html');
  }
});

router.post("/login", (req, res) => {
  let reqEmail = req.body.email;
  let reqPassword = req.body.password;

  //Checking if the email and password is same as the one given in the config file.
  if (req.body.email === global.AdminCredentials.adminEmail && req.body.password === global.AdminCredentials.adminPassword){
    req.session.email = reqEmail;
    req.session.password = reqPassword;
    //Redirecting to / again because it will detect that the user is logged in and take them to the dashboard.
    res.send({status: "success", message: "Login Successful"});
  }else {
    res.send({status: "failed", message: "Wrong Credentials"});
  }
})

router.get("/logout", (req, res) => {req.session.destroy(); res.redirect("/")})

module.exports = router;
