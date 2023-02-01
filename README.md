[![Tests](https://github.com/yandex-praktikum/express-mesto-gha/actions/workflows/tests-13-sprint.yml/badge.svg)](https://github.com/yandex-praktikum/express-mesto-gha/actions/workflows/tests-13-sprint.yml) [![Tests](https://github.com/yandex-praktikum/express-mesto-gha/actions/workflows/tests-14-sprint.yml/badge.svg)](https://github.com/yandex-praktikum/express-mesto-gha/actions/workflows/tests-14-sprint.yml)
# Бэкенд для проекта Mesto
Mesto — это веб-сервис, с помощью которого пользователи могут обмениваться фотографиями и оценивать фотографии других людей. 

## Функционал:
* Регистрация
* Авторизация
* Обновление данных пользователя
* Обновление аватара
* Получение списка пользователя
* Получение пользователя по ID
* Получение информации о текущем пользователе
* Получение списка карточек
* Создание карточки
* Удаление карточки
* Постановка лайка
* Снятие лайка
* Центральная обработка ошибок
* Валидация входящих данных

## Технологии
* Express
* MongoDB
* Mongoose
* NodeJS

## Директории
`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и карточки   
`/models` — папка с файлами описания схем пользователя и карточки  

## Запуск проекта
`git clone https://karina-kudrik.github.io/express-mesto-gha.git` - клонирование репозитория

`npm install`- установка зависимостей

`npm run start` - запуск сервера

`npm run dev` — запускает сервер с hot-reload
