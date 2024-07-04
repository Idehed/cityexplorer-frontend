import NavBar from './components/NavBar';
import styles from './App.module.css';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostPage from './pages/posts/PostPage';
import PostsPage from './pages/posts/PostsPage';
import { useCurrentUser } from './contexts/CurrentUserContext';
import PostEditForm from './pages/posts/PostEditForm';
import ProfilePage from './pages/profiles/ProfilePage';
import UsernameForm from './pages/profiles/UsernameForm';
import UserPasswordForm from './pages/profiles/UserPasswordForm';
import ProfileEditForm from './pages/profiles/ProfileEditForm';
import GuideCreateForm from './pages/guides/GuideCreateForm';
import GuidePage from './pages/guides/GuidePage';
import NotFound from './components/NotFound';
import ReviewCreateForm from './pages/reviews/ReviewCreateForm';


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <PostsPage  
            message="No results found. Adjust the search keyword."/>} />
          <Route exact path="/following" render={() => <PostsPage  
            message="No results found. Adjust the search keyword or follow a user."
            filter={`owner__followed__owner__profile=${profile_id}&`}/>} />
          <Route exact path="/liked" render={() => <PostsPage  
            message="No results found. Adjust the search keyword or like a post."
            filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}/>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/contact" render={() => <h1>Contact</h1>} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path="/profiles/:id/edit/username" render={() => <UsernameForm />} />
          <Route exact path="/profiles/:id/edit/password" render={() => <UserPasswordForm />} />
          <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />} />
          <Route exact path="/guides" render={() => <GuidePage />} />
          <Route exact path="/guides/create/" render={() => <GuideCreateForm />} />
          <Route exact path="/reviews/id:create/" render={() => <ReviewCreateForm />} />

          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;