// This file allows us to seed our application with data
// Run `node seed.js` from the root of this project folder.
const mongoose = require('mongoose');
const db = require('../models');

var childrenList =[
	{
	  name: {
	  	first: 'Samantha',
	  	last: 'Duncan'
	  },
	  emergencyContact: 9793825018,
	  dob: '2016-01-11',
	  icon: 0,
	  type: 'child'
	},{
	  name: {
	  	first: 'Jonathan',
	  	last: 'Ransom'
	  },
	  emergencyContact: 9795731839,
	  dob: '2015-03-27',
	  icon: 1,
	  type: 'child'
	},{
	  name: {
	  	first: 'Meghan',
	  	last: 'Allen'
	  },
	  emergencyContact: 9792733752,
	  dob: '2015-07-02',
	  icon: 2,
	  type: 'child'
	},{
	  name: {
	  	first: 'Ross',
	  	last: 'Fairbanks'
	  },
	  emergencyContact: 9792839103,
	  dob: '2015-09-13',
	  icon: 3,
	  type: 'child'
	},{
	  name: {
	  	first: 'Chris',
	  	last: 'Chen'
	  },
	  emergencyContact: 7132835909,
	  dob: '2015-09-17',
	  icon: 4,
	  type: 'child'
	},{
	  name: {
	  	first: 'Dustin',
	  	last: 'Avery'
	  },
	  emergencyContact: 9792038738,
	  dob: '2015-11-02',
	  icon: 5,
	  type: 'child'
	},{
	  name: {
	  	first: 'Fabian',
	  	last: 'Ros'
	  },
	  emergencyContact: 7132849083,
	  dob: '2015-10-15',
	  icon: 6,
	  type: 'child'
	},{
	  name: {
	  	first: 'Lauren',
	  	last: 'Ramirez'
	  },
	  emergencyContact: 7138592038,
	  dob: '2016-01-02',
	  icon: 7,
	  type: 'child'
	},{
	  name: {
	  	first: 'Joshua',
	  	last: 'Martinez'
	  },
	  emergencyContact: 9364828102,
	  dob: '2015-06-10',
	  icon: 8,
	  type: 'child'
	},{
	  name: {
	  	first: 'Miguel',
	  	last: 'Hernandez'
	  },
	  emergencyContact: 9798271038,
	  dob: '2015-05-05',
	  icon: 9,
	  type: 'child'
	},{
	  name: {
	  	first: 'Lindsey',
	  	last: 'Velasco'
	  },
	  emergencyContact: 9369182793,
	  dob: '2015-04-27',
	  icon: 10,
	  type: 'child'
	},{
	  name: {
	  	first: 'Daniel',
	  	last: 'Johnson'
	  },
	  emergencyContact: 7132638390,
	  dob: '2015-07-05',
	  icon: 11,
	  type: 'child'
	}
];

db.Child.remove({}, function(err, children){
  if (err) {
    console.log('Error occured in remove',err);
  } else {
    console.log('Success in remove');

    db.Child.create(childrenList, function(err, children){
      if (err) { return console.log('ERROR', err); }
      console.log('All children:', children);
      console.log('Created', children.length, 'child object');
      process.exit();
    });
  }
});
