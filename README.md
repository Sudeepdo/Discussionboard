
# Discussions App

This project is a simple React-based application that allows users to engage in discussions, like and dislike posts, and create new discussions. 

## Features

- **View Discussions**: Users can view existing discussions with a like and dislike feature.
- **Post New Discussions**: Users can create new discussions by entering a title and content.
- **Like and Dislike**: Users can interact with each discussion post by liking or disliking it.
- **Responsive Design**: The app is fully responsive and can be accessed on both desktop and mobile devices.

## Tech Stack

- **Frontend**: React.js
- **Styling**: Bootstrap
- **Routing**: React Router
- **Icons**: Icons8

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 14.x or later
- **npm**: Version 6.x or later

### Installing Dependencies

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-name>
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000`.

## Components

- **Navbar**: The navigation bar at the top of the page that includes links to different sections of the app and a copyright modal.
- **Discussions**: The main page displaying all discussion posts with like/dislike buttons.
- **New Discussion**: The form page where users can post a new discussion.


## Files
1. Navbar.js
THis section contains the Navbar component, which is responsible to display the navigation bar at the top of the app. It links to the "Hero Section" and "Three-Column Section," and a button to open a modal that displays copyright information. React's useState connect controls the modal functionality while bootsstrap's modal and button components used to show and hide the modal .

2. Discussions.js
The Discussions component displays a list of all the existing discussions and it fetches the discussions and their like/dislike counts and displaying in a list format. When a user connect with the like/dislike buttons, it updates the respective counts for that discussion. It also allows the user to navigate to a page to post a new discussion. We managed a Like , Dislike and discussion by using react

3. NewDiscussion.js
The newdiscussion component provides a form for users to create a new discussion which includes fields for the title and content of the discussion. When the form is submitted, it creates a new discussion object, adds it to the list of discussions, and navigates the user back to the discussions page.
