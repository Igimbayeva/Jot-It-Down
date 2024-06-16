# Jot-It-Down_Note-Taker

The Note Taker application is a web-based tool built with Express.js that allows users to write, save, and delete notes. This application provides a simple and intuitive interface for managing notes effectively.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functionality](#functionality)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)
- [Live URL](#live-url)

## Installation

To run the Note Taker application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Igimbayeva/Jot-It-Down_Note-Taker
   ```

2. Navigate into the project directory:

   ```bash
   cd Jot-It-Down_Note-Taker
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to use the Note Taker application.

## Usage

Once the application is running, you can:

- Click on the "Get Started" button to go to the notes page.
- Write a new note by entering a title and text in the provided fields.
- Click on the floppy disk icon (Save Note) to save the note.
- View a previously saved note by clicking on it in the left-hand column.
- Edit an existing note by modifying the title and/or text fields and clicking "Save Note" again.
- Delete a note by clicking on the trash can icon next to the note.

## Functionality

The Note Taker application uses Express.js on the back end to handle API requests and file operations. Here's an overview of its functionality:

- **GET `/api/notes`**: Retrieves all saved notes from `db/db.json`.
- **POST `/api/notes`**: Adds a new note to `db/db.json`.
- **DELETE `/api/notes/:id`**: Deletes a note from `db/db.json` based on its unique ID.

The front end is served using HTML and JavaScript. The application dynamically updates the note list and active note display without requiring a page refresh, providing a seamless user experience.

## Technologies Used

The Note Taker application leverages the following technologies:

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for handling server operations.
- **UUID**: Generates unique IDs for new notes.
- **HTML/CSS**: Markup and styling languages for building web pages.
- **JavaScript (ES6+)**: Programming language for implementing application logic.
- **Bootstrap**: Front-end component library for responsive design.
- **JSON**: Lightweight data-interchange format for storing and transmitting data.

## File Structure

The project structure is organized as follows:

```
Note Taker App
├── db/
│   ├── db.json          # Database file storing notes
│   └── store.js         # Module handling file read/write operations
├── public/
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css  # CSS styles for the application
│   │   └── js/
│   │       └── index.js    # JavaScript file handling front-end logic
│   ├── index.html          # Landing page HTML
│   └── notes.html          # Notes page HTML
├── routes/
│   ├── apiRoutes.js        # Express.js routes for API endpoints
│   └── htmlRoutes.js       # Express.js routes for HTML pages
├── server.js               # Express.js server setup
├── package.json
└── README.md               # Project documentation
```

## Dependencies

The Note Taker application utilizes the following main dependencies:

- **Express.js**: Web framework for handling server operations.
- **uuid**: Generates unique IDs for new notes.
- **util.promisify**: Converts callback-based functions to Promise-based functions.

For development purposes, it also includes dependencies for testing, linting, or other optional functionality.

## Contributing

Contributions to the Note Taker application are welcome!<br> 
If you find any issues or have suggestions for improvements, please feel free to open an issue or create a pull request on the GitHub repository at [Igimbayeva/Jot-It-Down_Note-Taker](https://github.com/Igimbayeva/Jot-It-Down_Note-Taker).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Live URL

The Note Taker application is deployed and accessible live at [https://your-note-taker-url.render.com](https://your-note-taker-url.render.com).

