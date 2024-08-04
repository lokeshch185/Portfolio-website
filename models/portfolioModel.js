const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  welcomeText: {
    type: String,
    required: false,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  caption: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
});

const aboutSchema = new mongoose.Schema({
  lottieURL: {
    type: String,
    required: false,
  },
  description1: {
    type: String,
    required: false,
  },
  description2: {
    type: String,
    required: false,
  },
  skills: {
    type: Array,
    required: false,
  },
});

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  period: {
    type: String,
    required: false,
  },
  company: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
});

const projectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
  technolgies: {
    type: Array,
    required: false,
  },
});

const talksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  type_of_audience: {
    type: String,
    required: false,
  },
  number: {
    type: String,
    required: false,
  },
  org_name: {
    type: String,
    required: false,
  },
  remark: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: false,
  },
});

const journalsSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: false,
  },
  Title_of_journal_ppr: {
    type: String,
    required: false,
  },
  Author_list: {
    type: String,
    required: false,
  },
  ISSN_DOI: {
    type: String,
    required: false,
  },
  Remark: {
    type: String,
    required: false,
  },
});

const fprojectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  fundingagencyname: {
    type: String,
    required: false,
  },
  amtfunded: {
    type: String,
    required: false,
  },
  tenurefrom: {
    type: Date,
    required: false,
  },
  tenureto: {
    type: Date,
    required: false,
  },

//mostly nai chahiye
  studentgrp: {
    type: String,
    required: false,
  },
  absvideolink: {
    type: String,
    required: false,
  },
  photo: {
    type: String,
    required: false,
  },
  remark: {
    type: String,
    required: false,
  },
});

const coursesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
});

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  mobile: {
    type: String,
    required: false,
  },
  age: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
});

const conferencesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  conference: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: false,
  },
  authors: {
    type: String,
    required: false,
  },
  venue: {
    type: String,
    required: false,
  },
  DOI: {
    type: String,
    required: false,
  },
  remark: {
    type: String,
    required: false,
  },
});

const oractivitySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: false,
  },
  organisation: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  responsibilities: {
    type: String,
    required: false,
  },
  remarks: {
    type: String,
    required: false,
  },
});

const ugprojectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  group: {
    type: String,
    required: false,
  },
  abstract: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
  photo: {
    type: String,
    required: false,
  },
  reportlink: {
    type: String,
    required: false,
  },
  
});

const currentPositionSchema = new mongoose.Schema({
  position: {
    type: String,
    required: false,
  },
  department: {
    type: String,
    required: false,
  },
  // tenure: {
  //   type: Date,
  //   required: false,
  // },
  
});

const awardsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  organisation: {
    type: String,
    required: false,
  },
  photo: {
    type: String,
    required: false,
  },
  remark: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: false,
  },
});

const pastpositionSchema = new mongoose.Schema({
  position: {
    type: String,
    required: false,
  },

  department: {
    type: String,
    required: false,
  },
  tenurefrom: {
    type: String,
    required: false,
  },
  tenureto: {
    type: String,
    required: false,
  },
});

const interestsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
});

const recognitionsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: false,
  },
});

const patentsSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: false,
  },

  title: {
    type: String,
    required: false,
  },
  authors: {
    type: String,
    required: false,
  },
  organisation: {
    type: String,
    required: false,
  },
  remarks: {
    type: String,
    required: false,
  },
  
  
});

const addpositionsSchema = new mongoose.Schema({
  position: {
    type: String,
    required: false,
  },

  department: {
    type: String,
    required: false,
  },
  
});

const visitingpositionsSchema = new mongoose.Schema({
  institute: {
    type: String,
    required: false,
  },

  course: {
    type: String,
    required: false,
  },

  tenure:{
    type: String,
    required: false,
  },
});

const mentoredSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  organisation: {
    type: String,
    required: false,
  },
  grantreceived: {
    type: String,
    required: false,
  },
  remarks: {
    type: String,
    required: false,
  },
});

const flagshipsSchema = new mongoose.Schema({
  event: {
    type: String,
    required: false,
  },
  year: {
    type: String,
    required: false,
  },
  college: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: false,
  },
  
});

const eventsSchema = new mongoose.Schema({
  
  event: {
    type: String,
    required: false,
  },
  venue: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: false,
  },
  weblink: {
    type: String,
    required: false,
  },
  
});

const fdpSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },

  description: {
    type: String,
    required: false,
  },
  from: {
    type: Date,
    required: false,
  },
  to: {
    type: Date,
    required: false,
  },

});

const workshopsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  from: {
    type: Date,
    required: false,
  },
  to: {
    type: Date,
    required: false,
  },

  
});

const reportSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  }
  
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
  Interest: mongoose.model("interests", interestsSchema),
  Patents: mongoose.model("patents", patentsSchema),
  Recognitions : mongoose.model("recognitions", recognitionsSchema),
  AddPosition : mongoose.model("AddPosition", addpositionsSchema),
  VisitingPosition : mongoose.model("VisitingPosition", visitingpositionsSchema),
  Mentored : mongoose.model("mentored", mentoredSchema),
  Flagship: mongoose.model("flagships", flagshipsSchema),
  Events: mongoose.model("events", eventsSchema),
  FDP:  mongoose.model("fdp", fdpSchema),
  WorkShops: mongoose.model("workshops", workshopsSchema),
  Report: mongoose.model("reports", reportSchema),
};
