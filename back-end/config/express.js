const express = require('express');
const cookieParser = require('cookie-parser');

module.exports = (app) => {
    //Body parser
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    //Cookie parser
    app.use(cookieParser());
}