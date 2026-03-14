# Login System

A simple, secure login authentication system built with Node.js/Express backend and vanilla JavaScript frontend. This project demonstrates a complete authentication flow with client-side validation, server-side authentication, and session management.

## Features

- **Secure Authentication**: Server-side user validation with proper error handling
- **Client-Side Validation**: Real-time form validation with user-friendly feedback
- **Session Management**: Local storage-based session handling
- **Responsive Design**: Clean, modern UI that works on all devices
- **CORS Support**: Cross-origin resource sharing enabled for API access
- **Fallback Authentication**: Local testing fallback when server is unreachable
- **Cross-Platform**: Run scripts for both Windows and Linux environments

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing

### Frontend
- **Vanilla JavaScript** - No frameworks, pure JavaScript
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **Fetch API** - Modern HTTP requests

### Development Tools
- **npm** - Package management
- **Git** - Version control

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **npm** - Comes with Node.js installation
- **Git** - [Download here](https://git-scm.com/)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/login-system.git
   cd login-system
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **The project is ready to run!** (No additional build steps required)

## Usage

### Quick Start

#### Windows
Double-click `run.bat` or run in command prompt:
```cmd
run.bat
```

#### Linux/macOS
Make the script executable and run:
```bash
chmod +x run.sh
./run.sh
```

### Manual Start

1. **Start the authentication server:**
   ```bash
   node server.js
   ```
   Server will start on `http://localhost:3000`

2. **Serve static files:**
   ```bash
   # Using Python (if available)
   python -m http.server 8000

   # Or using Node.js
   npx serve . -p 8000
   ```
   Static files served on `http://localhost:8000`

3. **Open your browser** and navigate to `http://localhost:8000`

### Test Credentials

For testing purposes, use these credentials:
- **Email:** `user@example.com`
- **Password:** `password123`

## API Documentation

### Authentication Endpoint

#### POST `/login`

Authenticates a user with email and password.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Success Response (200):**
```json
{
  "ok": true,
  "user": {
    "email": "user@example.com",
    "name": "Demo User"
  }
}
```

**Error Responses:**

- **400 Bad Request:** Missing email or password
  ```json
  {
    "ok": false,
    "message": "Email and password required"
  }
  ```

- **401 Unauthorized:** Invalid credentials
  ```json
  {
    "ok": false,
    "message": "Invalid credentials"
  }
  ```

## Project Structure

```
login-system/
├── server.js          # Express authentication server
├── script.js          # Frontend JavaScript logic
├── styles.css         # Application styling
├── index.html         # Login page (HTML)
├── main.html          # Dashboard page (HTML)
├── requirements.txt   # Python dependencies (for Flask alternative)
├── run.bat           # Windows startup script
├── run.sh            # Linux/macOS startup script
├── README.md         # This file
└── test.txt.txt      # Test file
```

## Development

### Adding New Features

1. **Backend changes:** Modify `server.js`
2. **Frontend changes:** Update `script.js`, `styles.css`, or HTML files
3. **Testing:** Use the provided test credentials or add your own users to the `USERS` array

### Environment Variables

The server uses these environment variables:
- `PORT` - Server port (default: 3000)

### Security Notes

- This is a demo application with hardcoded credentials
- In production, use proper database storage and password hashing
- Implement proper session management and JWT tokens
- Add rate limiting and input sanitization

## Troubleshooting

### Common Issues

1. **"Server unreachable" error:**
   - Ensure the Node.js server is running on port 3000
   - Check for firewall blocking the port
   - Verify Node.js and npm are properly installed

2. **Static files not loading:**
   - Make sure the static file server is running on port 8000
   - Check that HTML files exist in the project root

3. **CORS errors:**
   - The server has CORS enabled, but ensure you're accessing from the correct origin

### Logs

- Server logs appear in the terminal where `node server.js` is running
- Check browser developer tools (F12) for client-side errors

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -am 'Add new feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

### Code Style

- Use consistent indentation (2 spaces)
- Add comments for complex logic
- Follow JavaScript ES6+ best practices
- Test all changes before committing

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Future Enhancements

- [ ] User registration functionality
- [ ] Password reset via email
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] JWT token authentication
- [ ] User roles and permissions
- [ ] Password hashing with bcrypt
- [ ] Rate limiting
- [ ] Input validation and sanitization
- [ ] Unit and integration tests
- [ ] Docker containerization
- [ ] CI/CD pipeline

## Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/login-system/issues) page
2. Create a new issue with detailed information
3. Include error messages, browser/console logs, and steps to reproduce

## Acknowledgments

- Built with Express.js and vanilla JavaScript
- Inspired by modern web authentication patterns
- CSS design inspired by contemporary UI frameworks
