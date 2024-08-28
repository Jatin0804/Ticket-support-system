# Ticket Support System

## Objective:
Develop a Ticket Support System where users can log in, submit tickets, and track their status. 
Admins should be able to log in, view, manage, and resolve tickets. 
This project will work on React.js, Node.js, and MongoDB, as well as the ability to develop a full-stack application.

## Requirements:

### Stack:o
- Backend: Nde.js
- Frontend: React.js
- Database: MongoDB

### Core Features:
1. User Features:
- Login/Registration: Users should be able to register and log in to the system.
- Submit Ticket: After logging in, users should be able to submit a support ticket with details such as
  title, description, and category.
- View Tickets: Users should be able to view their submitted tickets along with their status (e.g.,
  Open, In Progress, Resolved).
- Update Profile: Users should be able to update their profile information.

2. Admin Features:
- Admin Login: Admins should be able to log in to the system with elevated permissions.
- View All Tickets: Admins should be able to view all submitted tickets with the ability to filter by
  status.
- Resolve Ticket: Admins should be able to change the status of a ticket (e.g., from Open to
  Resolved) and add a resolution comment.
- User Management: Admins should be able to view and manage user accounts.

### Backend Requirements:
- API Endpoints: Create endpoints using FastAPI for all the above features (e.g., login, ticket
  submission, status update).
- Authentication: Use JWT (JSON Web Tokens) for secure authentication.
- Database: Use MongoDB to store user data, tickets, and status information.

### Frontend Requirements:
- UI/UX: Develop a clean and responsive UI using Vue.js that aligns with modern design principles.
- State Management: Use Vuex for managing the application's state.
- Routing: Use Vue Router to manage different views (e.g., Login, Dashboard, Ticket Submission).
- Notifications: Implement user notifications for ticket status updates and other relevant actions.

### Bonus (Optional):
- Real-Time Updates: Implement real-time ticket updates using WebSockets.
- Email Notifications: Send email notifications to users when their ticket status is updated.
- Admin Dashboard: Create a dashboard for admins to view statistics such as the number of tickets
  resolved, pending tickets, etc.

### Deliverables:
- Source Code: The complete source code for both the frontend and backend, including any
  necessary configuration files.
- Documentation: A brief document explaining how to set up and run the application, including API
  documentation.
- Executable File: Package the application (frontend and backend) so that it can be easily deployed
  or run locally.

### Submission Guidelines:
- Submit the source code as a `.zip` file or provide a link to a GitHub repository.
- Include instructions on how to set up the development environment and run the application.
- Ensure all API endpoints are well-documented, and include any necessary postman collections for
  testing.

### Evaluation Criteria:
- Functionality: Does the application meet the required features?
- UI/UX: Is the application user-friendly and visually appealing?
- Code Quality: Is the code well-structured, commented, and easy to understand?
- Error Handling: How does the application handle errors and edge cases?

### Certification and Internship Opportunity:
- Certification: All candidates who successfully complete this assignment will receive a certification
  of achievement from Affworld FZ LLC.
- Assured Internship: Candidates who deliver a well-executed solution will be offered an internship
  opportunity at Affworld FZ LLC, giving them the chance to work on real-world projects and further
  develop their skills.