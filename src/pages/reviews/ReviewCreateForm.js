import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import styles from "../../styles/GuideCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router";
import { Rating } from "react-simple-star-rating";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

const ReviewCreateForm = () => {
  useRedirect('loggedOut');
  const [errors, setErrors] = useState({});
  const { id } = useParams();

  const [reviewData, setReviewData] = useState({
    guideId: id,
    content: "",
  });
  const { guideId, content } = reviewData;

  const history = useHistory();

  const [rating, setRating] = useState(0); 

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate / 20);
  };

  const handleChange = (event) => {
    setReviewData({
      ...reviewData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('guide', guideId);
    formData.append('rating', rating);
    formData.append('content', content);

    try {
        await axiosReq.post("/reviews/", formData);
        history.goBack();
      } catch (err) {
        // console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
        }
      }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
      <Form.Label>Rate here:</Form.Label>
      <Rating 
       onClick={handleRating}
       transition
       fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Write your review here!</Form.Label>
        <hr className={styles.hrguide}/>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Red}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Save
      </Button>
    </div>
  );

  return (
    <Form className="mt-4" onSubmit={handleSubmit}>
        <Container className={styles.Contentcreateguide}>{textFields}</Container>
    </Form>
  );
};

export default ReviewCreateForm;