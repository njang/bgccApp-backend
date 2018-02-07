const express = require('express');
const router = express.Router();
const models = require('../models');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.json(
//   	{
// 			"todos": [
// 				{
// 					"_id": "5a77e02f4485d300111c2b82",
// 					"body": "Wash the dishes",
// 					"priority": 4,
// 					"completed": false,
// 					"__v": 0
// 				},
// 				{
// 					"_id": "5a77e02f4485d300111c2b83",
// 					"body": "Vacuum hallway",
// 					"priority": 3,
// 					"completed": false,
// 					"__v": 0
// 				},
// 				{
// 					"_id": "5a77e02f4485d300111c2b84",
// 					"body": "Gaze at the stars",
// 					"priority": 5,
// 					"completed": false,
// 					"__v": 0
// 				},
// 				{
// 					"_id": "5a77e02f4485d300111c2b86",
// 					"body": "Work on WDI labs",
// 					"priority": 1,
// 					"completed": false,
// 					"__v": 0
// 				},
// 				{
// 					"_id": "5a77e02f4485d300111c2b85",
// 					"body": "Buy nutritious groceries for the week",
// 					"priority": 2,
// 					"completed": false,
// 					"__v": 0
// 				},
// 				{
// 					"_id": "5a77e02f4485d300111c2b87",
// 					"body": "Update resume with new skills",
// 					"priority": 2,
// 					"completed": false,
// 					"__v": 0
// 				},
// 				{
// 					"_id": "5a77e0304485d300111c2b88",
// 					"body": "Plan to attend 3 meetup groups outside of school",
// 					"priority": 8,
// 					"completed": false,
// 					"__v": 0
// 				},
// 				{
// 					"_id": "5a77e0304485d300111c2b8b",
// 					"body": "Get to know at least one UXDI or DSI student.",
// 					"priority": 10,
// 					"completed": false,
// 					"__v": 0
// 				},
// 				{
// 					"_id": "5a77e0304485d300111c2b89",
// 					"body": "Update personal portfolio to reflect my own refactored class project",
// 					"priority": 7,
// 					"completed": false,
// 					"__v": 0
// 				},
// 				{
// 					"_id": "5a77e0304485d300111c2b8a",
// 					"body": "Figure out how recursive function calling REALLY works.",
// 					"priority": 9,
// 					"completed": false,
// 					"__v": 0
// 				}
// 			],
//   		children: [
// 				{
// 					"_id": "5a77e02f4485d300111c2b85",
// 					name: 'Jenny Lin',
// 					dob: '2015-03-27',
// 					emergencyContact: '9793820182',
// 					type: 'child'
// 				},
// 				{
// 					"_id": "5a77e0304485d300111c2b8a",
// 					name: 'Jack Smith',
// 					dob: '2014-09-12',
// 					emergencyContact: '9792619276',
// 					type: 'child'
// 				}
// 			]
// 		}
// 	);
// });

// Retrieve all children
router.get('/', (req, res) => {
  models.Child.find({}, (err, children) => {
    if (err) {
      res.send(err);
    }
    res.json(children);
  })
})

// Retrieve a child with id
router.get('/:Child_id', (req, res) => {
  models.Child.findById(req.params.Child_id, (err, child) => {
    if (err) {
      res.send(err);
    }
    res.json(child);
  })
})

// Add a new child to the database
router.post('/', (req, res) => {
  let newChild = new models.Child(req.body);
  newChild.save((err, newChildObject) => {
    if (err) {
      res.send(err);
    }
    res.json(newChildObject);
  });
})

// Remove a child from database by id
router.delete('/:Child_id', (req, res) => {
  models.Child.remove({_id: req.params.Child_id}, (err, child) => {
    if (err) {
      res.send(err);
    }
    res.json(child);
  })
})

module.exports = router;