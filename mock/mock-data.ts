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
      position: 'Data Analyst Intern',
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
      category: 'Machine Learning',
      title: 'Linear Regression',
      header: 'Linear Regression is one of the most fundamental and classic algorithms in machine learning and the starting point for many complex models.It\'s easy to understand, but it solves many practical problems, such us forecasting house prices, anlyzing sales trends, or studying the relationship between variables. This article will take you from scratch to comprehensively analyze the principle, mathematical basis, loss function, optimization function, and practical application scenarios of linear regression.',
      sections: [
        {
          id: 1,
          title: '1. The principle of linear regression',
          description: 'The core of linear regresssion is to establish linear relationships between variables through data, which is used to predict or explain phenomena. It\'s the foundation of supervised learning and is widely used in various fields.',
          position: 1,
          subSections: [
            {
              id: 1,
              title: '1.1 What is linear regression',
              subSubSections: [
                {
                  id: 1,
                  title: '1.1.1 Definitions and Intuitive Understanding',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: 'Linear regression is a statistical method designed to model a linear relationship between the independent variable (the input feature) and the dependent variable (the output target). In simple terms, it tries to find a straight line (or high-dimensional hyperplane) so that the line is as close to all the date points as possible. </br> For example, if we want to predict house prices, we can use the size of the house as the independent variable and the house price as the dependent variable.Linear regression finds a straight line that allows us to predict house prices as accurately as possible by area.',
                      position: 1
                    }
                  ],
                  position: 1
                },
                {
                  id: 2,
                  title: '1.1.2 Basic Assumtions',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: 'The effectiveness of linear regression relies on several key assumptions:',
                      position: 1
                    },
                    {
                      id: 2,
                      type: 'list',
                      description: '<ul><li> <b>Economics </b>: Forecasting the relationship between inflation and interest rates.</li ><li><b>Medical </b>: To study the association between weight and blood pressure.</li><li><b>Bussiness </b>: Analyze the link between advertising investment and sales.</li ><li><b>Engineering </b>: Predict the strength of a material as a function of temperature.</li ></ul>',
                      position: 2
                    },
                    {
                      id: 3,
                      type: 'text',
                      description: 'These assumptions may not fully hold true in the real world, but linear regression can still provide meaningful predictions.',
                      position: 3
                    }
                  ]
                }
              ],
              position: 1
            },
            {
              id: 2,
              title: '1.2 Mathematical representation of linear regression',
              subSubSections: [
                {
                  id: 1,
                  title: '1.2.1 Univariate linear regression',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: 'For the case where there is only one independent variable, the mathematical formula for linear regression is:\n<span style="text-align: center; display: block;"> y = β0 + β1x + ε </span>\nwhere:\n',
                      position: 1
                    },
                    {
                      id: 2,
                      type: 'list',
                      description: '<ul><li> y: Dependent variable(forecast target, e.g. house price)</li><li> x: Independent variable(input feature, e.g. house area) </li><li> β0: Intercept(the intersection of the line and the y - axis) </li><li> β1: Slope(indicates the magnitude of the effect of x on y) </li><li> ε: Error term(random noise, part of the model that cannot be interpreted) </li></ul>',
                      position: 2
                    },
                    {
                      id: 3,
                      type: 'text',
                      description: 'Our goal is to learn the best values of β0 and β1 from data.',
                      position: 3
                    }
                  ],
                  position: 1
                },
                {
                  id: 2,
                  title: '1.2.2 Multivariate linear regression',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: 'When there are multiple independent variables, the formula expands to:\n<span style="text-align: center; display: block;">y = β0 + β1x1 + β2x2 + ... + βpxp + ε</span>\nwhere:',
                      position: 1
                    },
                    {
                      id: 2,
                      type: 'list',
                      description: '<ul><li>x1, x2, ..., xp: Multiple independent variables (e.g. area, number of rooms, floors)</li><li>β1, β2, ..., βp: The weight of each independent variable</li></ul>',
                      position: 2
                    },
                    {
                      id: 3,
                      type: 'text',
                      description: 'For example, forecasting a house price may require a combination of factors such us size, location, and year of construction.',
                      position: 3
                    }
                  ],
                  position: 2
                },
                {
                  id: 3,
                  title: '1.2.3 Matrix form',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: 'For ease of calcution, multivariate linear regression is often represented as a matrix:\n<span style="text-align: center; display: block;">y = Xβ + ε</span>\n where:',
                      position: 1
                    },
                    {
                      id: 2,
                      type: 'list',
                      description: '<ul><li>y: Vector of dependent variables</li><li>X: Feature matrix (each row is a sample, each column is a feature)</li><li>β: parameter vector</li><li>ε: Error vector</li></ul>',
                      position: 2
                    },
                    {
                      id: 3,
                      type: 'text',
                      description: 'This form is very common in programming implementations such as NumPy, or scikit-learn.',
                      position: 3
                    }
                  ],
                  position: 3
                }
              ],
              position: 2
            },
            {
              id: 3,
              title: '1.3 Visual Understanding',
              subSubSections: [
                {
                  id: 1,
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: 'Let\'s say we have the following data:',
                      position: 1
                    },
                    {
                      id: 2,
                      type: 'table',
                      description: '<table><thead><tr><th>House Area(x)</th><th> Rate(y) </th></tr></thead><tbody><tr><td>50 </td><td> 100 </td></tr><tr><td>70 </td><td> 130 </td></tr><tr><td>90 </td><td> 160 </td></tr></tbody></table>',
                      position: 2
                    },
                    {
                      id: 3,
                      type: 'text',
                      description: 'Linear regression fits a straight line (e.g. y = 1.5x + 25) as shown below:',
                      position: 3
                    },
                    {
                      id: 4,
                      type: 'image',
                      url_image: '/assets/images/linear-regression-0.png',
                      position: 4
                    },
                    {
                      id: 5,
                      type: 'text',
                      description: 'This line is as close as possible to all points, and the error (e.g. the distance from the point to the line) is minimized.',
                      position: 5
                    }
                  ],
                  position: 1
                }
              ],
              position: 3
            },
            {
              id: 4,
              title: '1.4 Application Scenarios',
              subSubSections: [
                {
                  id: 1,
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: 'Linear regression can be used for a variety of purposes, such as:',
                      position: 1
                    },
                    {
                      id: 2,
                      type: 'list',
                      description: '<ul><li><b>Economics</b>: Forecasting the relationship between inflation and interest rates.</li><li><b>Medical</b>: To study the association between weight and blood pressure.</li><li><b>Bussiness</b>: Analyze the link between advertising investment and sales.</li><li><b>Engineering</b>: Predict the strength of a material as a function of temperature.</li></ul>',
                      position: 2
                    }
                  ],
                  position: 1
                }
              ],
              position: 4
            }
          ]
        },
        {
          id: 2,
          title: '2. Loss function: Mean Squared Error (MSE)',
          description: 'The loss function is the core indicator to measure the prediction effect of the model, and the mean square error (MSE) is the most commonly used choice in linear regression.',
          subSections: [
            {
              id: 1,
              title: '2.1 Why do you need a loss function?',
              subSubSections: [
                {
                  id: 1,
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: 'The predicted value of the model cannot be exactly equal to the true value, and there will always be errors. The role of the loss function is to quantify these errors, help us evaluate how good the model is, and guide parameter adjustments. For example, if the predicted house price deviates too much from the actual value, we need a "standard" to measure this deviation.',
                      position: 1
                    }
                  ],
                  position: 1
                }
              ]
            },
            {
              id: 2,
              title: '2.2 Definition of MSE',
              subSubSections: [
                {
                  id: 1,
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: 'The Mean Squared Error (MSE) is calculated as the average of the squares of the difference between the predicted value and the true value by the formula:\n<span style="text-align: center; display: block;">\n\\( MSE = \\frac{ 1}{ n } \\sum_{ i=1 } ^ { n }(y_i - \\hat{ y }_i) ^ 2\\)</span>\nwhere: ',
                      position: 1
                    },
                    {
                      id: 2,
                      type: 'list',
                      description: '<ul><li>n: Number of data points</li><li>y_i: The true value of data point i</li><li>\\hat{y}_i: The predicted value for data point i</li></ul>',
                      position: 2
                    }
                  ],
                  position: 1
                }
              ],
              position: 2
            },
            {
              id: 3,
              title: '2.3 Features of MSE',
              subSubSections: [
                {
                  id: 1,
                  title: '2.3.1 Pros',
                  content: [
                    {
                      id: 1,
                      type: 'list',
                      description: '<ul><li><b>Superior mathematically</b>: MSE is a convex function with a unique global minimum for optimization.</li><li><b>Penalty large error</b>: The square term amplifies the effect of large error and promts the model to reduce signficant bias.</li><li><b>Easy derivation</b>: Facilitate subsequent gradient descent optimization.</li></ul>',
                      position: 1
                    }
                  ],
                  position: 1
                },
                {
                  id: 2,
                  title: '2.3.2 Limitations',
                  content: [
                    {
                      id: 1,
                      type: 'list',
                      description: '<ul><li><b>Sensitive to outliers</b>: If there are outiliers in the data, such us luxyry homes in house pricr data, the square term can significantly amplify its impact.</li><li><b>Unit problem</b>: The value of the MSE depends on the unit of the data, ehich is not intuitive enough.</li></ul>',
                      position: 1
                    }
                  ],
                  position: 2
                },
                {
                  id: 3,
                  title: '2.3.3 Visual Explanation',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: 'The MSE can be thought of as the average of all data points squared by the vertical distance to the fitted line:',
                      position: 1
                    },
                    {
                      id: 2,
                      type: 'code',
                      description:
                      `graph TD
                        A[data points] --> B(actual value)
                        A --> C(predicted value)
                        B --> D[error: y - ŷ]
                        D --> E[square: (y - ŷ)²]
                        E --> F[average: MSE]
                      `,
                      position: 2
                    }
                  ]
                }
              ],
              position: 3
            },
            {
              id: 4,
              title: '2.4 Other Loss Function Options',
              subSubSections: [
                {
                  id: 1,
                  title: '2.4.1 Mean Absolute Error (MAE)',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: 'In addition to MSE, there are other loss fuctions that can be used for linear regression:\n - <b>Root Mean Square Error (RMSE)</b>: \n <span style="text-align: center;">\\[RMSE = \\sqrt{ \\frac{ 1}{ n } \\sum_{ i=1 } ^ { n }(y_i - \\hat{ y }_i) ^ 2}\\]</span>\n The RMSE is the qquare root of the MSE, which is the same unit as the original data and is more intuitive.\n - <b>MEan Absolute Error (MAE)</b>: <span style="text-align: center;">\\[MAE = \\frac{ 1}{ n } \\sum_{ i=1 } ^ { n } |y_i - \\hat{ y }_i|\\]</span>\n MAE is not sensitive to outliers, but is not as smooth as MSE when optimized.\n - <b>Huber loss</b>: Combining the advantages of MSE and MAE, it uses the square for small errors and the absolute value for large errors, which is suiable for noisy data.\n The choice of which loss function to choose depends on the characteristics of the data and the needs of the task.',
                      position: 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 3,
          title: '3. Optimization method: gradient descent method',
          description: 'The goal of linear regression is to find the parameters that minimizes the loss function, and gradient descent is an efficient optimization method, especially in large-scale data.',
          subSections: [
            {
              id: 1,
              title: '3.1 Optimize the essence of the problem',
              subSubSections: [
                {
                  id: 1,
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      decription: 'We want to adjust (β0, β1) to minimize the MSE. This is a typical optimization problem. Theoretically, it can be solved directly by least squares (via matrix operations), but when the amount of data is large or there are many features, the computational cost is high, and gradient descent becomes a more practical option.',
                      position: 1

                    }
                  ]
                }
              ]
            },
            {
              id: 2,
              title: '3.2 Principle of gradient descent',
              subSubSections: [
                {
                  id: 1,
                  title: '3.2.1 Definition of descent',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: 'The gradient is the partial derivative of the loss function to the parameters, indicating the direction in which the value of the function increases the fastest. When optimizing, we move in the opposite direction of the gradient to reduce losses. For MSE, the loss function (J(β)) is defined as:\n <span style="text-align: center;">\\[J(\beta) = \frac{ 1}{ n } \\sum_{ i=1 } ^ { n } \\left(y_i - \\left(\beta_0 + \beta_1 x_{ i1 } + \\cdots + \beta_p x_{ ip } \right) \right) ^ 2\\]</span>\n The gradient is:\n <span style="text-align: center;">\\[\nabla J(\beta) = \\left[\frac{ \\partial J } { \\partial \beta_0 }, \frac{ \\partial J } { \\partial \beta_1 }, \\dots, \frac{ \\partial J } { \\partial \beta_p } \right]\\]</span>',
                      position: 1
                    }
                  ],
                  position: 1
                },
                {
                  id: 2,
                  title: '3.2.2 Parameter update rules',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: `Gradient descent updates parameters iteratively with the following formula:\n
                      <span style="text-align: center;">\\[\beta_{ j } = \\beta_{ j } - \\alpha \\frac{ \\partial J } { \\partial \beta_j }\\]</span>\n
                      where α: learning rate, control step size, \\(\\frac{ \\partial J } { \\partial \beta_j }\\): The partial dericative of the loss function to \\(\\beta_j\\).`,
                      position: 1
                    }
                  ],
                  position: 2
                },
                {
                  id: 3,
                  title: '3.2.3 Effect of learning rate',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: `The learning rate (\\(\\alpha\\)) is a key parameter for gradient descent:\n
                      <ul><li><b>Too small</b>: Convergence is slow and can fall into a local minimum.</li><li><b>Too large</b>: may cross the optimal solution or even diverge.</li></ul>\n
                      The following diagram illustrates the effect of different learning rate:`,
                      position: 1
                    },
                    {
                      id: 2,
                      type: 'image',
                      url_image: '/assets/images/linear-regression-1.png',
                      position: 2
                    }
                  ]
                }
              ]
            },
            {
              id: 3,
              title: '3.3 Variants of gradient descent',
              subSubSections: [
                {
                  id: 1,
                  title: '3.3.1 Batch Gradient Descent',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: `Use the entire dataset to calculate the gradient and update the parameters.\n
                      <ul><li><b>Advantages</b>: The convergence is stable, and the results are close to the global optimum</li><li><b>Disadvantages</b>: Compute and slow.</li></ul>`,
                      position: 1
                    }
                  ]
                },
                {
                  id: 2,
                  title: '3.3.2 Stochastic Gradient Descent (SGD)',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: `Each iteration randomly selects a data point to calculate the gradient.\n
                      <ul><li><b>Advantages</b>: Faster speed, suiable for big data.</li><li><b>Disadvantages</b>: The convergence path is fluctuating and can be unstable.</li></ul>`,
                      position: 1
                    }
                  ]
                },
                {
                  id: 3,
                  title: '3.3.3 Mini-batch Gradient Descent',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: `Gradients are calculated using a small batch of data (e.g. 32 or 64 samples) at a time.\n
                      <ul><li><b>Advantages</b>: It's a common method in deep learning because of both speed and stability.</li><li><b>Example implementation</b>:</li></ul>`,
                      position: 1
                    },
                    {
                      id: 2,
                      type: 'code',
                      description: `
                      # Mock data
                      X = np.array([[1, 1], [1, 2], [1, 3], [1, 4]])  # Include bias term
                      y = np.array([2, 4, 5, 7])
                      beta = np.zeros(2)  # Initialize parameters
                      alpha = 0.05  # Learning rate
                      epochs = 200
                      batch_size = 2

                      # Mini-batch gradient descent
                      for epoch in range(epochs):
                        indices = np.random.permutation(len(y))  # Randomly shuffle data
                        for start in range(0, len(y), batch_size):
                          batch_indices = indices[start:start + batch_size]
                          X_batch = X[batch_indices]
                          y_batch = y[batch_indices]
                          y_pred = X_batch.dot(beta)
                          error = y_pred - y_batch
                          gradient = X_batch.T.dot(error) / batch_size
                          beta -= alpha * gradient

                      print("Parameters after training: ", beta)`,
                      position: 2
                    }
                  ]
                }
              ],
              position: 3
            },
            {
              id: 4,
              title: '3.4 Convergence and Improvement',
              subSubSections: [
                {
                  id: 1,
                  title: '3.4.1 Cessation Conditions',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: `Gradient descent usually stops when: \n
                      <ul><li>Mazimum number of iterations. e.g. 1000.</li><li>The loss change is less than the threshold: as in (|\\Delta J| < 10^{-6}).</li><li>Gradient close to zero: Indicates that the optimal solution has been reached.</li></ul>`,
                      position: 1
                    }
                  ]
                },
                {
                  id: 2,
                  title: '3.4.2 Learning rate scheduling',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: `To accelerate convergence, the learning rate can be dynamically adjusted:\n
                      <ul><li><b>Time decay</b>: (\\alpha = \frac{\\alpha_0}{1 + k \\cdot t}), t is the number of iterations.</li><li><b>Exponential decline</b>: (\\alpha = \\alpha_0 \\cdot e^{-kt})</li><li><b>Adaptive methods</b>: e.g. Adam, RMSProp, adjusted according to gradient history (\\alpha).</li></ul> \n
                      These methods have signifivantly improved efficiency in practice.`,
                      position: 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 4,
          title: '4. The Practical Application of Linear Regression',
          description: 'Linear regression has countless applications in reality, and here are two detailed examples.',
          subSections: [
            {
              id: 1,
              title: '4.1 House Price Forecasts',
              subSubSections: [
                {
                  id: 1,
                  title: '4.1.1 Background',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: 'Let\'s say we have a housing dataset that includes characteristics such as size, number of rooms, and location, as well as the corresponding house prices. We want to predict the price of a new home.',
                      position: 1
                    }
                  ]
                },
                {
                  id: 2,
                  title: '4.1.2 Data Preprocessing',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: '<ul><li><b>Feature Selection</b>: Select the area, number of rooms, and location code (single thermal code).</li><li><b>Normalize</b>: Normalize numberical features such as aresa to [0, 1] intervals.</li><li><b>Data Cleaning</b>: Removes missing or outliers.</li></ul>',
                      position: 1
                    }
                  ]
                },
                {
                  id: 3,
                  title: '4.1.3 Model Implementation',
                  content: [
                    {
                      id: 1,
                      type: 'code',
                      description: `
                      # Using scikit-learn:

                      from sklearn.linear_model import LinearRegression
                      from sklearn.preprocessing import StandardScaler
                      import pandas as pd
                      import numpy as np

                      # Split data into training and testing sets
                      data = pd.DataFrame({
                        'area': [50, 70 , 90, 120],
                        'rooms': [1, 2, 2, 3],
                        'locations': [1, 2, 1, 3],
                        'price': [100, 130, 160, 200]
                      })
                      X = data[['area', 'rooms', 'locations']]
                      y = data['price']

                      # Standardize features
                      scaler = StandardScaler()
                      X_scaled = scaler.fit_transform(X)

                      # Train the model
                      model = LinearRegression()
                      model.fit(X_scaled, y)

                      # Make predictions
                      new_house = scaler.transform([[100, 2, 1]]) # 100 is the area, 2 is the number of rooms, 1 is the location code
                      predict_price = model.predict(new_house)
                      print(f"Predicted price: {predict_price[0]:.2f}")
                      `,
                      position: 1
                    }
                  ]
                },
                {
                  id: 4,
                  title: '4.1.4 Analysis of Results',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: 'The model outputs parameters such as (\\beta) and we can analyze the impact of each feature on house prices. For example, if (\\beta_{\\text{area}}) is larger, the area has a more signigicant impact on the house price.',
                      position: 1
                    }
                  ]
                }
              ]
            },
            {
              id: 2,
              title: '4.2 Stock Price Prediction',
              subSubSections: [
                {
                  id: 1,
                  title: '4.2.1 Background',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: 'Businesses want to forecast sales in the coming months based on historical sales data.',
                      position: 1
                    }
                  ]
                },
                {
                  id: 2,
                  title: '4.2.2 Data Preparation',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: 'Let\'s assume that the data is as follows:',
                      position: 1
                    },
                    {
                      id: 2,
                      type: 'table',
                      description: `
                      | Month(x) | Sales(y) |
                      |----------|----------|
                      | 1        | 100      |
                      | 2        | 150      |
                      | 3        | 200      |
                      | 4        | 250      |
                      `,
                      position: 2
                    }
                  ]
                },
                {
                  id: 3,
                  title: '4.2.3 Model training and prediction',
                  content: [
                    {
                      id: 1,
                      type: 'code',
                      description: `
                      import numpy as np
                      from sklearn.linear_model import LinearRegression
                      import matplotlib.pyplot as plt

                      # Prepare data
                      X = np.array([1, 2, 3, 4]).reshape(-1, 1)
                      y = np.array([100, 150, 200, 250])

                      # Train the model
                      model = LinearRegression()
                      model.fit(X, y)

                      # Make predictions for future 3 months
                      future_X = np.array([5, 6, 7]).reshape(-1, 1)
                      predicted_y = model.predict(future_X)
                      print(f"Predicted sales: {predicted_y}")

                      # Plot the results
                      plt.scatter(X, y, color='blue', label='Actual Sales')
                      plt.plot(np.vstack([X, future_X]), np.hstack([y, predicted_y]), color='red', label='Predicted Sales')
                      plt.xlabel('Month')
                      plt.ylabel('Sales')
                      plt.legend()
                      plt.show()
                      `,
                      position: 1
                    }
                  ]
                },
                {
                  id: 4,
                  title: '4.2.4 Analysis of Results',
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: 'The model assumes that sales increase lenearly over time. If the data is trending non-linearly, polynomial regression of time serias models can be considered.',
                      position: 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 5,
          title: '5. Advanced Topics',
          subSections: [
            {
              id: 1,
              title: '5.1 Regularization',
              subSubSections: [
                {
                  id: 1,
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: `Regularization can be introduced when there are too many features or when the data is overfitted.
                      <ul><li><b>Lasso (L1)</b>: Adds a penalty term to promote sparsity.</li><li><b>Ridge (L2)</b>: Adds a penalty term to prevent the parameter from being too large.</li></ul>`,
                      position: 1
                    }
                  ]
                }
              ]
            },
            {
              id: 2,
              title: '5.2 Feature Engineering',
              subSubSections: [
                {
                  id: 1,
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: '<ul><li><b>Polynomical features</b>: Add terms such as (x^2, x^3) to capture non-linear relationships.</li><li><b>Interaction</b>: Combine features to capture complex interactions.</li></ul>',
                      position: 1
                    }
                  ]
                }
              ]
            },
            {
              id: 3,
              title: '5.3 Model Evaluation',
              subSubSections: [
                {
                  id: 1,
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: '<ul><li><b>R-squared score</b>: A measure of the model\'s ability to interpret the data.</li><li><b>Cross-validation</b>: Evalute the generalization performance of the model.</li></ul>',
                      position: 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 6,
          title: '6. Summary',
          subSections: [
            {
              id: 1,
              subSubSections: [
                {
                  id: 1,
                  content: [
                    {
                      id: 1,
                      type: 'text',
                      description: '<ul><li><b>Principle</b>: Linear regression is simple yet powerful in modeling data through linear relationships.</li><li><b>Loss function</b>: MSE is the core metric, which is easy to optimize but sensitive to outliers.</li><li><b>Gradient Descent</b>: An efficient parameter optimization for various scenarios.</li><li><b>Applications</b>: From house prices to sales forecasts, linear regression is everywhere.</li></ul>',
                      position: 1
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      createdAt: '26 Mar 2025'
    },
    {
      id: 2,
      title: 'How to use Linear Regression in Python',
      header: 'Linear Regression is a simple yet powerful machine learning algorithm that is used to predict the relationship between a dependent variable and one or more independent variables. It is a type of supervised learning algorithm that is used to predict the output of a continuous variable based on the input variables.',
      description: 'Linear Regression is a simple yet powerful machine learning algorithm that is used to predict the relationship between a dependent variable and one or more independent variables. It is a type of supervised learning algorithm that is used to predict the output of a continuous variable based on the input variables.',
      category: 'Machine Learning',
      createdAt: '26 Mar 2025'
    }
  ]
}