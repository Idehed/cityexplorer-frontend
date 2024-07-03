import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import styles from "../../styles/GuideCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function GuideCreateForm() {
  useRedirect('loggedOut');
  const [errors, setErrors] = useState({});
  const currentUser = useCurrentUser();
  const id = currentUser?.profile_id;

  const [guideData, setGuideData] = useState({
    city: "",
    duration: "",
    cost: "",
    email: "",
    phone: "",
  });
  const { city, duration, cost, email, phone } = guideData;

  const history = useHistory();

  const handleChange = (event) => {
    setGuideData({
      ...guideData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('city', city);
    formData.append('duration', duration);
    formData.append('cost', cost);
    formData.append('email', email);
    formData.append('phone', phone);

    try {
        const { data } = await axiosReq.post("/guides/", formData);

        await axiosRes.put(`/profiles/${id}/`, { guideId: data.id });

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
        <Form.Label>City</Form.Label>
        <hr className={styles.hrguide}/>
        <Form.Control
          type="text"
          name="city"
          value={city}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.city?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Duration</Form.Label>
        <hr className={styles.hrguide}/>
        <Form.Control
          type="text"
          name="duration"
          value={duration}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.duration?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Cost per tour</Form.Label>
        <hr className={styles.hrguide}/>
        <Form.Control
          type="text"
          name="cost"
          value={cost}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.cost?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <hr className={styles.hrguide}/>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.email?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Contact number</Form.Label>
        <hr className={styles.hrguide}/>
        <Form.Control
          type="text"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.phone?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <div className="text-center">Create your Guide here</div>
      <hr className={styles.hrguide}/>
        <Container className={styles.Contentcreateguide}>{textFields}</Container>
    </Form>
  );
};

export default GuideCreateForm;