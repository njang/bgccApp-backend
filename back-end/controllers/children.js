const models = require('../models');
const Child = models.Child;

// Callback function to add a new child to the database
const add = (req, res) => {
  let newChild = new Child(req.body);
  newChild.save((err, model) => {
    if (err) {
      res.send(err);
    }
    res.json(model)
  });
}

// Callback function to retrieve all children from the database
const showAll = (req, res) => {
  Child.find({}, (err, children) => {
    if (err) {
      res.send(err);
    }
    res.json(children);
  });
}

// Callback function to retrieve one child from the database by id
const showOne = (req, res) => {
  Child.find({_id: req.params.Child_id}, (err, child) => {
    if (err) {
      res.send(err);
    }
    res.json(child);
  })
}

// Callback function to update one child by id
const update = (req, res) => {
  Child.findOne({_id: req.params.Child_id}, (err, child) => {
    child.name = req.body.body.name;
    child.dob = req.body.body.dob;
    child.emergencyContact = req.body.body.emergencyContact
    child.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  })
}

// Callback function to remove one child from the database by id
const remove = (req, res) => {
  Child.findByIdAndRemove(req.params.Child_id, (err, child) => {
    if (err) {
      res.send(err);
    }
    res.json(child);
  })
}

module.exports.add = add;
module.exports.showAll = showAll;
module.exports.showOne = showOne;
module.exports.update = update;
module.exports.remove = remove;