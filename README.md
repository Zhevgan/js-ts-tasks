# Tasks: 06 Classes

## Task description

<<<<<<< HEAD
### user.js
=======
### Git

Please install Git on your local machine https://git-scm.com/download

Verify it's done:
- In console type `git --version`
- If you see smth like `git version 2.29.2.windows.2` you're done

### Configuring SSH

We're highly recommend to configure SSH key for your machine (Windows/MacOS/Linux/etc) and put it into your Github account.

Follow this instruction to complete that step: [https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-configure-GitLab-SSH-keys-for-secure-Git-connections](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

#### MacOs tips
you can get your public key by run in terminal `cat ~/.ssh/id_rsa.pub`


### Fork current repository into your account
>>>>>>> upstream/main

#### Create class User

The first task is to create class User:

<<<<<<< HEAD
- Required **private** fields are: `firstName`, `secondName`, `age`
- Data types: `firstName` and `secondName` should be string AND it should be allowed to assign only string values to them (hint: throw an exception). `age` should be a number and should also not allow any data types except number.
- Constructor should get three params: `firstName`, `secondName`, `age`
- Create a getter and a setter functions for the field `age`
- Create **only** setter functions for the fields `firstName`, `secondName`
- Create a getter function `name` to return a full user name (`firstName` and `secondName` divided by one space)
- Create `introduce` function to return a string which will contain all user information in a following format (i.e our users is John Doe and his age is 24): `My name is John Doe, I'm 24`
- Create `celebrateBirthday` function increasing private field `age` by one
=======
1. Navigate to your forker repository and click on green button `Clone`
2. In dropdown find section **Clone with SSH** and copy that url git@github:...git
3. In console on your machine navigate to any folder you like and paste copied url after git clone: `git clone git@github...tasks.git`
4. Type in yes if console asks you about fingerprint
5. After cloning is done, in console type in `cd js-ts-tasks` and click Enter
6. Now you should be in a folder `js-ts-tasks`
7. In console type in `git config user.name "Name Surname"` where Name is your Name (same as on Github profile) and Surname is your Surname (same as on Github profile). **Your name should be written in English**. **Don't remove " " symbols**
8. In console type in `git config user.email youremailaddress@student.ehu.lt` where `youremailaddress@student.ehu.lt` is your address you used to register on Github (the same as on Github profile)
9. In console type in `git config user.name` and click Enter. You should see your name
10. In console type in `git config user.email` and click Enter. You should see your email address
>>>>>>> upstream/main

#### Create functions that will work with class User

##### createUser

A function that creates new User object with the provided user data and returns it

```js
createUser = function (firstName, secondName, age) {};
```

##### createUsers

A function that creates an Array of Users by provided Array of user data and returns that Array

```js
createUsers = function (data) {};
```

##### findUsersByAge

A function that in the provided Users Array will find only those users whose age equals target age and returns that Array of found users

```js
findUsersByAge = function (users, age) {};
```

##### createUsersSortFn

A function that returns a function that sort provided Array of Users using a comparator function from TestUtils

```js
createUsersSortFn = function (TestUtils) {};
```

##### celebrate

A function that in the provided Array of Users for every User under odd index in Array celebrates his birthday

```js
celebrate = function (users) {};
```

### Test cases

No test cases this time :) Please try to read test cases provided in test/user.test.js file. That exercise will enrich your programming skills in how to read and understand Unit tests.

Some useful links about how we create the code there:

- https://blog.logrocket.com/testing-node-js-mocha-chai/
- https://blog.logrocket.com/testing-node-js-mocha-chai/
- https://mochajs.org/
- https://devhints.io/chai

## Step before starting working on tasks

1. You need to execute the command npm install in the console. (1 time step)

## How to run tasks locally

1. Switch to the tasks branch you would like to solve
<<<<<<< HEAD
2. Ensure there's a `node_modules` folder (all packages are installed)
3. In console run `npm run test:local` command to test your solution
4. In console you will see results of your solution
=======
2. Each task has its own instructions in README.md
3. to run test localy you need to execute the proper command in the console e.g. npm run test:local:digitSum

## How to submit solution to Moodle

1. Develop a solution
2. Commit your solution. You need to follow the next commit message pattern: `feat: {commit message}` or `fix: {commit message}` e.g. `feat: solved task 1` or `fix: fixed comments` for task 3
3. _Push your solution to your forked repository_
4. Submit a link to the branch with solution in your forked repository to the moodle
>>>>>>> upstream/main
