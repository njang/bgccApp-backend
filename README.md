# bgccApp-backend

# Heroku Checklist:

### First, create your new Git repo and app:

1. Create a new Git Repo with your app name, e.g. `testing-heroku`. Click 'Initialize with a README'.

1. Clone the repo to your computer.

1. `cd` into `testing-heroku`

1. Create a new Express app in the `testing-heroku` folder by running the command `express . --view=hbs --git`

1. Alternatively, **if you are creating a JSON API** use [express-generator-api](https://www.npmjs.com/package/express-generator-api)
	- `$ npm install -g express-generator-api`
	- `express-api my-app && cd my-app`
	- `npm install`
	- `nodemon`

1. Make sure to add a `.gitignore` file to your project and ignore `node_modules/`

1. Run `npm install`

1. Add and commit your changes.

1. Push the changes up to your `origin master` branch.

1. Check `git remote -v` --> You should only see `origin` available.

1. Run `heroku create` to add a new `heroku` origin (or `heroku create my-awesome-app-name`)

1. Run `git remote -v` again to check that you now have both `origin` and `heroku` upstreams available.

1. Run `git push heroku master` to push your latest commit to Heroku.

1. Check your deployed link by copying the link from your logs into your browser OR running `heroku open`

1. You can also check `https://dashboard.heroku.com/apps/` to see your running apps

### Then, hook up your Mongo database:

```YOU MAY HAVE TO VERIFY YOUR PAYMENT INFO WITH HEROKU FIRST! YOU WILL NOT BE CHARGED.```

1. Run `heroku addons:create mongolab:sandbox` to create a new Mongo DB.
	- If you get an error: `Error: Cannot find module '@cli-engine/engine'` try this:
		-  `brew uninstall --force heroku`
		- `brew install heroku`


1. Check `heroku config` to view your environment variables.

1. You should see an environment variable called `MONGODB_URI`.

1. `npm install --save mongoose`

1. Create a `env.js` file in the root of your application on your local machine and add `module.exports.MONGODB_URI="YOUR-MONGO-URI"`


1. Add these lines to your `app.js` or `server.js` file: 

	```javascript
	const mongoose = require('mongoose');
	const ENV      = require('./env');
	mongoose.connect(ENV.MONGODB_URI); 
	```

1. Make sure you've added your `env.js` file to your `.gitignore` file.

1. COMMIT

1. Add a model for your resource. Here's an example user model: 

```js
	//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String
});

module.exports = mongoose.model('User', UserSchema );
```

1. Create a seed file to add data. Here's an example seed file: 

```js
const mongoose = require('mongoose');
const User = require('./models/user');

User.create({name:"timmy"});
```

1. Seed your data `node seed.js`

1. Get data from your DB in your route, instead of serving hardcoded-data. Example route for getting all users: 
```js
/* GET users listing. */
router.get('/', function(req, res, next) {
   User.find({}, function(err, users) {
    res.json(users);  
  });
});
```

1. Test/debug locally

1. COMMIT

### Configuring your ENV

1. There are many ways to do this. I recommend this in your `server.js`
```js
let ENV;

try {
  ENV = require('./env');
} catch (ex) {
  ENV = process.env;
}

mongoose.connect(ENV.MONGODB_URI);
```

1. You can also use [dot-env](https://www.npmjs.com/package/dotenv)

### Final Push

1. Run `git push heroku master` to push your latest commit to Heroku.

1. Go to Heroku Dashboard -> your app -> settings -> config-variables and add the ENV variables

1. Test on deployed app. 

### Debugging: 

1. Run `heroku logs` from your terminal to see errors

1. Check out a working, deployed Express API with mongo [here](https://github.com/awhit012/testing-mongo-deploy)

1. If you get stuck, consider cloning the above code example and working from there. Remember, you will have to create a `env.js` file locally with your MongoLab credential.
