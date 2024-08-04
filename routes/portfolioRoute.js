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
  PGProject,
  ORActivity,
  Awards,
  CurrentPosition,
  PastPosition,
  Patents,
  Interest,
  Recognitions,
  AddPosition,
  VisitingPosition,
  Mentored,
  Flagship,
  Events,
  FDP,
  WorkShops,
  Report,
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
    const pgprojects = await PGProject.find();
    const oractivities = await ORActivity.find();
    const awards = await Awards.find();
    const currentpositions = await CurrentPosition.find();
    const pastpositions = await PastPosition.find();
    const patents = await Patents.find();
    const interests = await Interest.find();
    const recognitions = await Recognitions.find();
    const addpositions = await AddPosition.find();
    const visitingpositions = await VisitingPosition.find();
    const mentored = await Mentored.find();
    const flagships = await Flagship.find();
    const events = await Events.find();
    const fdps = await FDP.find();
    const workshops = await WorkShops.find();
    const reports = await Report.find();

 


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
      pgprojects : pgprojects,
      awards : awards,
      currentpositions : currentpositions,
      pastpositions : pastpositions,
      patents : patents,
      interests:interests,
      recognitions: recognitions,
      addpositions  : addpositions,
      visitingpositions : visitingpositions,
      mentored : mentored,
      flagships : flagships,
      events : events,
      fdps: fdps,
      workshops: workshops,
      reports:reports,



      
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

// add PGproject
router.post("/add-pgproject", async (req, res) => {
  try {
    const pgproject = new PGProject(req.body);
    await pgproject.save();
    res.status(200).send({
      data: pgproject,
      success: true,
      message: "PGProject added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update PGProject
router.post("/update-pgproject", async (req, res) => {
  try {
    const pgproject = await PGProject.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: pgproject,
      success: true,
      message: "PGProject updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete PGProject
router.post("/delete-pgproject", async (req, res) => {
  try {
    console.log(req.body._id);
    const pgproject = await PGProject.findOneAndDelete({ _id: req.body._id });
    console.log(pgproject);
    res.status(200).send({
      data: pgproject,
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
    const fprojects = new Fprojects(req.body);
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
    const fprojects = await Fprojects.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: fprojects,
      success: true,
      message: "Funded Project updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete fprojects
router.post("/delete-fprojects", async (req, res) => {
  try {
    const fprojects = await Fprojects.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: fprojects,
      success: true,
      message: "Funded Project deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//add flagship
router.post("/add-flagship", async (req, res) => {
  try {
    const flagship = new Flagship(req.body);
    await flagship.save();
    res.status(200).send({
      data: flagship,
      success: true,
      message: "Flagship added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update flagship
router.post("/update-flagship", async (req, res) => {
  try {
    const flagship = await Flagship.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: flagship,
      success: true,
      message: "Flagship event updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete flagship
router.post("/delete-flagship", async (req, res) => {
  try {
    const flagship = await Flagship.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: flagship,
      success: true,
      message: "Flagship event deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//add event
router.post("/add-event", async (req, res) => {
  try {
    const event = new Events(req.body);
    await event.save();
    res.status(200).send({
      data: event,
      success: true,
      message: "Event added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update event
router.post("/update-event", async (req, res) => {
  try {
    const event = await Events.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: event,
      success: true,
      message: "Event updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete event
router.post("/delete-event", async (req, res) => {
  try {
    const event = await Events.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: event,
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add patent

router.post("/add-patent", async (req, res) => {
  try {
    const patents = new Patents(req.body);
    await patents.save();
    res.status(200).send({
      data: patents,
      success: true,
      message: "Patent added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update patent
router.post("/update-patent", async (req, res) => {
  try {
    const patents = await Patents.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: patents,
      success: true,
      message: "Patent updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete patent
router.post("/delete-patent", async (req, res) => {
  try {
    const patents = await Patents.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: patents,
      success: true,
      message: "Patent deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add fdp

router.post("/add-fdp", async (req, res) => {
  try {
    const fdp = new FDP(req.body);
    await fdp.save();
    res.status(200).send({
      data: fdp,
      success: true,
      message: "FDP added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update fdp
router.post("/update-fdp", async (req, res) => {
  try {
    const fdp = await FDP.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: fdp,
      success: true,
      message: "FDP updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete fdp
router.post("/delete-fdp", async (req, res) => {
  try {
    const fdp = await FDP.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: fdp,
      success: true,
      message: "FDP deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add workshop

router.post("/add-workshops", async (req, res) => {
  try {
    const workshops = new WorkShops(req.body);
    await workshops.save();
    res.status(200).send({
      data: workshops,
      success: true,
      message: "Workshop added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update workshop
router.post("/update-workshops", async (req, res) => {
  try {
    const workshops = await WorkShops.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: workshops,
      success: true,
      message: "FDP updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete workshop
router.post("/delete-workshops", async (req, res) => {
  try {
    const workshops = await WorkShops.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: workshops,
      success: true,
      message: "Workshop deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add additional position

router.post("/add-addposition", async (req, res) => {
  try {
    const addpositions = new AddPosition(req.body);
    await addpositions.save();
    res.status(200).send({
      data: addpositions,
      success: true,
      message: "Additional Position added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update additional position
router.post("/update-addposition", async (req, res) => {
  try {
    const addpositions = await AddPosition.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: addpositions,
      success: true,
      message: "Additional position updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete additional position
router.post("/delete-addposition", async (req, res) => {
  try {
    const addpositions = await AddPosition.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: addpositions,
      success: true,
      message: "AdditionalPosition deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});


// add visitingposition

router.post("/add-visitingposition", async (req, res) => {
  try {
    const visitingpositions = new VisitingPosition(req.body);
    await visitingpositions.save();
    res.status(200).send({
      data: visitingpositions,
      success: true,
      message: "Visiting faculty Position added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update visitingposition
router.post("/update-visitingposition", async (req, res) => {
  try {
    const visitingpositions = await VisitingPosition.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: visitingpositions,
      success: true,
      message: "Visiting faculty Position updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete visitingposition
router.post("/delete-visitingposition", async (req, res) => {
  try {
    const visitingpositions = await VisitingPosition.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: visitingpositions,
      success: true,
      message: "Visiting faculty Position deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//add interest
router.post("/add-interest", async (req, res) => {
  try {
    const interest = new Interest(req.body);
    await interest.save();
    res.status(200).send({
      data: interest,
      success: true,
      message: "interest added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update interest
router.post("/update-interest", async (req, res) => {
  try {
    const interest = await Interest.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: interest,
      success: true,
      message: "Interest updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete interest
router.post("/delete-interest", async (req, res) => {
  try {
    const interest = await Interest.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: interest,
      success: true,
      message: "Interest deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//add recognition
router.post("/add-recognition", async (req, res) => {
  try {
    const recognition = new Recognitions(req.body);
    await recognition.save();
    res.status(200).send({
      data: recognition,
      success: true,
      message: "Recognition added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update recognition
router.post("/update-recognition", async (req, res) => {
  try {
    const recognition = await Recognitions.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: recognition,
      success: true,
      message: "Recognition updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete recognition
router.post("/delete-recognition", async (req, res) => {
  try {
    const recognition = await Recognitions.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: recognition,
      success: true,
      message: "Recognition deleted successfully",
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

// add mentored

router.post("/add-mentored", async (req, res) => {
  try {
    const mentored = new Mentored(req.body);
    await mentored.save();
    res.status(200).send({
      data: mentored,
      success: true,
      message: "Mentored added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update mentored
router.post("/update-mentored", async (req, res) => {
  try {
    const mentored = await Mentored.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: mentored,
      success: true,
      message: "Mentored updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete mentored
router.post("/delete-mentored", async (req, res) => {
  try {
    const mentored = await Mentored.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: mentored,
      success: true,
      message: "Mentored deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/add-report", async (req, res) => {
  try {
    const report = new Report(req.body);
    await report.save();
    res.status(200).send({
      data: report,
      success: true,
      message: "report added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update report
router.post("/update-report", async (req, res) => {
  try {
    const report = await Report.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: report,
      success: true,
      message: "report updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete report
router.post("/delete-report", async (req, res) => {
  try {
    const report = await Report.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: report,
      success: true,
      message: "report deleted successfully",
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
