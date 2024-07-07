import React from "react";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { DropdownReview } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";

const Review = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    rating,
    setReviews,
    setGuide,
    id,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

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
      console.log(err);
    }
  };

  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          <p>
            Rating:{' '}
            <Rating readonly initialValue={rating} size={25}/>
          </p>
          <p>
            Review:{' '}
            {content}
          </p>
        </Media.Body>
        {is_owner && (
          <DropdownReview
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
};

export default Review;