const router = require("express").Router();
const {
  Intro,
  About,
  Project,
  Contact,
  Experience,
  Course,
  Talks,
  Journal,
  Fprojects,
  Conference,
  UGProject,
  ORActivity,
  Awards,
  CurrentPosition,
  PastPosition
} = require("../models/portfolioModel");
const User = require("../models/userModel");
// get all portfolio data
router.get("/get-portfolio-data", async (req, res) => {
  try {
    // console.log("hello");
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    const courses = await Course.find();
    const talks = await Talks.find();
    const journals = await Journal.find();
    const fprojects = await Fprojects.find();
    const conferences = await Conference.find();
    const ugprojects = await UGProject.find();
    const oractivities = await ORActivity.find();
    const awards = await Awards.find();
    const currentpositions = await CurrentPosition.find();
    const pastpositions = await PastPosition.find();

 


    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      projects: projects,
      contact: contacts[0],
      experiences: experiences,
      courses: courses,
      talks: talks,
      journals:journals,
      fprojects : fprojects,
      conferences: conferences,
      oractivities: oractivities,
      ugprojects: ugprojects,
      awards : awards,
      currentpositions : currentpositions,
      pastpositions : pastpositions,
    }
    
  );
  console.log("hello");
  } catch (error) {
    res.status(500).send(error);
  } 
});

// update intro
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update about
router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "Abouts updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add experience

router.post("/add-experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update experience
router.post("/update-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete experience
router.post("/delete-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add oractivity
router.post("/add-oractivity", async (req, res) => {
  try {
    const oractivity = new ORActivity(req.body);
    await oractivity.save();
    res.status(200).send({
      data: oractivity,
      success: true,
      message: "OutReach Activity added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update oractivity
router.post("/update-oractivity", async (req, res) => {
  try {
    const oractivity = await ORActivity.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: oractivity,
      success: true,
      message: "OutReach Activity updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete oractivity

router.post("/delete-oractivity", async (req, res) => {
  try {
    const oractivity = await ORActivity.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: oractivity,
      success: true,
      message: "OutReach Activity deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add ugproject
router.post("/add-ugproject", async (req, res) => {
  try {
    const ugproject = new UGProject(req.body);
    await ugproject.save();
    res.status(200).send({
      data: ugproject,
      success: true,
      message: "UGProject added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update UGProject
router.post("/update-ugproject", async (req, res) => {
  try {
    const ugproject = await UGProject.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: ugproject,
      success: true,
      message: "UGProject updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete UGProject
router.post("/delete-ugproject", async (req, res) => {
  try {
    console.log(req.body._id);
    const ugproject = await UGProject.findOneAndDelete({ _id: req.body._id });
    console.log(ugproject);
    res.status(200).send({
      data: ugproject,
      success: true,
      message: "UGProject deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add award
router.post("/add-award", async (req, res) => {
  try {
    const award = new Awards(req.body);
    // console.log(award);
    await award.save();
    res.status(200).send({
      data: award,
      success: true,
      message: "Award added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update award
router.post("/update-award", async (req, res) => {
  try {
    const award = await Awards.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: award,
      success: true,
      message: "Award updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete award

router.post("/delete-award", async (req, res) => {
  try {
    const award = await Awards.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: award,
      success: true,
      message: "Award deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add project
router.post("/add-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: "Project added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update project
router.post("/update-project", async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: project,
      success: true,
      message: "Project updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete project

router.post("/delete-project", async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: project,
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add journal paper

router.post("/add-journal", async (req, res) => {
  try {
    const journal = new Journal(req.body);
    await journal.save();
    res.status(200).send({
      data: journal,
      success: true,
      message: "Journal paper added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update journal paper
router.post("/update-journal", async (req, res) => {
  try {
    const journal = await Journal.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: journal,
      success: true,
      message: "Journal paper updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete journal paper
router.post("/delete-journal", async (req, res) => {
  try {
    const journal = await Journal.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: journal,
      success: true,
      message: "Journal paper deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//add fprojects
router.post("/add-fprojects", async (req, res) => {
  try {
    const fprojects = new fprojects(req.body);
    await fprojects.save();
    res.status(200).send({
      data: fprojects,
      success: true,
      message: "fprojects added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update fprojects
router.post("/update-fprojects", async (req, res) => {
  try {
    const fprojects = await fprojects.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: fprojects,
      success: true,
      message: "fprojects updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete fprojects
router.post("/delete-fprojects", async (req, res) => {
  try {
    const fprojects = await fprojects.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: fprojects,
      success: true,
      message: "fprojects deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add course
router.post("/add-course", async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(200).send({
      data: course,
      success: true,
      message: "Course added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update course
router.post("/update-course", async (req, res) => {
  try {
    const course = await Course.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: course,
      success: true,
      message: "Course updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete course

router.post("/delete-course", async (req, res) => {
  try {
    const course = await Course.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: course,
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add talk

router.post("/add-talk", async (req, res) => {
  try {
    const talks = new Talks(req.body);
    await talks.save();
    res.status(200).send({
      data: talks,
      success: true,
      message: "Talk added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update talk
router.post("/update-talk", async (req, res) => {
  try {
    const talks = await Talks.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: talks,
      success: true,
      message: "Talk updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete talk
router.post("/delete-talk", async (req, res) => {
  try {
    const talks = await Talks.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: talks,
      success: true,
      message: "Talk deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add currentposition

router.post("/add-currentposition", async (req, res) => {
  try {
    const currentpositions = new CurrentPosition(req.body);
    await currentpositions.save();
    res.status(200).send({
      data: currentpositions,
      success: true,
      message: "Current Position added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update currentposition

router.post("/update-currentposition", async (req, res) => {
  try {
    const currentpositions = await CurrentPosition.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: currentpositions,
      success: true,
      message: "Current Position updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete current position

router.post("/delete-currentposition", async (req, res) => {
  try {
    const currentpositions = await CurrentPosition.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: currentpositions,
      success: true,
      message: "Current Position deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add pastposition

router.post("/add-pastposition", async (req, res) => {
  try {
    const pastpositions = new PastPosition(req.body);
    await pastpositions.save();
    res.status(200).send({
      data: pastpositions,
      success: true,
      message: "Past Position added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update pastposition
router.post("/update-pastposition", async (req, res) => {
  try {
    const pastpositions = await PastPosition.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: pastpositions,
      success: true,
      message: "Past Position updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete pastposition
router.post("/delete-pastposition", async (req, res) => {
  try {
    const pastpositions = await PastPosition.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: pastpositions,
      success: true,
      message: "Past Position deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});



//add conference
router.post("/add-conference", async (req, res) => {
  try {
    const conference = new Conference(req.body);
    await conference.save();
    res.status(200).send({
      data: conference,
      success: true,
      message: "conference added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update conference
router.post("/update-conference", async (req, res) => {
  try {
    const conference = await Conference.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: conference,
      success: true,
      message: "Conference updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete conference
router.post("/delete-conference", async (req, res) => {
  try {
    const conference = await Conference.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: conference,
      success: true,
      message: "Conference deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update contact
router.post("/update-contact", async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: contact,
      success: true,
      message: "Contact updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// admin login
router.post("/admin-login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    user.password = "";
    if (user) {
      res.status(200).send({
        data: user,
        success: true,
        message: "Login successfully",
      });
    } else {
      res.status(200).send({
        data: user,
        success: false,
        message: "Invalid username or password",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
