var express = require('express');
var router = express.Router();
var passport = require('passport');

var db = require('../db');

/* Get a single student: req.user.username */
router.get('/students/:email', passport.authenticate('basic', { session: false }),
  function(req, res, next) {
    // TODO: add api handler to check if email/password exists
    const { email } = req.params;
    
    db.getClient().collection('students').findOne({email}, function(err, user) {
      if (err) { 
        res.status(500).send({error: err.message}); 
      }else if(!user){
        res.status(404).send('Student not found');
      }else{
        res.send(user);
      }
    });
    
});

/* Create a student account */
router.post('/students', function(req, res, next) {
  const student = {
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    learningTargets: req.body.learningTargets,
    location: req.body.location
  };
  db.getClient().collection("students").findOne({email: student.email},
    function(err, results) {
      if (results) {
        res.status(400).send({error: 'Student ' + student.email + ' already exists!'});
      } else {
        db.getClient().collection("students").insertOne(student, function(err, r) {
          if (err) {
            res.status(500).send(err);
          }
          else {
            res.send(student);
          }
        })
      }
    });
});

/* Update a student account */
router.put('/students/:email', passport.authenticate('basic', { session: false }),
  function(req, res, next) {
    // TODO: EXTRA CREDIT update student record
});

module.exports = router;
