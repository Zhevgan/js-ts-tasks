class User {
  #firstName;
  #secondName;
  #age;

  constructor(firstName, secondName, age) {
    if (typeof firstName !== 'string' || typeof secondName !== 'string') {
      throw new Error('firstName and secondName must be strings');
    }
    if (typeof age !== 'number') {
      throw new Error('age must be a number');
    }

    this.#firstName = firstName;
    this.#secondName = secondName;
    this.#age = age;
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    if (typeof newAge !== 'number') {
      throw new Error('age must be a number');
    }
    this.#age = newAge;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName !== 'string') {
      throw new Error('firstName must be a string');
    }
    this.#firstName = newFirstName;
  }

  set secondName(newSecondName) {
    if (typeof newSecondName !== 'string') {
      throw new Error('secondName must be a string');
    }
    this.#secondName = newSecondName;
  }

  get name() {
    return `${this.#firstName} ${this.#secondName}`;
  }

  introduce() {
    return `My name is ${this.name}, I'm ${this.#age}`;
  }

  celebrateBirthday() {
    this.#age += 1;
  }
}

module.exports.User = User;

module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

module.exports.createUsers = function (data) {
  return data.map(({ firstName, secondName, age }) => new User(firstName, secondName, age));
};

/**
 * @param {Array<User>} users
 * @param {number} age
 * @returns {Array<User>}
 */
module.exports.findUsersByAge = function (users, age) {
  return users.filter(user => user.age === age);
};

module.exports.createUsersSortFn = function (TestUtils) {
  return function (users) {
    return users.sort(TestUtils.comparator);
  };
};

module.exports.celebrate = function (users) {
  users.forEach((user, index) => {
    if (index % 2 === 0) {
      user.celebrateBirthday();
    }
  });
  return users;
};
