/*
This is empty on purpose! Your code to build the resume will go here.
 */
var contactInfo = {
  "email": "liujian81@gmail.com",
  "phone": "613-263-8768",
  "github": "https://github.com/jian6",
  "location": "Ottawa, Ontario, Canada"
};
var skills = ["Java", "JavaScript", "PHP", "HTML", "CSS" ];
var bio = {
  "name": "Jian Liu",
  "role": "Computer Programmer Student",
  "contact info": contactInfo,
  "picture": "images/fry.jpg",
  "welcomeMsg": "Welcome to My Resume Page",
  "skills": skills
};

var work = {
  "works":
  [
    {"position": "Web Developer",
    "employer": "IBZ China",
    "years": "2014",
    "city": "Remote",
    "description": "XXXXXX"
    },
    {"position": "Web Developer",
    "employer": "Leno Media Group",
    "years": "2010-2012",
    "city": "Chengdu",
    "description": "XXXXXX"
    },
    {"position": "Web Developer",
    "employer": "Crystal Techonology",
    "years": "2007-2010",
    "city": "Chengdu",
    "description": "XXXXXX"
    }
  ]
};
var education = {
  "schools":
  [
    {"school": "Algonquin College",
    "major": "Computer Programmer",
    "years": "Sep. 2015 - Present",
    "city": "Ottawa, Ontario, Canada"
    },
    {"school": "Concordia Universiyu",
    "major": "Bechalor of Computer Science in Information System",
    "years": "Sep. 2012 - May 2015",
    "city": "Montreal, Quebec, Canada"
    }
  ]
};
var project = {
  "projects":
  [
    {"title": "XXXX1",
     "dates": "XXXX1",
     "description": "XXXX1" ,
     "image":["images/fry.jpg"]
    },
    {"title": "XXXX2",
     "dates": "XXXX2",
     "description": "XXXX2" ,
     "image": ["images/fry.jpg"]
    }
  ]
};

var formattedName = HTMLheaderName.replace ("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace ("%data%", bio.role);
var fromattedPic = HTMLbioPic.replace ("%data%", bio.picture);
var fromattedWelMsg = HTMLwelcomeMsg.replace ("%data%", bio.welcomeMsg);

//header
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(fromattedPic);
$("#header").append(fromattedWelMsg);
$("#header").append(HTMLskillsStart);
for (item in skills){
  var formmatedSkill = HTMLskills.replace("%data%", skills[item]);
  $("#skills").append(formmatedSkill);
};

//contact information
var formattedContacts = [];
var fomattedMobile = HTMLmobile.replace("%data%", contactInfo.phone);
var formattedEmail = HTMLemail.replace("%data%", contactInfo.email);
var formattedGithub = HTMLgithub.replace("%data%", contactInfo.github);
var formmatedLocation = HTMLlocation.replace("%data%", contactInfo.location);
formattedContacts.push(fomattedMobile);
formattedContacts.push(formattedEmail);
formattedContacts.push(formattedGithub);
formattedContacts.push(formmatedLocation);
for (item in formattedContacts){
  $("#topContacts").append(formattedContacts[item]);
  $("#footerContacts").append(formattedContacts[item]);
};

function displaywork(){
  for (i=0; i<work.works.length; i++){
      var formmttedWorkEmp = HTMLworkEmployer.replace("%data%", work.works[i].employer);
      var formmatedWorkTit = HTMLworkTitle.replace("%data%", work.works[i].position);
      var formattedEmpTit = formmttedWorkEmp +  formmatedWorkTit;
      var formattedWorkDate = HTMLworkDates.replace("%data%", work.works[i].years);
      var formattedWorkLoc = HTMLworkLocation.replace("%data%", work.works[i].city);
      var formattedWorkDes = HTMLworkDescription.replace("%data%", work.works[i].description);
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(formattedEmpTit);
      $(".work-entry:last").append(formattedWorkDate);
      $(".work-entry:last").append(formattedWorkLoc);
      $(".work-entry:last").append(formattedWorkDes);
  };
};

displaywork();

$(document).click(function(loc){
   logClicks(loc.clientX, loc.clientY);
});

function locationizer(work_obj){
  var workLocations = [];
  for (i=0; i<work.works.length; i++){
    workLocations.push(work.works[i].city);
  }
  return workLocations;
}


  function isName(){
    var nameArr = bio.name.split(" ");
    var fullName = nameArr[0] +" "+ nameArr[1].toUpperCase();
    return fullName;
  }
  $("#main").append(internationalizeButton);

project.display=function() {
  for (item in project.projects){
      var formmttedProTit = HTMLprojectTitle.replace("%data%", project.projects[item].title);
      var formmatedProDates = HTMLprojectDates.replace("%data%", project.projects[item].dates);
      var formattedProDes = HTMLprojectDescription.replace("%data%", project.projects[item].description);
      if (project.projects[item].image.length > 0){
        for (pic in project.projects[item].image ){
            var formattedProPic =  HTMLprojectImage.replace("%data%", project.projects[item].image[pic]);
        }
      }
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(formmttedProTit);
      $(".project-entry:last").append(formmatedProDates);
      $(".project-entry:last").append(formattedProDes);
      $(".project-entry:last").append(formattedProPic);
  };
}
project.display();

$("#mapDiv").append(googleMap);
