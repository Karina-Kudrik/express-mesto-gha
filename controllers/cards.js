const Card = require('../models/card');
const {
  SERVER_ERROR,
  NOT_FOUND,
  BAD_REQUEST,
} = require('../errors');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(() => {
      res
        .status(SERVER_ERROR)
        .send({ message: 'Ошибка сервера. Попробуйте позже.' });
    });
};

module.exports.addCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res
          .status(BAD_REQUEST)
          .send({ message: 'Неверные данные для создания карточки' });
        return;
      }
      res
        .status(SERVER_ERROR)
        .send({ message: 'Ошибка сервера. Попробуйте позже.' });
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (!card) {
        res.status(NOT_FOUND).send({ message: 'Карточка не найдена.' });
        return;
      }
      res.send({ card });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(BAD_REQUEST).send({ message: 'Данные некорректны.' });
        return;
      }
      res
        .status(SERVER_ERROR)
        .send({ message: 'Ошибка сервера. Попробуйте позже.' });
    });
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        res.status(NOT_FOUND).send({ message: 'Карточка не найдена.' });
        return;
      }
      res.send({ card });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(BAD_REQUEST).send({ message: 'Данные некорректны.' });
        return;
      }
      res
        .status(SERVER_ERROR)
        .send({ message: 'Ошибка сервера. Попробуйте позже.' });
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        res.status(NOT_FOUND).send({ message: 'Карточка не найдена.' });
        return;
      }
      res.send({ card });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(BAD_REQUEST).send({ message: 'Данные некорректны.' });
        return;
      }
      res
        .status(SERVER_ERROR)
        .send({ message: 'Ошибка сервера. Попробуйте позже.' });
    });
};
