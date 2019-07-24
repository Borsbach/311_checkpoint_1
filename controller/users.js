const users = require('../data/users')

const list = (req, res) => {
  res.json(users
  )
}

const show = (req, res) => {
  const user = users.find(function(item) {
    return item._id == req.params.id
  })
  res.json(user)
}

const create = (req, res) => {
  const newUser = {
    _id: users.length +1,
    body: req.body.body
  }
  users
.push(newUser)
}

const put = (req, res) => {
  const updateUser = {
    id: req.body._id,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  };
  users.push(updateUser);
  res.json(users);
};

const removed = (req, res) => {
  const found = users.some(user => user._id == req.params.id);
  if (found) {
    const userObject = users.filter(user => user._id == req.params.id);
    console.log(userObject[0]);
    users.splice(userObject[0]._id - 1, 1);
    res.send("msg: deleted!");
  } else {
    res.status(400).json({ msg: `User id ${req.params.id} not found.` });
  }
};

module.exports = {
  list, show, create, put, removed
}