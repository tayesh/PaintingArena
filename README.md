# Painting Arena Website[![Live Demo]](https://www.paintingarena.com)

This repository contains the source code for the Painting Arena website, a platform dedicated to selling paintings. The website is built using React.js for the frontend, Node.js for the backend, and Firebase for authentication. Additionally, Tailwind CSS and Daisy UI npm packages are utilized for styling.

## Features

- **Authentication**: Users can sign up and log in using Google, GitHub, or email/password registration.
- **Painting Listings**: The website displays a variety of paintings added by users.
- **User-specific Content**: Each user can view the paintings they have added to the platform.
- **CRUD Operations**: Users can add, update, and delete their own paintings.
- **React Toast Notifications**: Implemented to provide users with feedback on their actions.
  
## Technologies Used

- **Frontend**: React.js, Tailwind CSS, Daisy UI
- **Backend**: Node.js
- **Authentication**: Firebase Authentication
- **Database**: MongoDB (CRUD operations handled in the backend)
  
## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd painting-arena`
3. Install dependencies for both frontend and backend:
4. Set up Firebase Authentication:
- Create a Firebase project and enable authentication methods (Google, GitHub, Email/Password).
- Add Firebase configuration to the frontend.
5. Set up MongoDB:
- Create a MongoDB Atlas cluster.
- Configure connection details in the backend.
6. Start the frontend and backend servers:

## Folder Structure

The repository is structured as follows:

- `frontend`: Contains the React.js frontend code.
- `backend`: Contains the Node.js backend code for CRUD operations and server setup.
- `firebase.json`: Firebase configuration file.
- `README.md`: Documentation for the project.

## Contributing

Contributions are welcome! If you would like to contribute to the project, please fork the repository, make your changes, and submit a pull request. Be sure to follow the project's coding standards and guidelines.

## License

This project is licensed under the [MIT License](LICENSE).
