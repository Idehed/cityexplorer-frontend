import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";

import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/Post.module.css";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";


const Guide = (props) => {
  const {
    owner,
    id,
    profile_id,
    profile_image,
    city,
    duration,
    cost,
    email,
    phone,
    reviews_count,
    average_rating,
    isProfilePage,
    showAll,
    setGuide,
    setReviews,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/reviews/${id}/`);
      setGuide((prevGuide) => ({
        results: [
          {
            ...prevGuide.results[0],
            reviews_count: prevGuide.results[0].reviews_count - 1,
          },
        ],
      }));

      setReviews((prevReviews) => ({
        ...prevReviews,
        results: prevReviews.results.filter((review) => review.id !== id),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Media className={styles.Post}>
      <Media.Body>
        {!isProfilePage && (
          <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} height={100} />
              {owner}
            </Link>
          </Media>
        )}
        <p className="text-center">
          City:
          {city}
        </p>
        <p className="text-center">
          Duration:
          {duration}
        </p>
        <p className="text-center">
          Cost: 
          {cost}
        </p>
        <p className="text-center">
          Email:
          {email}
        </p>
        <p className="text-center">
          Phone:
          {phone}
        </p>
        <p className="text-center">
          Rating:
          {" "}
          <Rating readonly initialValue={average_rating} size={25} />
        </p>
        <p>
          {reviews_count}
          {" "}
          reviews
        </p>
        {!is_owner && (
          <Button
            className={btnStyles.Button}
            onClick={() => history.push(`/reviews/${id}/create`)}
            aria-label="create-review"
          >
            Leave a review
          </Button>
        )}
        {showAll && (
          <Button
            className={btnStyles.Button}
            onClick={() => history.push(`/reviews/${id}`)}
            aria-label="view-reviews"
          >
            Guide Reviews
          </Button>
        )}
      </Media.Body>
        {is_owner && !showEditForm && (
        <MoreDropdown
        handleEdit={() => setShowEditForm(true)}
        handleDelete={handleDelete}
        />
         )}
         
      </Media>
        
  );
};

export default Guide;