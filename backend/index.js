const express = require("express");
const app = express();


var router = require("express").Router();

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mongoose = require('mongoose');
const { response, request } = require('express');

mongoose.set('strictQuery', false)
mongoose
  .connect('mongodb://127.0.0.1/clothing_store')
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((error) => {
    console.log("Database Connectivity Error", error);
    process.exit(1);
  });