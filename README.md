# CityXP

![CityEP](src/assets/family.png)

About text

# Live Page
[CityXP]()

![Website Mockup]()

# Django Rest Backend
The repository for the backend of the application can be found here:<br>[CityXP API]()

## Table of Contents

* [CityXP](#cityxp)
* [UX](#ux)
  * [User Goals](#user-goals)
  * [Agile and planning](#agile-and-planning)
  * [Wireframes](#wireframes)
  * [User stories](#user-stories)
  * [Design choices](#design-choices)
    * [Colors](#colors)
    * [Typography](#typography)
    * [Imagery](#imagery)
* [Features](#features)
  * [Future Features](#future-features)
* [Website layout](#website-layout)
  * [Navbar](#navbar)
  * [Home page](#home-page)
  * [Feed page](#feed-page)
  * [Contact page](#contact-page)
  * [Sign in page](#sign-in-page)
  * [Sign up page](#sign-up-page)
  * [Profile page](#profile-page)
  * [Create post](#create-post)
  * [Post page](#post-page)
* [Reusability](#reusability)
  * [Component Reusability](#component-reusability)
  * [Packages and Tools](#packages-and-tools)
* [Testing](#testing)
  * [Manual Testing](#manual-testing)
  * [Performance and Validation](#performance-and-validation)
* [Known Bugs](#known-bugs)
* [Deployment](#deployment)
  * [Heroku](#heroku)
    *[Initial Setup](#initial-setup)
    *[Preparing the Application](#preparing-the-application)
    *[Deployment](#deployment)
    *[Final steps](#final-steps)
  * [Forking the GitHub Repository](#forking-the-github-repository)
  * [Making a Local Clone](#making-a-local-clone)
* [Credits](#credits)
  * [Content](#content)
  * [Media](#media)
* [Acknowledgements](#acknowledgements)

## UX

### User Goals


### Agile and planning
<hr>
The API and Frontend of this project was planned using Agile methodology and MoSCoW prioritization on github projects.

**The user stories project can be found [here]()**


The project was illustrated by 13 initial Milestone entitled<br>


providing the developer with the freedom to accomplish all issues/tasks flexibly before dates deadline set to June. The Milestones were broken according to their components name main functions.

Throughout the development process, new milestones were added, where tasks started from "Todo," progressing to "In Progress," and finally "Done". The issues were assigned to the sole developer and labeled as "could-have," "should-have,", "must-have", "wont-have" and later on labels like "has been implemented" and "future implementation" was also added.

### Wireframes:
Home page:<br>
![Home]()<br>

Liked page:<br>
![Liked]()<br>

Login page:<br>
![Login]()<br>

Profile page:<br>
![Profile]()<br>

Saved posts page:<br>
![Saved]()<br>

Sign up page:<br>
![Signup]()<br>

&ensp;
### User Stories:

<details>
<summary>
<b style="font-size: 15px; font-style: italic;">User stories Milestone list</b>
</summary>
<summary>


</summary>
</details>

<br>

[Project user stories table can be found here]()
![Project overview]()

### Design Choices


#### Colors


![]()

#### Typography

![]()<br>

#### Imagery


# Features


## Future Features


# Website layout

<details>
<summary>
<b>Website layout</b>
</summary>
<summary>

## Navbar

__Fully responsive navbar__<br>

A fully responsive navbar is futured on top of the page and is always visible. On smaller screens the menu will hide in a hamburger menu bottom for a cleaner look.

  Logged out users:<br>
  - Home page<br>
  - Contact page<br>
  - Sign up page<br>
  - Sign in page<br>

![Navbar logged out]()

Logged in users:<br>
  - Add posts<br>
  - Explore page<br>
  - Following page<br>
  - Guides page<br>
  - Likes page<br>
  - Contact page<br>
  - Sign out page<br>
  - Profile page<br>

![Navbar logged in]()

__Logo hyperlinked to home page:__


__Navbar on smaller screens:__



## Home page

__The Home page consists of:__

__The posts page__



__More profiles__


__The website title__

__Searchbar__


## Feed page

__The feed page consists of:__

__Feed posts__


## Contact Page

__The Contact page consists of:__

__Contact form__


__Purpose of feature:__


## Sign in page

__The Sign in page consists of:__

__Sign in form__


__Purpose of feature:__


## Sign up page

__The Register page consists of:__

__Sign up form__


__Purpose of feature:__
>

## Profile page

__The profile page consists of:__

__Profile page and avatar__


__Purpose of feature:__


## Create post

__The Create post page consists of:__

__Creat post field__


## Post page

__The Post page consists of:__

__The post__


__Purpose of feature:__


__Comment section__

The comment section allows users to post comments on a post aswell as delete and edit their comment using the menu displayed to the right in the comment field.<br>

Comment section:<br>
![Comment section](docs/images/Comments_field.png)<br>
Comment edit menu:<br>
![Comment menu](docs/images/comment_edit_menu.png)<br>
Comment edit view:<br>
![Comment edit](docs/images/comment_edit_view.png)<br>

<hr>

__Additional functions non visible to users:__

__Infinite scroll__


</summary>
</details><br>


# Reusability



## Component Reusability

<details>
<summary>Component Reusability</summary>
<summary>

1. **Asset.js:**<br> This component displays a spinner wherever the page is loading in data, scr or messages that can be edited for the specific purpose in the specific .js component.<br>It can be reused wherever a spinner could be needed, where a scr needs to be called (a specific image for example) or when a message needs to be specified.<br>

* From this component `Const Asset` is considered a reusable component and has been reused in:<br>

   NotFound.js, PostCreateForm.js, PostPage.js, PostsPage.js, PopularProfiles.js, ProfilePage.js to display a spinner whenever content is loading. <br>

2. **Avatar.js:**<br> This component provides a form for handling the Avatar images.<br>
It can be reused whenever users need to add avatars or static images before a user or admin changes the image.<br>

* From this component `Const Avatar` is considered a reusable component and has been reused in:<br>

   NavBar.js, Comment.js, CommentCreateForm.js, Post.js and Profile.js to handle and import the avatar for the user.<br>

3. **CategoryFilter.js:**<br> This component incapsulates functionality that fetches categories from an API and displays them in a dropdown menu, allowing users to filter items based on the selected category.<br>
Can be reused in different situations where a drop down list with filtering for categories etc is needed.<br>

* From this component `Const CategoryFilter` is considered a reusable component and has been reused in:<br>

   PostsPage.js to render the Category filtering of posts.<br>

4. **MoreDropdown.js:**<br> This component are designed to be modular and configurable, which allows for easy reuse with different props and configurations.<br>
Can be reused as a simple dropdown menu in different scenarios for when users need to edit a comment, post, photos etc.<br>

* From this component `const MoreDropdown` is considered a reusable component and has been reused in:<br>

   Comment.js, Post.js and ProfilePage.js to render the dropdown menu the enable the user to edit their data.<br>

5. **Navbar.js:**<br> This component presents a form for users to update their passwords.<br>
It can be reused across different parts of the application where password updating functionality is needed.<br>

* From this component `const NavBar` is considered a reusable component and has been reused in:<br>

   App.js to render the navbar on the entire website no matter what url path the user is currently located at.

6. **NotFound.js:**<br> This component displays and handles the image and message that is displayed when information can't be found.<br>

* From this component `const NotFound` has been used in App.js inside a path to display a "Not found" message when a user wants to use a path that doesn't exist. 
The `const NotFound` was also given a source of `NoResults` and this has been reused in:<br>

   PostsPage.js and ProfilePage.js to display an image and a message to the user when no posts can be found.<br>

7. **SignInForm.js:**<br> This component displays and handles user sign in to the website.<br>
It can be reused in different scenarios such as Employee Portals, Admin Dashboard or in E-commerce stores for users to sign in to their accounts.<br>

* From this component `function SignInForm` is considered a reusable component and has been used in:<br>

   App.js to render the SignInForm on the correct url path.<br>

8. **SignUp.js:**<br> This component provides a way for users to register an account on the website.<br>
It can be reused in situations like event registrations, subscriptions or online course platforms for example.<br>

* From this component `const SignUpForm` is considered a reusable component and has been used in:<br>

   App.js to render the SignInForm on the correct url path.<br>

9. **Comment.js:**<br> This component is designed to display a comment with options to edit or delete it if the current user is the owner.<br>
This component can be reused in different contexts where similar functionality is needed such as blog post comments, forum threads or product reviews.<br>

* From this component `const Comment` is considered a reusable component and has been reused in:<br>

    PostPage.js to fetch comments related to the specific post.<br>

10. **CommentCreateForm.js:**<br> This component is designed to allow users to create new comments. It includes functionality to submit the comment, update the UI with the newly created comment, and reset the form state after submission.<br>
Can be used in the same scenarios and together with Comment.js.<br>

* From this component `function CommentCreateForm` is considered a reusable component and has been reused in:<br>

    PostPage.js to render a form to create and post comments.<br>

11. **CommentEditForm.js:**<br> This component allows users to edit existing comments. It provides functionality to update the comment's content and save those changes via an API request.<br>
Can be used in the same scenarios and together with Comment.js and CommentCreateForm.js.<br>

* From this component `function CommentEditForm` is considered a reusable component and has been reused in:<br>

    Comment.js to render a form for editing the posted comment.<br>

12. **ContactForm.js:**<br> This component is designed to facilitate user interactions for sending messages through a contact form. It handles form validation, submission via API, and displays success messages in a modal upon successful submission.<br>
Can be reused as Customer support portals, Feedback forms or Business inquiry forms.<br>

* From this component `const ContactForm` is considered a reusable component and has been reused in:<br>

    App.js to fetch the ContactForm url path for the Contact Page.<br>

13. **Post.js:**<br> This component is quite versatile and can be reused in various scenarios where displaying and interacting with posts is required.<br>
Can be reused as Blog post display, Forum threads or Portfolio showcases.<br>

* From this component `const Post` is considered a reusable component and has been reused in:<br>

    PostPage.js and PostsPage.js to import all the data related to the specific post.<br>

14. **PostCreateForm.js:**<br> This component is designed to facilitate the creation of new posts within an application. It includes form fields for entering a post title, content, an optional image upload, and selecting a category. Users can fill out these fields, upload an image if desired, and submit the form to create a new post.<br>
Can be used in Poll creation.<br>

* From this component `function PostCreateForm` is considered a reusable component and has been reused in:<br>

    App.js to render the correct path url for the page that is presenting the Post Create form for creating a post.<br>

14. **PostEditForm.js:**<br> This component is designed to handle the edit form of posts within an application. It includes form fields for entering a post title, content, an optional image upload, and selecting a category but with the option to edit them. Users can edit these fields, change image if desired, and resubmit the form to update the existing post.<br>
Can be used in Poll creation.<br>

* From this component `function PostEditForm` is considered a reusable component and has been reused in:<br>

    App.js to render the correct path url for the page that is presenting the Post Edit form for editing an already existing post created with the PostCreateForm component.<br>

15. **PostPage.js:**<br> This component serves as a detailed view for a specific post, displaying the post content along with its comments.<br>
Can be used as Event page, Recipe page, Article detail page.<br>

* From this component `function PostPage` is considered a reusable component and has been reused in:<br>

    App.js to render a specific postPage with the users posts.<br>

16. **PostsPage.js:**<br> This component is designed to display a list of posts based on different filters and conditions, such as categories, search queries, or user-specific feeds.<br>
Can be used as a Product listing page, Job listing page or Tutorial/Course directory.<br>

* From this component `function PostsPage` is considered a reusable component and has been reused in:<br>

    App.js to render the PostsPage with every users posted posts.<br>

17. **PopularProfiles.js:**<br> This component is designed to display a list of popular profiles, either in a compact format for mobile devices or a full format for larger screens.<br>
Can be used as a Featured authors section, Artist spotlight or Top contributors widget.<br>

* From this component `const PopularProfiles` is considered a reusable component and has been reused in:<br>

    PostPage.js, PostsPage.js and ProfilePage.js to render the popular profiles field to the right of the main containers.<br>

18. **Profile.js:**<br> This component is designed to render a user profile with options for following or unfollowing based on the current user's interaction status with the profile.<br>
Can be used as a Community memeber widget, Author card in blog posts, Participant list in events pages. <br>

* From this component `const Profile` is considered a reusable component and has been reused in:<br>

    PopularProfiles.js tho render the profiles in the popular profiles field.<br>

19. **ProfileEditForm.js:**<br> This component allows a user to edit their profile information, including their name, bio, social media links, and profile picture.<br>
Can be used as User account settings, Artist profile edit, Event organizers profile edit.<br>

* From this component `const ProfileEditForm` is considered a reusable component and has been reused in:<br>

    App.js to fetch the correct url path and the view for the ProfileEditForm page. <br>

20. **ProfilePage.js:**<br> This component is designed to display a user's profile information, including their profile picture, bio, social media links, follower counts, and their posts.<br>
Can be used as a Portfolio or Company page.<br> 

* From this component `function ProfilePage` is considered a reusable component and has been reused in:<br>

    App.js to fetch the correct url path and the correct data and view for the Profile Page<br>

21. **UsernameForm.js:**<br> This component allows users to change their username.<br>
Can be used in similar situations where a field of static information can be updated.<br>

* From this component `const UsernameForm` is considered a reusable component and has been reused in:<br>

    App.js to fetch the correct url path and the correct data and view for the Username form used in the Change username page.<br>

22. **UserPasswordForm.js:**<br> This component allows users to change their password. It integrates with React, React Bootstrap for UI components, and Axios for making HTTP requests.
Can be used in similar situations to give users the possibility to change/update secret data.<br> 

* From this component `const UserPasswordForm` is considered a reusable component and has been reused in:<br>

    App.js to fetch the correct url path and the correct data and view for the user password form used in the Change password page.<br>

</summary>
</details>

## Packages and Tools


In this project, we've utilized a variety of libraries and tools to enhance functionality and development efficiency. Below is a list of these technologies along with their purposes:

- **React**
  - A JavaScript library for building dynamic and interactive user interfaces. Ideal for single-page applications.
  
- **Axios**
  - A promise-based HTTP client for making HTTP requests, used for fetching or saving data from/to a server.

- **Bootstrap & React-Bootstrap**
  - Bootstrap provides responsive design elements and layouts. React-Bootstrap adapts these into React components for consistent styling.

- **JWT-Decode**
  - A library for decoding JSON Web Tokens. Useful for interpreting the token's data on the client side.

- **React Router DOM**
  - Manages navigation in React applications, enabling dynamic routing without page reloads.

- **React Infinite Scroll Component**
  - Implements infinite scrolling, loading content as the user scrolls down, enhancing user experience.

- **Testing Libraries (Jest, React Testing Library)**
  - Jest is a simple testing framework, and React Testing Library provides utility functions for testing React components.

- **Mock Service Worker (MSW)**
  - Mocks HTTP requests in development and testing environments. Ideal for testing network request scenarios.

- **Scripts for Building, Testing, and Starting**
  - Specific scripts are defined for building, testing, and starting the application, particularly with Heroku deployment in mind.

- **Node.js and npm Versions**
  - The project specifies Node.js and npm versions to ensure a consistent environment setup.

Additionally, specific scripts were defined for building, testing, and starting the application, particularly with Heroku deployment in mind. The project also specifies Node.js and npm versions for consistent environment setup.

# Testing

## Manual testing


[Manual testing](testing.md)


## Performance and Validation


[Perfomance and Validation](testing.md#performance-and-validation)

# Known Bugs


# Deployment

## Heroku

This project is deployed on Heroku, a cloud platform service that enables easy deployment and scaling for web applications. The deployment process includes the following steps:

### Initial Setup

1. **Create a Heroku Account**: Sign up for a Heroku account at [Heroku's website](https://www.heroku.com/).
2. **Install Heroku CLI**: Download and install the Heroku Command Line Interface (CLI) to interact with Heroku from your local machine.

### Preparing the Application

1. **Procfile**: Create a `Procfile` in your project root directory. This file tells Heroku how to run your application.
2. **Requirements.txt**: Ensure you have a `requirements.txt` file listing all project dependencies.
3. **Config Vars**: Set up necessary configuration variables in Heroku (like `SECRET_KEY`, database URL, etc.).

### Deployment

1. **Create a Heroku App**: Use the Heroku CLI to create a new app.
2. **Add Buildpacks**: If necessary, add the correct buildpacks via the Heroku dashboard or CLI.
3. **Deploy**: Push your code to Heroku either by connecting your GitHub repository to Heroku or using the Heroku CLI to deploy your application.
4. **Database Migration (if applicable)**: Run database migrations using the Heroku CLI.

### Final Steps

1. **Enable the Web Dyno**: Make sure the web dyno is up and running after deployment.
2. **Open the App**: You can open your application from the Heroku dashboard or using the CLI command `heroku open`.

For more detailed instructions and troubleshooting, visit the official [Heroku Dev Center](https://devcenter.heroku.com/).

## Forking the GitHub Repository
<hr>
Forking the GitHub repository allows you to make a copy of the original project on your own GitHub account, enabling you to make changes without affecting the original. Here's how to do it:

1. **Go to the Repository**: Navigate to the original repository on GitHub.
2. **Fork the Repository**: Click the 'Fork' button, located at the top right of the repository page. This creates a copy of the repository in your GitHub account.
3. **Clone Your Fork**: Once forked, you can clone your fork to your local machine for further development.

## Making a Local Clone

Cloning a GitHub repository creates a local copy on your machine, allowing you to sync between the two locations. Here are the steps:

1. **Clone the Repository**: On the GitHub repository page, click the 'Code' button and copy the URL under 'Clone with HTTPS'.
2. **Open Terminal**: Open your terminal and navigate to the directory where you want the clone to be created.
3. **Clone Command**: Type `git clone`, and then paste the URL you copied in Step 1. Press Enter to create your local clone.

# Credits


## Content


## Media


# Acknowledgements: