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
  ],
  blogs: [
    {
      id: 1,
      title: 'Linear Regression',
      header: 'Linear Regression is one of the most fundamental and classic algorithms in machine learning and the starting point for many complex models.It\'s easy to understand, but it solves many practical problems, such us forecasting house prices, anlyzing sales trends, or studying the relationship between variables. This article will take you from scratch to comprehensively analyze the principle, mathematical basis, loss function, optimization function, and practical application scenarios of linear regression.',
      body: `<div>1. The principle of linear regression</div>
      The core of linear regresssion is to establish linear relationships between variables through data, which is used to predict or explain phenomena. It's the foundation of supervised learning and is widely used in various fields.
      <div>1.1 What is linear regression</div>
      <div>1.1.1 Definitions and Intuitive Understanding</div>
      Linear regression is a statistical method designed to model a linear relationship between the independent variable (the input feature) and the dependent variable (the output target). In simple terms, it tries to find a straight line (or high-dimensional hyperplane) so that the line is as close to all the date points as possible. </br>
      For example, if we want to predict house prices, we can use the size of the house as the independent variable and the house price as the dependent variable. Linear regression finds a straight line that allows us to predict house prices as accurately as possible by area.
      <div>1.1.2 Basic Assumtions</div>
      The effectiveness of linear regression relies on several key assumptions:
      <ul>
        <li><b>Linear relationship:</b> There is a linear relationship between the independent variable and the dependent variable (which can be preliminarily vefified with a scatter plot).</li>
        <li><b>Independence:</b> Data points are independent if each other and are not affected by other data points.</li>
        <li><b>Homoscedasticity:</b> The variable of the error is consistent across all data points (e.g. the error is evenly distributed).</li>
        <li><b>Normality:</b> Errors obey a normal distribution (although in practice it's not necessarily strictly required).</li>
        <li><b>No multicollinearity (when multivariate):</b> The independent variables are not highly correlated with each other.</li>
      </ul>
      These assumptions may not fully hold true in the real world, but linear regression can still provide meaningful predictions.
      <div>1.2 Mathematical representation of linear regression</div>
      <div>1.2.1 Univariate linear regression</div>
      For the case where there is only one independent variable, the mathematical formula for linear regression is:
      <span style="text-align: center;">y = β0 + β1x + ε</span>
      where:
      <ul>
        <li>y: Dependent variable (forecast target, e.g. house price)</li>
        <li>x: Independent variable (input feature, e.g. house area)</li>
        <li>β0: Intercept (the intersection of the line and the y-axis)</li>
        <li>β1: Slope (indicates the magnitude of the effect of x on y)</li>
        <li>ε: Error term (random noise, part of the model that cannot be interpreted)</li>
      </ul>
      Our goal is to learn the best values of β0 and β1 from data.
      <div>1.2.2 Multivariate linear regression</div>
      When there are multiple independent variables, the formula expands to:
      <span style="text-align: center;">y = β0 + β1x1 + β2x2 + ... + βpxp + ε</span>
      where:
      <ul>
        <li>x1, x2, ..., xp: Multiple independent variables (e.g. area, number of rooms, floors)</li>
        <li>β1, β2, ..., βp: The weight of each independent variable</li>
      </ul>
      For example, forecasting a house price may require a combination of factors such us size, location, and year of construction.
      <div>1.2.3 Matrix form</div>
      For ease of calcution, multivariate linear regression is often represented as a matrix:
      <span style="text-align: center;">y = Xβ + ε</span>
      where:
      <ul>
        <li>y: Vector of dependent variables</li>
        <li>X: Feature matrix (each row is a sample, each column is a feature)</li>
        <li>β: parameter vector</li>
        <li>ε: Error vector</li>
      </ul>
      This form is very common in programming implementations such as NumPy, or scikit-learn.
      <div>1.3 Visual Understanding</div>
      Let's say we have the following data:
      <table>
        <thead>
          <tr>
            <th>House Area (x)</th>
            <th>Rate (y)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>50</td>
            <td>100</td>
          </tr>
          <tr>
            <td>70</td>
            <td>130</td>
          </tr>
          <tr>
            <td>90</td>
            <td>160</td>
          </tr>
        </tbody>
      </table>
      Linear regression fits a straight line (e.g. y = 1.5x + 25) as shown below:
      <img src="/assets/images/linear-regression-0.png" alt="Linear Regression" style="width: 50%; height: auto;">
      This line is as close as possible to all points, and the error (e.g. the distance from the point to the line) is minimized.
      <div>1.4 Application Scenarios</div>
      Linear regression can be used for a variety of purposes, such as:
      <ul>
        <li><b>Economics</b>: Forecasting the relationship between inflation and interest rates.</li>
        <li><b>Medical</b>: To study the association between weight and blood pressure.</li>
        <li><b>Bussiness</b>: Analyze the link between advertising investment and sales.</li>
        <li><b>Engineering</b>: Predict the strength of a material as a function of temperature.</li>
      </ul>
      <div>2. Loss function: Mean Squared Error (MSE)</div>
      The loss function is the core indicator to measure the prediction effect of the model, and the mean square error (MSE) is the most commonly used choice in linear regression.
      <div>2.1 Why do you need a loss function?</div>
      The predicted value of the model cannot be exactly equal to the true value, and there will always be errors. The role of the loss function is to quantify these errors, help us evaluate how good the model is, and guide parameter adjustments. For example, if the predicted house price deviates too much from the actual value, we need a "standard" to measure this deviation.
      <div>2.2 Definition of MSE</div>
      The Mean Squared Error (MSE) is calculated as the average of the squares of the difference between the predicted value and the true value by the formula:
      <span style="text-align: center;">
        MSE = \\(\\frac{ 1}{ n } \\sum_{ i=1 } ^ { n }(y_i - \\hat{ y }_i) ^ 2\\)
      </span>
      where:
      <ul>
        <li>n: Number of data points</li>
        <li>y_i: The true value of data point i</li>
        <li>\\hat{ y }_i: The predicted value for data point i</li>
      </ul>
      <div>2.3 Features of MSE</div>
      <div>2.3.1 Pros </div>
      <ul>
        <li><b>Superior mathematically</b>: MSE is a convex function with a unique global minimum for optimization.</li>
        <li><b>Penalty large error</b>: The square term amplifies the effect of large error and promts the model to reduce signficant bias.</li>
        <li><b>Easy derivation</b>: Facilitate subsequent gradient descent optimization.</li>
      </ul>
      <div>2.3.2 Limitations</div>
      <ul>
        <li><b>Sensitive to outliers</b>: If there are outiliers in the data, such us luxyry homes in house pricr data, the square term can significantly amplify its impact.</li>
        <li><b>Unit problem</b>: The value of the MSE depends on the unit of the data, ehich is not intuitive enough.</li>
      </ul>
      <div>2.4 Visual Explanation</div>
      The MSE can be thought of as the average of all data points squared by the vertical distance to the fitted line:
      
      `,
      createdAt: '2025-03-26'
    }
  ]
}