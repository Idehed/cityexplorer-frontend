# CityXP ![CityEP](src/assets/family.webp)

CityXP is a social media platform designed for people that like to discover new cities. Users can share their experiences, stories, and images about different cities, creating a community of city explorers. Whether you're posting about hidden gems, local cuisine, or cultural landmarks, CityXP is the perfect place to document and discover city life around the world.

Additionally, CityXP offers a feature where users can become certified city guides. As a guide, you can showcase your knowledge and passion for your city, providing personalized tour that visitors can enjoy.

## Live Page
[CityXP](https://cityexplorer-frontend-82d55bcd49a8.herokuapp.com/)

![Website Mockup](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/bb716a4c-d3c4-451e-b515-fc1b68a0cb00)

# Django Rest Backend
The repository for the backend of the application can be found here:<br>[CityXP API](https://github.com/Idehed/CityExplorer_api)

## Table of Contents

* [CityXP](#cityxp)
* [UX](#ux)
  * [User Goals](#user-goals)
  * [Site owner Goals](#site-owner-goals)
  * [Agile and planning](#agile-and-planning)
  * [User stories](#user-stories)
  * [Wireframes](#wireframes)
  * [Design choices](#design-choices)
    * [Colors](#colors)
    * [Typography](#typography)
    * [Imagery](#imagery)
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
- Be able to navigate the platform and access relevant information easily
- Have a clean-looking website with some fun and interactive icons.
- Have a visually appealing and responsive user interface.
- Be able to interact with other users by following them, liking, commenting, and sharing posts.
- Find the city you want to explore by seeing other users' posts.
- Book a guide so that you can have the best experience in that city.


### Site Owner Goals
- Want users to frequently come back to the website to look for new cities to explore or new guides to book.
- Create a clean but fun website where users can upload and share pictures of places in different cities.
- Users enjoy the ability to like a post, comment on a post, review a guide, and upload new pictures. 
- Users like the interact with other by following a user, liking, commenting and reviewing.



### Agile and planning
<hr>
The API and Frontend of this project were planned using Agile methodology and MoSCoW prioritization on GitHub projects.


This projects user stories were divided into 9 milestones<br>


    - Authentication 
    - Navigation  
    - Posts
    - Profile
    - Comments
    - Likes
    - Contact
    - Guides
    - Followers


 The Milestones were broken according to their component's name and main functions.
 All the user stories have been labeled and assigned to the developer and some labels have been put later such as "won't fix" and "Future implementation".

 [Project user stories table can be found here](https://github.com/users/Idehed/projects/6)

![Project overview](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/5a7e4371-aad6-4128-ba28-2e9256662420)

### User Stories:

<details>
<summary>
<b>User stories Milestone list</b>
</summary>
<summary>

#### Authentication

    - As a user I can sign in to the app so that I can access functionality for logged in users 

    - As a user I can create a new account so that I can access all the features for signed up users  

    - As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised

    

#### Navigation

    - As a user I can view a navbar from every page so that I can navigate easily between pages 

    - As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh  

    - As a logged out user I can see sign in and sign up options so that I can sign in/sign up

#### Posts

    - As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about 

    - As a user I can view the posts page so that I can read the comments about the post  

    - As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created

    - As a user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in

    - As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page" etc

    - As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content

    - As a user I can view the details of a single post so that I can learn more about it

    - As a logged in user I can create posts so that I can share my images with the world!

#### Profile

    - As a logged in user I can add my social links to my profile so others can find/follow me on other platforms

    - As a logged in user I can update my username and password so that I can change my display name and keep my profile secure

    - As a logged in user I can edit my profile so that I can change my profile picture and bio

    - As a user I can view basic profile information like: avatar, bio, number of posts, follows and users followed so that I can learn more about them

    - As a user I can view other users profiles so that I can see their posts and learn more about them

    - As a user I can view user's avatars so that I can easily identify users of the application

#### Comments

    - As an owner of a comment I can edit my comment so that I can fix or update my existing comment

    - As an owner of a comment I can delete my comment so that I can control the removal of my comment from the application

    - As a user I can see how long ago a comment was made so that I know how old a comment is

    - As a user I can read comments on posts so that I can read what other users think about the posts

    - As a logged in user I can add comments to a post so that I can share my thoughts about the post

#### Likes

    - As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most

    - As a logged in user I can like a post so that I can show my support for the posts that interest me

#### Contact

    - As a user I can navigate to a specific contact page where I can write a message to the admins so that I can get help, ask questions, or send feedback when needed

#### Guides

    - As a user I would like to be able to edit the review that I posted on a guides profile page

    - As a user I would like to be able to delete the review that I posted on a guides profile page

    - As a user I would like to be able to edit the rating that I posted on a guides profile page

    - As a user I would like to be able to delete the rating that I posted on a guides profile page

    - As a user I would like to be able to rate a guide so that others can see my rating

    - As a user I would like to be able to leave a review so that others can see what I thought about the guide

    - As a user I would like to be able to edit my guide profile

    - As a user I would like to be able to delete my guide profile

    - As a user I would like to be able to register as a guide in my profile so that people can book me as a guide

    - As a user I would like to be able to search for other guides/cities so that I can find what I am looking for faster

    - As a user I would like to be able to view Guides details so I can find the best guide for me

    - As a user I would like to be able to view other Guides so that I can book them with a city I would like to visit

#### Followers

    - As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed

    - As a user I can see a list of more followers profiles so that I can see/follow them




</summary>
</details>

<br>

### Wireframes:

<details>
<summary>
<b>Wireframes:</b>
</summary>
<summary>

I created these wireframes using the Balsamiq app. As the wireframes is not supposedI to be the finishing product i made some changes in the Frontend application. Such as having the navbar at the top instead of on the left side. It was much more work and harder than I thought it would be.

Home page:<br>
![Explore](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/8e21fae4-8e96-492e-a54a-8c5c3c6a3ca1)<br>

Following posts page:<br>
![Following](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/1b37c1a7-b73b-4a30-8612-6eb09d0bd3f0)<br>

Guides page:<br>
![Guides](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/d89eb4a0-d12c-45e9-bda0-faff9002cca7)<br>

Liked page:<br>
![Liked](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/4082b550-907f-44be-be4a-0559a347dc6f)<br>

Profile page:<br>
![Profile](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/9c75cddc-a80f-4e6d-a26a-b98f744958bf)<br>

Contact page:<br>
![Contact](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/45db504f-719d-494f-8440-db5a9a4046fc)<br>

Create posts:<br>
![Create posts](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/0de4ed06-cd18-4998-ad64-f84a043c54dc)<br>

Create guide:<br>
![Create guide](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/c6501dc6-09c5-426a-9878-4cdcd83d0c5f)<br>

Sign in page:<br>
![Signin](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/a3084acf-9d49-4c31-a9e2-9a19e44dbce0)<br>

Sign up page:<br>
![Signup](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/95fe299f-61ab-463d-b524-173f2c58cf39)<br>

</details>

### Design Choices


#### Colors

- Background: The primary background color is a off-white (#f8f8f8). This neutral color creates a clean and airy feel for the website.
- Navigation Bar: The navigation bar also uses and white color (#fffff), just to make it clean and separates from the background color.
- Buttons: I chose the main colors for the buttons (#feaa00), (#242a3d), and (#712e1e). Mostly to match the icons that have similar colors to give some more colors to the website. 

![Colors](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/74101c01-5cab-429a-b804-4275a3d481a1)

#### Typography
I wanted a font that was clean and easy but still looked inviting.
I choose the Poppins bacausue of just that its clean and friendly aesthetic, excellent legibility, and versatility across various design applications.

![Poppins](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/8b9bcd3b-6881-4040-af40-0574c9ae2614)<br>

#### Imagery
I wanted the website to look clean but with some fun and playful icons to go with it. I used these icons to add more color to it. <br>
![Houses](src/assets/architecture-and-city.webp)<br>
<br>
![Family](src/assets/family.webp)<br>
<br>
![Inbox](src/assets/inbox.webp)<br>
<br>
![Arrow down](src/assets/low.webp)<br>
<br>
![Not Found](src/assets/page-not-found.webp)<br>
<br>
![Person](src/assets/people.webp)<br>
<br>
![Likes](src/assets/social-media%20(1).webp)<br>
<br>
![Followers](src/assets/social-media.webp)<br>
<br>
![Guide](src/assets/tour-guide.webp)<br>



## Future Features
<b>Notification:</b><br>
Notification for the user if someone has likes, commented or followed you would be nice to have.

<b>Comment on a comment:</b><br>
Be able to comment back on a specific comment.

<b>Like on a comment:</b><br>
To be able to like a comment that you find interesting. Instead of having to comment on it to answer.


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

1. **Asset.js:**<br> This component displays a spinner wherever the page is loading in data.<br>

* This component has been reused in:<br>

   NotFound.js, GuidePage.js PostCreateForm.js, PostPage.js, PostsPage.js, PopularProfiles.js, ProfilePage.jsand ReviewPage <br>

2. **Avatar.js:**<br> This component provides a form for handling the Avatar images.<br>

* This component has been reused in:<br>

   NavBar.js, Comment.js, CommentCreateForm.js, Guide.js, Post.js, Profile.js and Reviews.js to handle and import the avatar for the user.<br>

3. **MoreDropdown.js:**<br> 
This component can be reused as a simple dropdown menu in different scenarios for when users need to edit somthing like a comment, post, profile etc.<br>

* This component has been reused in:<br>

   Comment.js and Post.js to render the dropdown menu the enable the user to edit their data.<br>

4. **Navbar.js:**<br> This component presents a navbar with links to different "pages".<br>
It can be reused across different parts where you would need a navbar.<br>

* This component has been used in:<br>

   App.js to render the navbar on the entire website no matter what url path the user is currently located at.

5. **NotFound.js:**<br> This component displays and handles the image and message that is displayed when information can't be found.<br>

* This component has been used in App.js inside a path to display a "Not found" message when a user wants to use a path that doesn't exist. 
The component was also given a source of `NoResults` and this has been reused in:<br>

   PostsPage.js, GuidePage, ReviewPage and ProfilePage.js to display an image and a message to the user when no posts/Guides or Reviews can be found.<br>

6. **SignInForm.js:**<br> This component displays and handles user sign in to the website.<br>

* This component has been used in:<br>

   App.js to render the SignInForm on the correct url path.<br>

7. **SignUp.js:**<br> This component provides a way for users to register an account on the website.<br>

* This component has been used in:<br>

   App.js to render the SignInForm on the correct url path.<br>

8. **Comment.js:**<br> This component is designed to display a comment with options to edit or delete it if the current user is the owner.<br>

* This component has been used in:<br>

    PostPage.js to fetch comments related to the specific post.<br>

9. **CommentCreateForm.js:**<br> This component is designed to allow users to create new comments. It includes functionality to submit the comment, update the UI with the newly created comment, and reset the form state after submission.<br>

* This component has been used in:<br>

    PostPage.js to render a form to create and post comments.<br>

10. **CommentEditForm.js:**<br> This component allows users to edit existing comments. It provides functionality to update the comment's content and save those changes via an API request.<br>

* This component has been used in:<br>

    Comment.js to render a form for editing the posted comment.<br>
11. **UseRedirect.js**<br> This component is designed to redirect a user if they are trying to access something they are not suppose to. Or if the tokens have expired they will get redirected to the signin page.

* This component has been reused in:<br>

    SignInForm.js, SignUpForm.js, GuideCreateForm.js, PostCreateForm.js and ReviewCreateForm.js.<br>

12. **Post.js:**<br> This component is quite versatile and can be reused in various scenarios where displaying and interacting with posts is required.<br>

* This component has been reused in:<br>

    PostPage.js and PostsPage.js to import all the data related to the specific post.<br>

13. **PostCreateForm.js:**<br> This component is designed to facilitate the creation of new posts within an application. It includes form fields for entering a post title, content, an optional image upload, and selecting a category. Users can fill out these fields, upload an image if desired, and submit the form to create a new post.<br>

* This component has been used in:<br>

    App.js to render the correct path url for the page that is presenting the Post Create form for creating a post.<br>

14. **PostEditForm.js:**<br> This component is designed to handle the edit form of posts within an application. It includes form fields for entering a post title, content, an optional image upload. Users can edit these fields, change image if desired, and resubmit the form to update the existing post.<br>

* This component has been used in:<br>

    App.js to render the correct path url for the page that is presenting the Post Edit form for editing an already existing post created with the PostCreateForm component.<br>

15. **PostPage.js:**<br> This component serves as a detailed view for a specific post, displaying the post content along with its comments.<br>

* This component has been used in:<br>

    App.js to render a specific postPage with the users posts.<br>

16. **PostsPage.js:**<br> This component is designed to display a list of posts based on different filters and conditions, such as categories, search queries, or user-specific feeds.<br>

* This component has been used in:<br>

    App.js to render the PostsPage with every users posted posts.<br>

17. **PopularProfiles.js:**<br> This component is designed to display a list of popular profiles, either in a compact format for mobile devices or a full format for larger screens.<br>

* This component has been reused in:<br>

    PostPage.js, PostsPage.js and ProfilePage.js to render the popular profiles field to the right of the main containers.<br>

18. **Profile.js:**<br> This component is designed to render a user profile with options for following or unfollowing based on the current user's interaction status with the profile.<br>

* This component has been used in:<br>

    PopularProfiles.js to render the profiles in the popular profiles field.<br>

19. **ProfileEditForm.js:**<br> This component allows a user to edit their profile information, including their name, bio, social media links, and profile picture.<br>

* This component has been used in:<br>

    App.js to fetch the correct url path and the view for the ProfileEditForm page. <br>

20. **ProfilePage.js:**<br> This component is designed to display a user's profile information, including their profile picture, bio, social media links, follower counts, and their posts.<br>

* This component has been used in:<br>

    App.js to fetch the correct url path and the correct data and view for the Profile Page<br>

21. **UsernameForm.js:**<br> This component allows users to change their username.<br>

* This component has been used in:<br>

    App.js to fetch the correct url path and the correct data and view for the Username form used in the Change username page.<br>

22. **UserPasswordForm.js:**<br> This component allows users to change their password. It integrates with React, React Bootstrap for UI components, and Axios for making HTTP requests.
* This component has been used in:<br>

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

I had many bugs throughout this project, mostly it was due to typos both in the backend and in the frontend. I had to reset my database two times because it did not work otherwise. I did have some more bugs that were not only typos.


1. 
![ClassName error](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/f5bd403c-fc8f-4b1c-a58a-0f71e2f7e5ed)
This error happened after I added icons from Fontawesome. I forgot to change the class to className. I did change it and it worked!

2. 
![Profilepage-guide](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/293d235e-0432-471a-946d-0a24752446a1)
This error happened every time I went into someone's profile page even if they were not a certified guide. I had to make sure that the guideid was set and use an if statement if the profile had a guideid. If else set the guide data to null. 

3. 
![error](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/89d802be-6429-4996-954b-dc00ea447240)
This error was fixed after adding a important \w\ in the cors setting. I had set it to \ws\ apparently. 
![cors error solved](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/0769db22-0236-4c26-9964-2d1a1e68082c)


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
- The lessons and tutorials provided by Code Institute, on the final module entitled "Django REST Framework" for the 'Advanced Front-End' endtitled "moments".

- I have been getting insperation from following users:<br>
[Gareth McGirr](https://github.com/Gareth-McGirr),<br>
[Hujanen91](https://github.com/Hujanen91),<br>

- I got help with creating the star rating using this website [React-simple-star-rating](https://react-simple-star-rating.vercel.app/?path=/story/introduction--page)



## Media
- Many of my icons has been collected from this website 
[Flaticon](https://www.flaticon.com/)

- Some others here [Flaticon](https://fontawesome.com/)

- My font is from [Google Fonts Poppins](https://fonts.google.com/specimen/Poppins?query=po)

- The signup and signin images are from [Unsplash](https://unsplash.com/)
  - Thanks to [Ana Bórquez](https://unsplash.com/@anabg1) for the signin image.
  - Thanks to [Benobro](https://unsplash.com/@benobro) for the signup image.


# Acknowledgements:
- My mentor [Gareth McGirr](https://github.com/Gareth-McGirr) for his continuing support and great advice throughout this project.
- The slack community that helped me with many error problems throughout this project!