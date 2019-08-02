const users = require("../data/users");
const sampleUser = require("../data/sampleUser");


const list = (req, res) => {
  res.json(users);
};

const show = (req, res) => {
  const user = users.find(function(item) {
    return item.id == req.params.id;
  });
  if (user) {
    res.json(user)
  } else {
    res.status(404).json({ msg: `No user data found.` });
  }
};

const create = (req, res) => {
  let lastId = users[users.length-1].id;
  const updateUser = {
    id: lastId + 1,
    name: req.body.name,
    occupation: req.body.occupation,
  };
  users.push(updateUser);
  res.json(users)
};

const put = (req, res) => {
  const user = users.find(function(item) {
    return item.id == req.params.id;
  });
  if (user) {
    user.name = req.body.name;
    res.json(users)
  } else {
    res.status(400).json({ msg: `User id ${req.params.id} not found.` });
  }
  //If using sampleUser: Comment out top function and uncomment the bottom 3 lines

  // let index = users.indexOf(user);
  // users[index] = sampleUser;
  // res.json(users);
};

const removed = (req, res) => {
  const found = users.some(user => user.id == req.params.id);
  if (found) {
    const userObject = users.filter(user => user.id == req.params.id);
    console.log(userObject[0]);
    users.splice(userObject[0].id - 1, 1);
    res.send("msg: deleted!");
  } else {
    res.status(400).json({ msg: `User id ${req.params.id} not found.` });
  }
};

module.exports = {
  list,
  show,
  create,
  put,
  removed
};
