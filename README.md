# Starting a new NODE project from scratch

create 3 empty files

```bash
touch .gitignore README.md server.js
```

(in the first file, add the node modules directory)

> **`.gitignore`**

```bash
node_modules/
```

Initizialize a git repo

```bash
git init
```

create a `package.json` file by Initizializing a NodeJS project

```bash
npm init
```

Install the `dependencies` (by adding them to the _`package.json`_ file)

```bash
npm i bcryptjs client config express express-validator gravatar jsonwebtoken mongoose normalize-url request
```

Install the `developement dependencies` (by adding them to the `package.json` file)

```bash
npm i -D nodemon concurrently
```

<!-- finish the installation by reading the `package.json` file

```bash
npm install
``` -->

add `start` and `server` scripts in

> **`package.json`**

```json
  "scripts": {
    "start": "node server",
    "server": "nodemon server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

(in the last file, build the server)

> **`server.js`**

```js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('appy appy appy');
  res.send('API for you');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
```

finally run it from the command line..

```bash
npm run server
```

then stop it with **CNTRL C**

and push it to **`Git Hub`**

```bash
git commit -m "first commit"
git remote add origin git@github.com:TurtleWolf/MERNbt.git
git push -u origin master
```

---

## 7. Connecting To MongoDB With Mongoose

create 2 empty files in **`config/`**

```bash
mkdir config
cd config
touch default.json db.js
```

---

## 8. Route Files With Express Router

create 4 empty files in **`routes/api/`**

```bash
mkdir routes/api
cd routes/api
touch auth.js posts.js profile.js users.js
```

> **`routes/api/users.js`**

```js
const express = require('express');
const router = express.Router();

// @route    POST api/users
// @desc     Register user
// @access   Public
router.get('/', (req, res) => {
  res.send('User Route');
});

module.exports = router;
```

---

---

---

---

---

---

---

(then I addded a copy of Brad's notes at the bottom of the README.md)

---

## DevConnector 2.0 (then I addded a copy of Brad's notes at the bottom of the README.md)

> Social network for developers

This is a MERN stack application from the "MERN Stack Front To Back" course on [Udemy](https://www.udemy.com/mern-stack-front-to-back/?couponCode=TRAVERSYMEDIA). It is a small social network app that includes authentication, profiles and forum posts.

## Updates since course published

Since the course was published, GitHub has [depreciated authentication via URL query parameters](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api/#authenticating-using-query-parameters)
You can get an access token by following [these instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)
For this app we don't need to add any permissions so don't select any in the _scopes_.
**DO NOT SHARE ANY TOKENS THAT HAVE PERMISSIONS**
This would leave your account or repositories vulnerable, depending on permissions set.

It would also be worth adding your `default.json` config file to `.gitignore`
If git has been previously tracking your `default.json` file then...

```bash
git rm --cached config/default.json
```

Then add your token to the config file and confirm that the file is untracked with `git status` before pushing to GitHub.
You'll also need to change the options object in `routes/api/profile.js` where we make the request to the GitHub API to...

```js
const options = {
  uri: encodeURI(
    `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc`
  ),
  method: 'GET',
  headers: {
    'user-agent': 'node.js',
    Authorization: `token ${config.get('githubToken')}`,
  },
};
```

## Quick Start

### Add a default.json file in config folder with the folowing

```json
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": ""
}
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build
```

## App Info

### Author

Brad Traversy
[Traversy Media](http://www.traversymedia.com)

### Version

2.0.0

### License

This project is licensed under the MIT License
