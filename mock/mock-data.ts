export const mockData = {
  projects: [
    {
      id: 1,
      name: 'E-commerce website for electronic devices.',
      description: 'Designed and developed a scalable e-commerce system tailored for the electrical equipment industry, integrating product catalog management, secure payment processing, and real-time inventory tracking.',
      image: '/assets/images/ecommerce-web.png',
      responsibilities: [
        {
          id: 1,
          title: 'Built RESTful APIs using Express.js to manager user, manage orders, product listings, and inventory tracking.',
          image: '/assets/images/ecommerce-db.png'
        },
        {
          id: 2,
          title: 'Developed a responsive and dynamic UI with ReactJS & Ant Design, ensuring a seamless user experience.'
        },
        {
          id: 3,
          title: 'Integrated secure payment gateways like PayPal for safe and convenient transactions.'
        },
        {
          id: 4,
          title: 'Implemented JWT authentication for secure user login and role-based access control.'
        },
        {
          id: 5,
          title: 'Vietnamese-English language switching feature for the website.',
          image: '/assets/images/ecommerce-vi.png'
        }
      ],
      status: 'active',
      link: 'https://e-commerce-web-ten-rosy.vercel.app/',
      linkGithub: 'https://github.com/Socciu007/e-commerce-frontend.git',
      technologies: ['ReactJS', 'AntDesign', 'MongoDB', 'ExpressJS', 'Node.js', 'JavaScript', 'Redux', 'i18n'],
      createdAt: '30 Jun 2024'
    },
    {
      id: 2,
      name: 'A work and task management website similar to Trello.',
      description: 'A task management software that allows users to add, drag, and drop tasks seamlessly for better workflow organization.',
      image: '/assets/images/trello-web.png',
      responsibilities: [
        {
          id: 1,
          title: 'The system includes work management, and task management.',
          image: '/assets/images/trello-db.png'
        },
        {
          id: 2,
          title: 'The system includes a light/dark mode switching feature.',
          image: '/assets/images/trello-mode.png'
        },
        {
          id: 3,
          title: 'A drag-and-drop task management function.',
          image: '/assets/images/trello-feat.png'
        }
      ],
      status: 'active',
      link: 'https://trello-web-fawn.vercel.app/',
      linkGithub: 'https://github.com/Socciu007/trello-web.git',
      technologies: ['Material UI', 'DndKit', 'ReactJS', 'JavaScript', 'DndKit'],
      createdAt: '21 Aug 2024'
    },
    {
      id: 3,
      name: 'Real-time Aquaculture Monitoring & Alert System.',
      description: 'Designed and developed a real-time alert system for aquaculture, monitoring water quality parameters and sending automated warnings for critical conditions.',
      image: '/assets/images/aqua-web.png',
      responsibilities: [
        {
          id: 1,
          title: 'The system includes user management, geographic area management, environmental parameter management, environmental test management, and notification management.',
          image: '/assets/images/aqua-system.png'
        },
        {
          id: 2,
          title: 'Developed RESTful APIs using Express.js to manage device data, alerts, and user notifications efficiently.',
          image: '/assets/images/aqua-db.png'
        },
        {
          id: 3,
          title: 'Improved role-based access control (RBAC) with JWT authentication to ensure secure system access.'
        },
        {
          id: 4,
          title: 'Designed an automated alert system leveraging Nodemailer to send real-time email notifications based on predefined triggers.',
          image: '/assets/images/aqua-mail.png'
        },
        {
          id: 5,
          title: 'Integrated Leaflet.js to provide interactive real-time location-based alerts on a dynamic map interface.',
          image: '/assets/images/aqua-leaflet.png'
        },
        {
          id: 6,
          title: 'Integrating the Fuzzy Set algorithm for environmental assessment and warning.'
        },
        {
          id: 7,
          title: 'Vietnamese-English language switching feature for the website.',
          image: '/assets/images/aqua-vi.png'
        }
      ],
      status: 'active',
      link: 'https://warning-web.vercel.app/',
      linkGithub: 'https://github.com/Socciu007/warning-web.git',
      technologies: ['ReactJS', 'Leaflet', 'MongoDB', 'ExpressJS', 'Node.js', 'JavaScript', 'AntDesign', 'i18n'],
      createdAt: '19 Dec 2024'
    },
    {
      id: 4,
      name: 'Developing an Online Fashion Website.',
      description: 'Developing a user-friendly and visually appealing online fashion store with seamless shopping experience, and responsive design for all devices.',
      image: '/assets/images/fashion-web.png',
      responsibilities: [
        {
          id: 1,
          title: 'Developed a responsive and dynamic UI with ReactJS + Vite, ensuring a seamless user experience.',
          image: '/assets/images/fashion-ui.png'
        },
        {
          id: 2,
          title: 'Developing mock data for product management.'
          // image: '/assets/images/fashion-web.png'
        }
      ],
      status: 'active',
      link: 'https://fashion-web-x3tr.vercel.app/',
      linkGithub: 'https://github.com/Socciu007/fashion-web.git',
      technologies: ['ReactJS', 'TypeScript', 'Vite'],
      createdAt: '08 Mar 2025'
    }
  ],
  workExperience: [
    {
      id: 1,
      company: 'ABI Game Studio',
      position: 'Data Analyst Intern',
      logo: '/assets/images/abi-logo.png',
      startDate: 'Jun 2023',
      endDate: 'Sep 2023',
      description: 'Research and present game metrics that need to be analyzed. Analyze key game metrics, including retention, session time, engagement, and daily active users, and create visualizations to provide data-driven insights. Build a server that receives casual game data.',
      technologies: ['Python', 'BigQuery', 'Excel', 'Power BI', 'FastAPI']
    },
    {
      id: 2,
      company: 'VPBank',
      position: 'Fullstack Developer',
      logo: '/assets/images/vp-logo.png',
      startDate: 'Oct 2023',
      endDate: 'Nov 2023',
      description: 'Learn about the bank\'s business processes and process data on risk and financial reporting & Implementation of business process automation.',
      technologies: ['Excel', 'VBA', 'Power Automate']
    },
    {
      id: 3,
      company: 'ONEADX CO., LTD',
      position: 'Fullstack Developer',
      logo: '/assets/images/oneadx-logo.png',
      startDate: 'Dec 2023',
      endDate: 'Apr 2024',
      description: 'Developing automation features for interactions on Facebook, Instagram, Twitter, and Trustpilot, integrating with Hidemyacc – a platform for managing multiple online accounts. Additionally, building a desktop application to automate key functionalities on Facebook and Instagram, along with developing a marketing website for the application.',
      technologies: ['ReactJS', 'EJS', 'Puppeteer', 'Node.js', 'ExpressJS']
    },
    {
      id: 4,
      company: 'AIFREIGHT CO., LTD (FANYUAN International Logistics)',
      position: 'Fullstack Developer',
      logo: '/assets/images/fanyuan-logo.png',
      startDate: 'May 2024',
      endDate: 'Present',
      description: 'Developing API interfaces for collecting shipping line data, building Chrome extensions to automate activities on shipping company websites, researching the LLaMA 3 natural language model and SeamlessM4T for speech translation. Additionally, developing a Windows application using Electron to gather logistics data from Facebook and integrating ChatGPT or Gemini to process and transform raw data into valuable insights.',
      technologies: ['ReactJS', 'UmiJS', 'Python', 'TypeScript', 'Node.js', 'ExpressJS', 'MySQL', 'MongoDB', 'Llama3', 'SeamlessM4T', 'Socket.io']
    }
  ]
}