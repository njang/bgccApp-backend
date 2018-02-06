// This file allows us to seed our application with data
// Run `node seed.js` from the root of this project folder.
const mongoose = require("mongoose");
const db = require("../models");

var childrenList =[];
childrenList.push([
	{
	  name: "Samantha Duncan",
	  phone: 9793825018
	},{
	  name: "Jonathan Ransom",
	  phone: 9795731839
	},{
	  name: "Meghan Allen",
	  phone: 9792733752
	},{
	  name: "Ross Fairbanks",
	  phone: 9792839103	  
	},{
	  name: "Christopher Chen",
	  phone: 7132835909
	},{
	  name: "Dustin Avery",
	  phone: 9792038738
	},{
	  name: "Fabian Ros",
	  phone: 7132849083
	},{
	  name: "Lauren Ramirez",
	  phone: 7138592038
	},{
	  name: "Joshua Martinez",
	  phone: 9364828102
	},{
	  name: "Miguel Hernandez",
	  phone: 9798271038
	},{
	  name: "Lindsey Velasco",
	  phone: 9369182793
	},{
	  name: "Daniel Johnson",
	  phone: 7132638390
	}
]);

db.Child.remove({}, function(err, children){
  if (err) {
    console.log('Error occured in remove',err);
  } else {
    console.log('Success in remove');

    db.Child.create(childrenList, function(err, children){
      if (err) { return console.log('ERROR', err); }
      console.log("All children:", children);
      console.log("Created", children.length, "children");
      process.exit();
    });
  }
});
