import React from "react";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import Profile from "./Profile";
import { useProfileData } from "../../contexts/ProfileDataContext";
import logo from "../../assets/people.webp";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const PopularProfiles = ({ mobile }) => {
  const {popularProfiles} = useProfileData();
  const currentUser = useCurrentUser();

  return (
    <Container className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}>
      {popularProfiles.results.length ? (
        <>
          <p className="text-center">More profiles <img src={logo} alt="logo" height="30"/></p>
          <hr/>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularProfiles.results.slice(0, 4).map((profile) => (
            <Profile key={profile.id}  profile={profile} mobile />
          ))}
            </div>
          ) : (
            popularProfiles.results.map((profile) => (
              <Profile key={profile.id}  profile={profile} />
            ))
          )}
           { currentUser ? 
           <p></p>
            :
            <> 
            <hr/> 
            <p className="text-center">Sign in to follow profiles</p>
            </>}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;