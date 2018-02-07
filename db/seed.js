// This file allows us to seed our application with data
// Run `node seed.js` from the root of this project folder.
const mongoose = require("mongoose");
const db = require("../models");

var childrenList =[
	{
	  name: "Samantha Duncan",
	  emergencyContact: 9793825018,
	  dob: '2016-01-11',
	  type: "child"
	},{
	  name: "Jonathan Ransom",
	  emergencyContact: 9795731839,
	  dob: '2015-03-27',
	  type: "child"
	},{
	  name: "Meghan Allen",
	  emergencyContact: 9792733752,
	  dob: '2015-07-02',
	  type: "child"
	},{
	  name: "Ross Fairbanks",
	  emergencyContact: 9792839103,
	  dob: '2015-09-13',
	  type: "child"
	},{
	  name: "Christopher Chen",
	  emergencyContact: 7132835909,
	  dob: '2015-09-17',
	  type: "child"
	},{
	  name: "Dustin Avery",
	  emergencyContact: 9792038738,
	  dob: '2015-11-02',
	  type: "child"
	},{
	  name: "Fabian Ros",
	  emergencyContact: 7132849083,
	  dob: '2015-10-15',
	  type: "child"
	},{
	  name: "Lauren Ramirez",
	  emergencyContact: 7138592038,
	  dob: '2016-01-02',
	  type: "child"
	},{
	  name: "Joshua Martinez",
	  emergencyContact: 9364828102,
	  dob: '2015-06-10',
	  type: "child"
	},{
	  name: "Miguel Hernandez",
	  emergencyContact: 9798271038,
	  dob: '2015-05-05',
	  type: "child"
	},{
	  name: "Lindsey Velasco",
	  emergencyContact: 9369182793,
	  dob: '2015-04-27',
	  type: "child"
	},{
	  name: "Daniel Johnson",
	  emergencyContact: 7132638390,
	  dob: '2015-07-05',
	  type: "child"
	}
];

db.Child.remove({}, function(err, children){
  if (err) {
    console.log('Error occured in remove',err);
  } else {
    console.log('Success in remove');

    db.Child.create(childrenList, function(err, children){
      if (err) { return console.log('ERROR', err); }
      console.log("All children:", children);
      console.log("Created", children.length, "child object");
      process.exit();
    });
  }
});
