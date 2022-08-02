const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    minlength: [2, 'Поле должно содержать от 2 до 30 символов.'],
    maxlength: [30, 'Поле должно содержать от 2 до 30 символов.'],
  },
  about: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    minlength: [2, 'Поле должно содержать от 2 до 30 символов.'],
    maxlength: [30, 'Поле должно содержать от 2 до 30 символов.'],
  },
  avatar: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
});

module.exports = mongoose.model('user', userSchema);
