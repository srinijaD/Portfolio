/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Srinija",
  title: "Hi all, I'm Srinija",
  subTitle: emoji(
    "A passionate  Ux Developer/Designer  having 9+ years experience in designing UserInterface (UI) applications and professional web applications "
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/d-srinija-4965ab2b6/",
  gmail: "dsrinija0708@gmail.com",
  medium: "",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY UX DEVELOPER/DESIGNER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "Develop highly interactive and responsive UX design for  Web, Mobile and tablet applications."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "UI/UX Developer ",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular JS",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Madras University",
      logo: require("./assets/images/madras_university.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "June 2015",
      desc: "",
      descBullets: [
       
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "UI/UX", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design ",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "UI/UX Designer",
      company: "Intuit, TX",
      companylogo: "https://s3-us-west-1.amazonaws.com/upload.comparably.com/27415/companies/27415/logo_1661449324729.jpg",
      date: "April 2022 – Present",
      desc: "UI developer",
      descBullets: [
        
        
      ]
    }, {
      role: "Senior UI/UX Designer", 
      company: "Centene, MO",
      companylogo:"https://s3-symbol-logo.tradingview.com/centene--600.png",
      date: "July 2020 – Mar 2022",
      desc: "UI/UX Designer",
      descBullets: [
        
      ]
    } ,{
      role: "UI/UX Developer",
      company: "Fannie Mae, GA ",
      companylogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrUWnE_TCJ9MmMNapJz1UA900E2UXoivS8zQ&s",
      date: "Oct 2018 – Jun 2020",
      desc: "UI/UX Designer",
      descBullets: [
        
      ]
    },{
      role: "UI/Web Developer",
      company: "Wall Greens, Chicago ",
      companylogo:"https://play-lh.googleusercontent.com/gK5U3QZnDLSysaBFcsiCOyknNRZpG669NmreEUvGqlamTQwafKoVTUVUoZ8rqdBzlMsw",
      date: "Nov 2017 – Sep 2018",
      desc: "UI/Web Developer",
      descBullets: [
        
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
 // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8crM9Le2c-myKKEKrwrTkpsizaa_uWjG78Q&s",
      projectName: "tonesfashion",
      projectDesc: "Ecommerce",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.tonesfashion.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "https://www.agility.com/wp-content/uploads/2020/09/agility_logo_appicon.png",
      projectName: "agility",
      projectDesc: "ECommerce Supply Chain",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.agility.com/en/"
        }
      ]
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNvfVrwuDHT4-aV1AuLDNwHrvz_xpQ7MYkEA&s",
      projectName: "healthfirst",
      projectDesc: "health insurance",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://healthfirst.org/"
        }
      ]
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX3mwYcUq9Ta9aE9rtrIpoqXptaqj8b8_S3g&s",
      projectName: "semios",
      projectDesc: "Next in Ag: Farming Made Simple",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://semios.com/"
        }
      ]
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0wgBkx7uI_Kzitecmc_-9879i82gfPzOWA&s",
      projectName: "showpad",
      projectDesc: "Empower sellers. Build trust. Win deals.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.showpad.com/"
        }
      ]
    }
  ],
  display: true  // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Ecommerce Ui Design",
  subtitle:
    "Discover Your Next Favorite Find",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.figma.com/design/ZTBwAqQUQ87LHhjKd3lEu0/Shopy?node-id=1-216&t=WhLIrMzmQurhF4wV-0",
      title: "Shopy",
      description:
        ""
    },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "",
  number: "+1 (443) 543-6898",
  email_address: "dsrinija0708@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
