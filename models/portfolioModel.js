const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  welcomeText: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const aboutSchema = new mongoose.Schema({
  lottieURL: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const projectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  technolgies: {
    type: Array,
    required: true,
  },
});

const talksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type_of_audience: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  org_name: {
    type: String,
    required: true,
  },
  remark: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const journalsSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Title_of_journal_ppr: {
    type: String,
    required: true,
  },
  Author_list: {
    type: String,
    required: true,
  },
  ISSN_DOI: {
    type: String,
    required: true,
  },
  Remark: {
    type: String,
    required: true,
  },
});

const fprojectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  studentgrp: {
    type: String,
    required: true,
  },
  absvideolink: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  fundingagencyname: {
    type: String,
    required: true,
  },
  amtfunded: {
    type: String,
    required: true,
  },
  remark: {
    type: String,
    required: true,
  },
});

const coursesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const conferencesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  conference: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  DOI: {
    type: String,
    required: true,
  },
  remark: {
    type: String,
    required: true,
  },
});

const oractivitySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  organisation: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    required: true,
  },
});

const ugprojectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  abstract: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  reportlink: {
    type: String,
    required: true,
  },
  
});

const currentPositionSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  tenure: {
    type: Date,
    required: true,
  },
  
});

const awardsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  organisation: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  remark: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const pastpositionSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true,
  },

  department: {
    type: String,
    required: true,
  },
  tenurefrom: {
    type: Date,
    required: true,
  },
  tenureto: {
    type: Date,
    required: true,
  },
});

module.exports = {
  Intro: mongoose.model("intros", introSchema),
  About: mongoose.model("abouts", aboutSchema),
  Experience: mongoose.model("experiences", experienceSchema),
  Project: mongoose.model("projects", projectsSchema),
  Course: mongoose.model("courses", coursesSchema),
  Contact: mongoose.model("contacts", contactSchema),
  Talks : mongoose.model("talks", talksSchema),
  Journal : mongoose.model("journals", journalsSchema),
  Fprojects : mongoose.model("fprojects", fprojectsSchema),
  Conference : mongoose.model("conferences", conferencesSchema),
  UGProject : mongoose.model("UGproject", ugprojectsSchema),
  PGProject : mongoose.model("PGproject", ugprojectsSchema),
  ORActivity : mongoose.model("ORActivity", oractivitySchema),
  Awards : mongoose.model("Awards", awardsSchema),
  CurrentPosition : mongoose.model("CurrentPosition", currentPositionSchema),
  PastPosition : mongoose.model("PastPosition", pastpositionSchema),
};
