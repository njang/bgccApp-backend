const mongoose = require('mongoose');
// const db = require('./models');
const Child = require('./models/child');

const childrenList = [
	{
		name: 'Jenny Lin',
		dob: '2015-03-27',
		emergencyContact: '9793820182',
		type: 'child'
	},
	{
		name: 'Jack Smith',
		dob: '2014-09-12',
		emergencyContact: '9792619276',
		type: 'child'
	}
];

Child.remove({}, (err, children) => {
  Child.create(childrenList, (err, children) => {
    if (err) {
      return console.log('ERROR ' + err);
    }
    console.log("all children " + children);
    console.log("added " + children.length + " children");
    process.exit();
  });
})