const User = require('../models/user');
const { SERVER_ERROR, NOT_FOUND, BAD_REQUEST } = require('../errors');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => (res.send({ data: users })))
    .catch(() => res.status(SERVER_ERROR).send({ message: 'Ошибка сервера. Попробуйте позже.' }));
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        return res.status(NOT_FOUND).send({ message: 'Пользователь с переданным id не найден.' });
      }
      return res.send(user);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(BAD_REQUEST).send({ message: 'Id пользователя передан некорректно.' });
      }
      res.status(SERVER_ERROR).send({ message: 'Ошибка сервера. Попробуйте позже.' });
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => (res.send({ data: user })))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(BAD_REQUEST).send({ message: 'Неверные данные для создания пользователя' });
        return;
      }
      res.status(SERVER_ERROR).send({ message: 'Ошибка сервера. Попробуйте позже.' });
    });
};

module.exports.updateProfile = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true })
    .then((user) => {
      if (!user) {
        res.status(NOT_FOUND).send({ message: 'Пользователь с таким id не найден.' });
      } else {
        res.send({ data: user });
      }
    })
    .catch((err) => {
      if (err.name === 'ValidationError' || err.name === 'CastError') {
        res.status(BAD_REQUEST).send({ message: 'Неверные данные для обновления информации о пользователе' });
      } else {
        res.status(SERVER_ERROR).send({ message: 'Ошибка сервера. Попробуйте позже.' });
      }
    });
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true })
    .then((user) => {
      if (!user) {
        res.status(NOT_FOUND).send({ message: 'Пользователь с таким id не найден.' });
      } else {
        res.send({ data: user });
      }
    })
    .catch((err) => {
      if (err.name === 'ValidationError' || err.name === 'CastError') {
        res.status(BAD_REQUEST).send({ message: 'Неверные данные для обновления автара пользователя' });
      } else {
        res.status(SERVER_ERROR).send({ message: 'Ошибка сервера. Попробуйте позже.' });
      }
    });
};
