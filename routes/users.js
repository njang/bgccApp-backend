var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({children: [
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
]});
});

module.exports = router;
