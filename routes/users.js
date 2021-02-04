const router = require('express').Router();
let User = require('../models/user.model');


// on postman http://localhost:5000/users/ (method-GET)
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// on postman http://localhost:5000/users/add (method-POST)
router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({
    id: req.body.id,
    name: req.body.name,
    address: req.body.address,
    pincode: req.body.pincode,
    items: req.body.items,
    
 });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// on postman http://localhost:5000/users/:id (method-GET)
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:name').get((req, res) => {
//   User.find({name:req.body.name})
//       .then(users => res.json(users))
//       .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;