# Temelio Grant Management System

This project aims to streamline the grant-making workflow for foundations by providing a full-stack application that simplifies the process of managing and communicating with nonprofits. The solution includes a backend built with Python FastAPI and a frontend developed using ReactJS.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.8 or higher
- pip (Python package manager)
- Node.js and npm (Node package manager)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/nikhilagarwal204/Temelio-Grant.git
cd Temelio-Grant
```

2. **Set up the backend (FastAPI)**

Navigate to the `server` directory:

```bash
cd server
```

Install required Python dependencies:

```bash
pip install -r requirements.txt
```

Run the FastAPI server:

```bash
uvicorn main:app --reload
```

The FastAPI server will be available at `http://localhost:8000`.

3. **Set up the frontend (ReactJS)**

Open a new terminal window and navigate to the `client` directory from the root of the project:

```bash
cd client
```

Install required npm packages:

```bash
npm install
```

Start the React development server:

```bash
npm start
```

The React application will be available at `http://localhost:3000`.

## Features

- **Nonprofit Management**: Create and save nonprofit organizations along with their metadata (name, address, and email).
- **Foundation Management**: Create and save foundation entities along with their metadata (email).
- **Email Templating and Sending**: Send templated emails to a list of nonprofits, automatically populating each email with the respective nonprofit's name and address.
- **Email Log Viewing**: View all emails that have been sent to nonprofits from a foundation.

## Usage

1. Navigate to `http://localhost:3000` in your web browser.
2. Use the UI to add nonprofits and foundations by entering their information as prompted.
3. Add one or more nonprofits' email in comma-seperated format and use the interface to send an email.
4. View sent emails through the provided interface.

## Development Notes

- The backend uses an in-memory database for simplicity; data will not persist if the server is restarted.
- Email sending functionality is mocked; actual sending logic would involve integrating with an email service provider like SendGrid etc.