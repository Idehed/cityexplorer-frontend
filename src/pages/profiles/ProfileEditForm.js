import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { axiosReq } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

const ProfileEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: "",
    content: "",
    image: "",
    facebook_link: "",
    instagram_link: "",
    x_link: "",
    youtube_link:""
  });
  const {
    name,
    content,
    image,
    facebook_link,
    instagram_link,
    x_link,
    youtube_link,
  } = profileData;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    let isMounted = true;

    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const {
            name,
            content,
            image,
            facebook_link,
            instagram_link,
            x_link,
            youtube_link,
          } = data;
          if (isMounted) {
            setProfileData({
              name,
              content,
              image,
              facebook_link,
              instagram_link,
              x_link,
              youtube_link,
            });
          }
        } catch (err) {
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("content", content);
    formData.append("facebook_link", facebook_link);
    formData.append("instagram_link", instagram_link);
    formData.append("x_link", x_link);
    formData.append("youtube_link", youtube_link);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      history.goBack();
    } catch (err) {
      // console.log(err);
      setErrors(err.response?.data);
    }
  };

  const textFields = (
    <>
      <Form.Group>
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as="textarea"
          value={content}
          onChange={handleChange}
          name="content"
          rows={7}
        />
      </Form.Group>

      <Form.Group>
            <Form.Label>Facebook Link</Form.Label>
            <Form.Control type="text" placeholder="Enter Facebook link" name="facebook_link"
                value={facebook_link}
                onChange={handleChange}/>
        </Form.Group>

        <Form.Group>
            <Form.Label>Instagram Link</Form.Label>
            <Form.Control type="text" placeholder="Enter Instagram link" name="instagram_link"
                value={instagram_link}
                onChange={handleChange}/>
        </Form.Group>

        <Form.Group>
            <Form.Label>X Link</Form.Label>
            <Form.Control type="text" placeholder="Enter X link" name="x_link"
                value={x_link}
                onChange={handleChange}/>
        </Form.Group>

        <Form.Group>
            <Form.Label>Youtube Link</Form.Label>
            <Form.Control type="text" placeholder="Enter Youtube link" name="youtube_link"
                value={youtube_link}
                onChange={handleChange}/>
        </Form.Group>

      {errors?.content?.map((message, idx) => (
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
        save
      </Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container className={appStyles.Content}>
            <Form.Group>
              {image && (
                <figure>
                  <Image src={image} fluid />
                </figure>
              )}
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Blue} btn my-auto`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>
              <Form.File
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      image: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
};

export default ProfileEditForm;