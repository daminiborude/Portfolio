/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Damini Borude",
  title: "Hi all, I'm Damini",
  subTitle: emoji(
    "A passionate Computer Science graduate 🚀 with a strong foundation in Java, C++, and Python. Eager to start my career in software development and contribute to innovative projects. Enthusiastic about AI and machine learning, with a keen interest in developing cutting-edge solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/134iQ9f7SvXBnkFP9Kw-HU_OC455lvGX-/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/daminiborude",
  linkedin: "www.linkedin.com/in/damini-borude-777ba6215",
  gmail: "daminiborude20@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I'm Skilled In",
  subTitle: "ASPIRING SOFTWARE ENGINEER WITH EXPERIENCE IN WEB DEVELOPMENT AND COMPUTER VISION",
  skills: [
    emoji("⚡ Developing web applications using Django for both frontend and backend"),
    emoji("⚡ Implementing image detection algorithms with OpenCV and YOLO"),
    emoji("⚡ Applying machine learning algorithms to solve real-world problems"),
    emoji("⚡ Building robust applications using Java, C++, and Python"),
    emoji("⚡ Exploring AI and deep learning techniques for computer vision"),
    emoji("⚡ Creating interactive and responsive user interfaces with Django templates"),
    emoji("⚡ Utilizing database management systems for efficient data storage and retrieval"),
    emoji("⚡ Eager to apply my skills in innovative projects and continue learning new technologies")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fab fa-django"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "fas fa-camera"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true

};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bharati Vidyapeeth's College of Engineering, Lavale, Pune",
      logo: require("./assets/images/bvcoe_logo_3.png"),
      subHeader: "Bachelor in Computer Engineering",
      duration: "2019 - 2023",
      desc: "Graduated with a strong focus on software development and engineering principles.",
      descBullets: [
        "GPA: 8.4",
      ]
    },
    {
      schoolName: "Ramrao Chavan Junior College, Ahmednagar",
      logo: require("./assets/images/hsc.jpg"),
      subHeader: "Higher Secondary Certificate (HSC) - Science Stream",
      duration: "2017 - 2019",
      desc: "Completed higher secondary education with a focus on science subjects, laying a strong foundation for further studies in technology and engineering.",
      descBullets: [
        "Studied core science subjects including Physics, Chemistry, and Mathematics",
        "Percentage: 62%"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", // Insert stack or technology you have experience in
      progressPercentage: "85%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section; need to change your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Computer Vision Intern",
      company: "Lets Grow More",
      companylogo: require("./assets/images/lets_gwo_more.jpg"), // Make sure to replace this with the actual logo path
      date: "Duration of your internship", // Replace with actual dates
      desc: "Developed a face detection system using OpenCV and Haar Cascade classifiers, implementing the sliding window technique with bounding boxes.",
      descBullets: [
        "Implemented face detection algorithm using OpenCV's Haar Cascade classifiers",
        "Applied sliding window technique to efficiently scan images for faces",
        "Utilized bounding boxes to highlight detected faces in images and video streams",
        "Optimized the algorithm for improved performance and accuracy",
        "Collaborated with team members to integrate the face detection system into larger projects"
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
  subtitle: "PROJECTS IN WHICH I DEVELOPED ADVANCED AI AND CHATBOT SOLUTIONS",
  projects: [
    {
      // image: require("./assets/images/hrOnboardingBot.png"), // Ensure you have the logo/image in the specified path
      projectName: "HR Onboarding Bot",
      projectDesc: "Developed an automated system to streamline the HR onboarding process, enhancing new employee experience and operational efficiency.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/daminiborude/Pan_Card_Tampering" // Replace with actual project URL if available
        }
        // You can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/internalGPT.png"), // Ensure you have the logo/image in the specified path
      projectName: "Internal GPT Assistant",
      projectDesc: "Created an AI-powered assistant to facilitate user queries on various company policies, using Azure OpenAI's LLM for accurate and real-time responses.",
      footerLink: [
        {
          name: "View Project",
          url: "http://your-project-url.com" // Replace with actual project URL if available
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Learn the Complete Python in Simple Way",
      subtitle: "Completed certification on Python in 2023",
      image: require("./assets/images/udemy_1.png"), // Ensure you have the logo/image in the specified path
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1S0nkCZD2SWHtHnKinRl2aUmGjvXUxhpu/view?usp=drive_link" // Replace with the actual URL of your certification
        }
      ]
    },
    {
      title: "Face Detection Project",
      subtitle: "Implemented face detection using OpenCV",
      image: require("./assets/images/great.png"), // Ensure you have this image
      imageAlt: "Great Learning Logo",
      footerLink: [
        {
          name: "Course Certificate",
          url: "https://drive.google.com/file/d/1S_yRSNZi5y7Y5qnWAiExhtzZ6ofVHKpF/view?usp=drive_link" // Replace with your project link if available
        }
      ]
    },
    {
      title: "Machine Learning Certificate",
      subtitle: "Completed a course on fundamentals of machine learning.",
      image: require("./assets/images/udemy_1.png"), // Ensure you have this image
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Course Certificate",
          url: "https://drive.google.com/file/d/1S2aubT_pT-yAgrRyNreBwrCO_-Z6DQIC/view?usp=drive_link" // Replace with your certificate link if available
        }
      ]
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: true, // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@akshay_raut/llm-introduction-and-guide-to-develop-applications-5ba0b238f894",
      title: "LLM: Introduction and Guide to Develop Applications",
      description: "This guide aims to understand the core technologies essential for building applications powered by Large Language Models (LLMs). Suitable for developers and machine learning specialists."
    },
    {
      url: "https://medium.com/@akshay_raut/langchain-with-azure-openai-5d5f424089dc",
      title: "Langchain with Azure OpenAI",
      description: "Master Langchain and Azure OpenAI — Build a real-time application with hands-on creation of a real-time app. Stay with me on this practical learning journey!"
    },
    {
      url: "https://medium.com/@akshay_raut/prompt-templates-with-azure-openai-23bab0c64a4e",
      title: "Prompt Templates with Azure OpenAI",
      description: "Explore the power of prompt engineering with Azure OpenAI. Learn how to use prompt templates to guide LLM responses effectively and efficiently."
    },
    {
      url: "https://medium.com/@akshay_raut/user-crud-operations-image-upload-in-fastapi-with-mongodb-1538e82e819a",
      title: "User CRUD Operations + Image Upload in FastAPI with MongoDB",
      description: "Learn how to do CRUD operations in FastAPI app using PyMongo and Pydantic package, including image upload functionality."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Interested in hiring me? Let's connect and discuss how I can contribute to your team!",
  number: "+91-9175949975",
  email_address: "daminiborude20@gmail.com"
};

// Twitter Section 

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable,
  resumeSection
};
