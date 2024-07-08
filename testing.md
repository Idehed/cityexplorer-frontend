[Back to Readme](README.md#testing)

# Manual testing

This section outlines the approach and results of testing the frontend features of the SourdoughCircle website. Each test case is designed to validate the functionality and user experience categorized in sections of all the websites futures and functions.


## Authentication

| Testcase                                              | Expected Result                                                                                    | Test Result |                                       |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Register a user with valid data                       | Request is successful, the user is registered and sent to sign in page                                        | ✅ PASS     |
| Register a user with invalid data                     | Request fails, form loads again with data and errors                                               | ✅ PASS     |
| Login a user with valid data                          | Request is successful, user is logged in                                                   | ✅ PASS     |
| Login a user with invalid data                        | Request fails, form loads again with data and errors                                               | ✅ PASS     |
| Logout a user                                         | Request is successful, user is logged out                                              | ✅ PASS     |   


## Navigation

| Testcase                                              | Expected Result                                                                                    | Test Result | |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Buttons in navbar                                     | The buttons on the landing page navigate to the correct page                                       | ✅ PASS    |
| Open the Homepage unauthenticated                     | Homepage loads and displays posts                                                   | ✅ PASS     |
| Open the following page without following users                 | Feed loads and displays hint to follow members                                                     | ✅ PASS     |
| Open the following page when following users                    | Feed loads and displays the followed users posts                                                   | ✅ PASS     |
| Open the Guide page                   |    All the guides are shown in a list if there are anyone created                            | ✅ PASS     | 
| Clicking on the menu icon and then on the "register as a guide" in profile page   | Takes you to the creat a guide page                              | ✅ PASS     | 
| Open the Like page without liked posts                | Liked page loads and displays hint to like posts                                                   | ✅ PASS     | 
| Open the Like page with liked posts                   | Liked page loads and displays the liked posts                                                      | ✅ PASS     |  
| Clicking the logo in the navbar loads the home page           | Clicking the logo in the navbar sends the user to the home page                                        | ✅ PASS     |
| Profile in navbar sends user to their profile         | Clicking on profile page in navbar opens the profile                                               | ✅ PASS     | 
| Profile images on posts sends users to the profile    | Clicking on profile image in posts opens the profile                                               | ✅ PASS     | 
| Profile images all over the website    | Clicking on profile image wherever on the website takes you to that profile                              | ✅ PASS     |
| Clicking on the "leave a review " button in guides page    | Takes you to the leave a review page                              | ✅ PASS     |
| Clicking on the "Guide reviews" button in guides page    | Takes you to the detailed reviews on that specific guide                             | ✅ PASS     |

## Posts

| Testcase                                              | Expected Result                                                                                    | Test Result |                                       |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Create a Post with valid data                         | Request is successful, post is created and user is redirected to that post                           | ✅ PASS     |
| Create a Post with invalid data                       | Request fails, form shows error                                                                    | ✅ PASS     |
| Edit a Post with valid data                           | Request is successful, post is updated and user is redirected to post detail                       | ✅ PASS     |
| Edit a Post with invalid data                         | Request fails, form shows error                                                                    | ✅ PASS     |
| Delete a Post                                         | Request is successful, Post is deleted and user is redirected back hone page                           | ✅ PASS     |
| Open a post by clicking                               | Post Detail page loads with correct data                                                           | ✅ PASS     |
| Search posts invalid data                             | Page is loading and displays hint to adjust search word                                             | ✅ PASS     |
| Search posts valid data                               | Page is loading and displays posts with search word                                                 | ✅ PASS     |

## Profiles

| Testcase                                              | Expected Result                                                                                    | Test Result |                               |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Open Profile                                          | Opens Profile Page with correct data                                                               | ✅ PASS     |
| Open owner Profile                                    | Opens owner Profile Page with correct data                                                         | ✅ PASS     |
| Edit Profile                                          | If data is valid, form is submitted, the profile is updated and the user is redirected to profile  | ✅ PASS     |
| Edit username                                         | If data is valid, form is submitted, the username is updated and the user is redirected to profile | ✅ PASS     |
| Change password                                       | If data is valid, form is submitted, the password is updated and the user is redirected to profile  | ✅ PASS     |

## Comments

| Testcase                                              | Expected Result                                                                                    | Test Result |                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Writing a comment                                     | Request is successful, comment is added to the list                              | ✅ PASS     |
| Editing a comment                                     | Request is successful, comment content is updated                               | ✅ PASS     |
| Delete a comment                                      | Request is successful, comment is deleted                                        | ✅ PASS     |
| Comment count increase                                | New comments will increase the comment count both in home, following, liked, and detailed posts | ✅ PASS     |
| Comment count decrease                                | Deleting comments will decrease the comment count both in home, following, liked, and detailed posts | ✅ PASS     |

## Likes

| Testcase                                              | Expected Result                                                                                    | Test Result |                                       |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Liking a post on home page                            | Like count increases and like button changes                                                       | ✅ PASS     |
| Unliking a post on home page                          | Like count decreases and like button changes                                                       | ✅ PASS     |
| Liking a post on post page                            | Like count increases and like button changes                                                       | ✅ PASS     |
| Unliking a post on post page                          | Like count decreases and like button changes                                                       | ✅ PASS     |
| Liking a post on /following and /liked page                | Like count increases and like button changes                                                       |  ✅ PASS   |
| Unliking a post on /following and /liked page              | Like count decreases and like button changes                                                       |  ✅ PASS   |

## Followers

| Testcase                                              | Expected Result                                                                                    | Test Result |                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Follow Profile from profile page                      | Request is successful, Follow button changes and followers count increases                                                      | ✅ PASS     |
| Unfollow Profile from profile page                    | Request is successful, Follow button changes and followers count decreases                                                      | ✅ PASS     |
| Follow Profile from popular profiles container        | Request is successful, Follow button changes and followers count increases                                                      | ✅ PASS     |
| Unfollow Profile from popular profiles container      | Request is successful, Follow button changes and followers count decreases                                                      | ✅ PASS     |

## Guides

| Testcase                                              | Expected Result                                                                                    | Test Result |                                       |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Create a Guide with valid data                         | Request is successful, the guide is created and the user is redirected back to the profile page                           | ✅ PASS     |
| Create a Guide with invalid data                       | Request fails, form shows error                                                                    | ✅ PASS     |
| Delete a Guide                                         | Request is successful, Guide is deleted and user is redirected back to profile page                           | ✅ PASS     |
| Search posts invalid data                             | Page is loading and displays hint to adjust search word                                             | ✅ PASS     |
| Search posts valid data                               | Page is loading and displays posts with search word                                                 | ✅ PASS     |


## Reviews


| Testcase                                              | Expected Result                                                                                    | Test Result |                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Writing a review                                     | Request is successful, the review is added to the list and the user is redirected to the review page                             | ✅ PASS     |
| Delete a review                                      | Request is successful, comment is deleted.                              | ✅ PASS    |
| Review count is decreasesing when a review is deleted                                    | Request is successful, comment is deleted.                              | FAILED    |

## Failed test case
I tried with the time I had left to fix that the review_count would decrease when a review was deleted but did not make it unfortunately.

# Perfomance and Validations

## Lighthouse
Logged in Lighthouse report:<br>
![Lighthouse report logged in](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/84e6850f-c2eb-4a65-87b2-89eb51457439)

Logged out Lighthouse report:<br>
![Lighthouse report logged out](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/48420c7f-a5dd-4b8b-ad8e-458df9ff1f07)


The performace could have imporeved if I had used the django-resized in models.py for images. And for the best practices I saw that the cookies created my result to be low. Nothing I could have done.

## W3C validator
All CSS files were validated and no errors or warnings were found.<br>
![CSS Validation](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/a2c58822-7028-4b1a-881c-a06472c68579)


## JXS validator
I used the ESLint website [ESLint](https://eslint.org/play/) and I got these errors 
![ESLint error](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/51c9bfaa-eebc-422b-896f-280f23764b71)
![ESLint error](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/7402648b-d676-4647-b96f-5afd01b799a1)
![ESLint error](https://github.com/Idehed/cityexplorer-frontend/assets/146822758/9973f11d-237d-445f-a15d-7f5dfb47dae8)

- It was not an ideal way to validate because it is bound to throw unused variable/undefined variable errors because of the nature of importing/exporting components and variables between the different files.
- I ignored the above error types and checked for syntax errors, and found the code to be clean.

# Responsiveness
All pages were tested to ensure responsiveness on screen sizes from 320px and upwards. It was tested in 4 browsers, 
- Chrome
- Edge
- Safari
- Firefox

No issues were found, it was fully responsive on all screen sizes.

[Back to Readme](README.md#testing)