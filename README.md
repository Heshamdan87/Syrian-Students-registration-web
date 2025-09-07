# Syrian Students Registration Web

This project is a web application designed for the registration and management of Syrian students. It consists of a backend server and a frontend webpage, allowing users to register, view grades, and manage their profiles.

## Project Structure

```
Syrian-Students-registration-web
├── Backend-server
│   ├── package.json        # Configuration file for npm in the backend
│   ├── .env                # Environment variables for the backend server
│   ├── server.js           # Entry point for the backend server
│   └── tests
│       └── api.test.js     # Tests for the API endpoints
├── Frontend-Webpage
│   ├── index.html          # Main HTML file for the frontend application
│   ├── grades.html         # HTML file to display student grades
│   ├── profile.html        # HTML file to show student profile information
│   ├── app.js              # Main JavaScript logic for the frontend
│   ├── grades.js           # JavaScript functions for the grades page
│   ├── profile.js          # JavaScript functions for the profile page
│   ├── style.css           # Styles for the frontend application
│   └── package.json        # Configuration file for npm in the frontend
├── cypress                 # Directory for end-to-end testing with Cypress
└── README.md               # Documentation for the project
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A MongoDB database (or any other database you choose) for the backend.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd Syrian-Students-registration-web
   ```

2. Navigate to the backend server directory and install dependencies:
   ```
   cd Backend-server
   npm install
   ```

3. Set up your environment variables in the `.env` file.

4. Navigate to the frontend webpage directory and install dependencies:
   ```
   cd ../Frontend-Webpage
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd Backend-server
   node server.js
   ```

2. Open the frontend webpage:
   ```
   cd ../Frontend-Webpage
   open index.html
   ```

### Testing

- To run the backend tests, navigate to the `Backend-server` directory and run:
  ```
  npm test
  ```

- For end-to-end testing with Cypress, navigate to the `cypress` directory and follow the Cypress documentation.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.