import ResumeLayout from '../../layout/ResumeLayout';
import { ResumeDivider, ResumeText, ResumeTitle, ResumeWorkTitle, ResumeSubText, ResumeDownload  } from './ResumeStyles';
import { Container } from '../../components/Header/HeaderStyles';


const Resume = () => {

    return(
        <ResumeLayout>

            <Container grid>
                
                <ResumeDownload
                href = "/Connor Reed_resume_2025.docx"
                download>
                Download Resume
                </ResumeDownload>

            </Container>

            <ResumeDivider colorAlt />

            <ResumeText>
            Resourceful and technically skilled eCommerce specialist with a strong foundation in coding, theme development, and problem-solving. Experienced in Shopify theme support and freelance development, with proven ability to troubleshoot complex HTML, CSS, and JavaScript issues. A detail-oriented, logical, and creative thinker who excels in diagnosing technical problems, improving user experience, and optimizing site performance. Passionate about advancing expertise in computer languages and delivering customized solutions that meet client needs. Currently seeking a developer role that offers hands-on problem-solving, mentorship, and opportunities to contribute to full-stack or front-end application development.
            </ResumeText>

            <ResumeDivider colorAlt />
            <ResumeTitle>KEY SKILLS AND COMPETENCIES</ResumeTitle>
            <ResumeDivider colorAlt/>

            <ResumeText>
                
                <span style={{fontWeight: 'bold', color: 'black'}}>Languages and Scripting: <br/></span>
               
                HTML, CSS, JavaScript (ES6+), Liquid (Shopify), Python, C++, C#, C, Java 
                
                <span style={{fontWeight: 'bold', color: 'black'}}><br/>eCommerce Platforms and CMS: <br/></span>
                
                Shopify, Shopify Plus, ThemeKit
                
                <span style={{fontWeight: 'bold', color: 'black'}}><br/>Frameworks and Libraries: <br/></span>
                
                React, Redux, Next.js, Angular, Vue

                <span style={{fontWeight: 'bold', color: 'black'}}><br/>Server-Side Technologies: <br/></span>
                
                PHP, Node.js, .NET Runtime, Express.js, ASP.NET Core

                <span style={{fontWeight: 'bold', color: 'black'}}><br/>Tools and Environments <br/></span>
                
                Git, GitHub, Visual Studio Code, Chrome DevTools, Figma, Vercel, Docker

                <span style={{fontWeight: 'bold', color: 'black'}}><br/>Database Technologies: <br/></span>
                
                MySQL, Firebase, MongoDB

                <span style={{fontWeight: 'bold', color: 'black'}}><br/>Analytics and Optimization: <br/></span>
                
                Google Analytics, Shopify Reports

                <span style={{fontWeight: 'bold', color: 'black'}}><br/>Version Control and Deployment: <br/></span>
                
                Proficiency using Git and GitHub for version control, branching, and collaboration. Familiar with deploying applications using services like Vercel and Docker.

                <span style={{fontWeight: 'bold', color: 'black'}}><br/>API Integration and Data Handling: <br/></span>
                
                Experience working with RESTful APIs for data retrieval and manipulation. Secure handling of tokens for authentication and access control in web applications.

                <span style={{fontWeight: 'bold', color: 'black'}}><br/>Responsive Design and Cross-Browser Compatibility: <br/></span>
                
                Skilled in creating mobile-friendly, accessible layouts using CSS frameworks and custom media queries. Able to debug across different browsers and devices to ensure consistent UX.

                <span style={{fontWeight: 'bold', color: 'black'}}><br/>Component-Based Architecture:<br/></span>
                
                Applied best practices in React development, including reusable components, prop drilling, and state lifting. Comfortable using libraries like Redux for state management in complex applications.

                <span style={{fontWeight: 'bold', color: 'black'}}><br/>Game Development & 3D Modeling: <br/></span>
                
                Unreal Engine (Blueprints and AI Development), Autodesk 3DS (Polygonal Modeling, UV Mapping, Animation)

                <span style={{fontWeight: 'bold', color: 'black'}}><br/>Adobe Suite: <br/></span>
                
                Adobe Photoshop (Texture Creation), Adobe Illustrator (UI Design)

                <span style={{fontWeight: 'bold', color: 'black'}}><br/>Professional Competencies: <br/></span>
                <ul>
                    <li>Technical Troubleshooting and Issue Resolution</li>
                    <li>Technical Documentation and Reporting</li>
                    <li>Customer Support and Merchant Training</li>
                    <li>Theme Customization and Optimization</li>
                    <li>Process Improvement and Workflow Efficiency</li>
                    <li>Cross-Functional Team Collaboration</li>
                    <li>Project Management and Stakeholder Communication</li>
                </ul>

                Adobe Photoshop (Texture Creation), Adobe Illustrator (UI Design)
                
            </ResumeText>

            <ResumeDivider colorAlt/>

              {/* ///////Work History */}
            <ResumeTitle nopadding >Work Experiences</ResumeTitle>

            <ResumeDivider colorAlt/>

            <ResumeWorkTitle>Theme Support Specialist</ResumeWorkTitle>

            <ResumeText>@ We Are Underground (remote), July 2022 - March 2025</ResumeText>

            <ResumeSubText>
            Deliver expert-level technical support for merchants using custom Shopify themes, providing code-based solutions and personalized assistance. Diagnose and resolve a wide range of front-end issues, application conflicts, and theme customization requests to improve store functionality and performance.
            </ResumeSubText>

            <ResumeText>Key Contributions</ResumeText>
            <ResumeSubText>
            •	Troubleshoot and resolve HTML, CSS, JavaScript, and Liquid code issues to maintain optimal site performance for clients.
            •	Support merchants with theme customizations, aligning design and functionality with their branding goals.
            •	Address third-party app conflicts and conduct disaster recovery for broken or disrupted storefronts.
            •	Enhance user experience by guiding merchants on Shopify’s theme features and best practices.
            •	Collaborate with the team to refine internal processes, reducing resolution time and boosting customer satisfaction.

            </ResumeSubText>

            <ResumeWorkTitle>Freelance eCommerce Developer</ResumeWorkTitle>

            <ResumeText>@ Remote, 2022</ResumeText>

            <ResumeSubText>
                Redesigned and customized a Shopify storefront to improve user experience, showcase brand identity, and drive customer engagement. Delivered front-end enhancements using JavaScript and Liquid, focusing on both aesthetics and functionality.
            </ResumeSubText>

            <ResumeText>Key Contributions</ResumeText>
            <ResumeSubText>
            •	Executed a full Shopify redesign to create a modern, responsive storefront that increased usability and supported higher conversion potential.
            •	Developed custom JavaScript functionality, including an interactive tabbed section that revealed a user-friendly inquiry form.
            •	Optimized product pages and site navigation to streamline the customer journey and reduce friction in the buying process.
            •	Built a custom section to highlight the client's brand story and media features, reinforcing trust and credibility.
            </ResumeSubText>

            <ResumeWorkTitle>Capstone Project Team Lead</ResumeWorkTitle>

            <ResumeText>@ Northeast State, Jan 2021 - May 2021</ResumeText>

            <ResumeSubText>
               Led a student development team in building a custom application for Kintronic Labs, using the Model-View-Controller (MVC) architecture in Python. Oversaw task delegation, facilitated collaboration, and ensured the project aligned with client needs and technical specifications.
            </ResumeSubText>

            <ResumeText>Key Contributions</ResumeText>
            <ResumeSubText>
            •	Independently learned and implemented the MVC model to structure the application, successfully connecting data from the model to the view through controller logic.
            •	Collaborated with a teammate to understand and apply complex mathematical concepts, integrating them into a Python class with multiple functional components.
            •	Presented the completed application to the client, demonstrating the project’s functionality and technical foundation.

            </ResumeSubText>

            <ResumeWorkTitle>Operational Technical Professional</ResumeWorkTitle>

            <ResumeText>@ McDonald's, 2019-2021</ResumeText>

            <ResumeSubText>
               Provided on-site technical support for restaurant operations, specializing in troubleshooting and maintaining Point of Sale systems, servers, and hardware infrastructure. Acted as the go-to resource for internal IT needs, reducing dependency on external support services.
            </ResumeSubText>

            <ResumeText>Key Contributions</ResumeText>
            <ResumeSubText>
            •	Diagnosed and resolved in-store technical issues involving POS systems, server disruptions, and hardware failures.
            •	Installed, updated, and maintained hardware systems, preventing downtime and saving on outsourced IT costs.
            •	Trained management staff in common troubleshooting techniques, significantly reducing helpdesk requests and improving internal response time.
            •	Contributed to improved helpdesk efficiency by enabling team members to focus on complex issues rather than routine technical tasks.

            </ResumeSubText>

            <ResumeWorkTitle>Kitchen Department Manager</ResumeWorkTitle>

            <ResumeText>@ McDonald's, 2015-2019</ResumeText>

            <ResumeSubText>
                Oversaw kitchen operations with a focus on cost control, team leadership, and process improvement. Used data analysis to identify patterns in inventory and sales that could lead to profit loss, implementing targeted solutions to mitigate risk and improve efficiency.
            </ResumeSubText>

            <ResumeText>Key Contributions</ResumeText>
            <ResumeSubText>
            •	Managed inventory and analyzed sales trends to reduce food waste and enhance cost efficiency.
            •	Led kitchen staff to consistently meet quality standards, performance expectations, and customer service goals.
            •	Designed training resources and provided hands-on coaching, resulting in higher team productivity and stronger adherence to operational procedures.
            •	Communicated resolutions to operational challenges clearly, while motivating staff with goal-based incentives.

            </ResumeSubText>

            <ResumeDivider colorAlt/>

            <ResumeTitle nopadding>WEB AND GAME DEVELOPMENT PROJECTS</ResumeTitle>
            
            <ResumeDivider colorAlt/>

            




            <ResumeWorkTitle>MERN Stack Ticketing System</ResumeWorkTitle>

            <ResumeText>Full-Stack CRUD Application with Token-Based Authentication</ResumeText>

            <ResumeSubText>
                Built a secure ticket support system using the MERN stack (MongoDB, Express, React, Node.js) with user authentication via bearer tokens. Registered users can create, view, update, and delete their own support tickets. Backend routes enforce ownership-based access control to prevent unauthorized actions.
            </ResumeSubText>

      
            <ResumeSubText>
            •	Implemented full CRUD (create, read, update, delete) operations with secure token-based logic.
            •	Designed scalable architecture to support user-specific ticket visibility.
            •	Currently developing an admin view with restricted delete capabilities for enhanced moderation.
            </ResumeSubText>

            <ResumeWorkTitle>Unreal Engine Arena Shooter (Unreal Engine 5)</ResumeWorkTitle>

            <ResumeText>First-Person shooter with AI, Armor/Health Pickups, Dynamic HUD and Scoreboard</ResumeText>

            <ResumeSubText>
               Designed and developed a fast-paced arena shooter with dynamic gameplay elements and AI-driven opponents. Built using Unreal Engine 5 and Blueprints, the game features real-time combat mechanics, interactive pickups, and a responsive user interface for player feedback.
            </ResumeSubText>

            <ResumeSubText>
            •	Implemented behavior-driven AI with movement patterns, targeting logic, and attack routines.
            •	Developed a health and shield system for players and enemies, including temporary defenses and recovery mechanics.
            •	Designed HUD elements and an in-game scoreboard to display aiming reticles, health, shield status, and match scores.
            </ResumeSubText>

            <ResumeWorkTitle>Farkle Dice Game</ResumeWorkTitle>

            <ResumeText>C++ Console Game Using Object-Oriented Programming</ResumeText>

            <ResumeSubText>
              Created a turn-based Farkle dice game in C++ that simulates traditional gameplay with score tracking, randomized dice rolls, and game state management. The program demonstrates solid object-oriented structure and file I/O for enhanced usability.
            </ResumeSubText>

            <ResumeSubText>
            •	Developed modular class architecture to manage game entities such as players, dice, and scoring logic.
            •	Implemented full Farkle ruleset, including point combinations, turn-based flow, and risk/reward mechanics.
            •	Integrated file input to read gameplay instructions and support user onboarding.
            •	Built game state transitions from active play to win conditions based on point thresholds.
            </ResumeSubText>

            <ResumeWorkTitle>Random Monster Generator</ResumeWorkTitle>

            <ResumeText>Java Console Application with Object-Oriented Programming</ResumeText>

            <ResumeSubText>
                Created a console-based game utility that generates randomized monster profiles using Java and object-oriented principles. Users can save, load, and sort generated monsters based on customizable attributes.
            </ResumeSubText>

            <ResumeSubText>
            •	Built an inheritance-based class system where multiple monster types extend a base Monster class.
            •	Included file input/output features for saving and loading game data.
            •	Developed multiple sorting algorithms to compare monsters by traits such as health, strength, or speed.
            </ResumeSubText>

            <ResumeDivider colorAlt/>
            <ResumeTitle nopadding>EDUCATION AND CERTIFICATIONS</ResumeTitle>
            <ResumeDivider colorAlt/>
            
            <ResumeWorkTitle>Southern New Hampshire University (SNHU) | Manchester, NH</ResumeWorkTitle>
            
            <ResumeText>
                Bachelor of Science<br/>
                Anticipated Graduation Date: May 2026 <br/>
                Major: Game Programming & Development<br/>
                Current GPA: 3.487<br/><br/>
                Related Course Work:

            <ResumeSubText>
                Artificial Intelligence, Software Development, Project Management, 3-D Modeling and Animation, Fundamentals of Design, Info Tech and Digital Games, Virtual Game Environment Design, Graphics and Print Media
            </ResumeSubText>
          
            </ResumeText>

            <ResumeWorkTitle>Northeast State Community College | Blountville, TN</ResumeWorkTitle>
            
            <ResumeText>
                Associate of Applied Science<br/>
                Graduated May 2022<br/>
                Major: Computer Information Technology (Concentration: Programming)<br/>
                GPA: 3.824<br/><br/>
                Related Course Work:

                <ResumeSubText>
                Computer Science I and II, Intro to Scripting Languages, Client-Side Programming, Android App Development, Assembly and Computer Organization
                </ResumeSubText>
            </ResumeText>

            <ResumeWorkTitle>Freemote Shopify Development Camp</ResumeWorkTitle>
            
            <ResumeText>
                Shopify Liquid Training | 2022<br/>
                Completed in Oct 2022<br/><br/>

                <ResumeSubText>
                    •	Gained hands-on experience with Shopify Liquid for advanced theme customization and development.
                   <br/> •	Applied Liquid logic to build dynamic store elements, improving functionality and enhancing user experience in eCommerce environments.
                </ResumeSubText>
            </ResumeText>

            <ResumeDivider colorAlt/>

        </ResumeLayout>
    );
};

export default Resume;