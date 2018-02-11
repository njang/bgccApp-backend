// This file allows us to seed our application with data
// Run `node seed.js` from the root of this project folder.
const mongoose = require('mongoose');
const db = require('../models');

const childrenList =[
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

let childrenIDs = [];

db.Child.remove({}, (err, children) => {
  if (err) {
    console.log('Error occured in clearing children database',err);
  } else {
    console.log('Success in clearing children database');
    db.Child.create(childrenList, (err, children) => {
      if (err) { return console.log('ERROR', err); }
      // console.log('All children:', children);
      console.log('Created', children.length, 'child objects');
      childrenIDs = children.map( (child) => { return child._id} )
      generateDocuments(childrenIDs);
      // process.exit();
    });
  }
});

db.Document.remove({}, (err, document) => {
  if (err) {
    console.log('Error occured in clearing document database',err);
  } else {
    console.log('Success in clearing children database');
		db.Document.create(
			{ type: 'document',
		    template: 'template/eat',
		    childID: '5a7f52d24d34686933dca084',
		    date: '2/10/2018',
		    meal: 'AM snack',
		    amount: 'Some' 
		  }
		, (err, document))
	}
})

// let documents = [];
// const generateDocuments = (childIDs) => {
//   for (let i = 0; i < childIDs.length; i++) {
//   	for (let j = 0; j < 3; j++) {
// 	  	let eatTime;
// 	  	switch(j) {
// 				case 0: eatTime = 'AM snack'; break;
// 				case 1: eatTime = 'PM snack'; break;
// 				default: eatTime = 'lunch';
// 			};
// 			let eatAmount;
// 			switch(Math.round(Math.random()*3)) {
// 				case 0: eatAmount = 'All'; break;
// 				case 1: eatAmount = 'Lots'; break;
// 				case 2: eatAmount = 'Some'; break;
// 				default: eatAmount = 'None';
// 			}
// 	  	documents.push({
// 	  		type: 'document',
// 	  		template: 'template/eat',
// 	  		childID: childIDs[i],
// 	  		date: ( new Date( Date.now() ) ).toLocaleDateString(),
// 	  		meal: eatTime,
// 	  		amount: eatAmount
// 	  	})
//   	}
//   }
//   console.log(documents);
//   console.log('Remove proceeded');
//   db.Document.remove({}, (err, documents) => {
// 	  console.log('remove requested');
// 	  if (err) {
// 	    console.log('Error occured in clearing documents database',err);
// 	  } else {
// 	    console.log('Success in clearing documents database');

// 	  	// console.log('Recording '+ documents.length +' meal logs');
// 	   //  db.Document.create(documents, (err, documents) => {
// 	   //    if (err) { return console.log('ERROR', err); }
// 	   //    // console.log('All children:', children);
// 	   //    console.log('Created', documents.length, 'document objects');
// 	   //    process.exit();
// 	   //  });
// 	  }
// 	});
// }

// console.log(documents[0])