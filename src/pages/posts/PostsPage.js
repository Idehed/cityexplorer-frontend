import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Post from "./Post";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/page-not-found.webp";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import logo from "../../assets/architecture-and-city.webp";
import logo1 from "../../assets/social-media.webp"
import logo2 from "../../assets/social-media (1).webp"

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
        fetchPosts();
    }, 1000)
    return () => {
        clearTimeout(timer)
    }

  }, [filter, query, pathname, currentUser]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
      {pathname === "/" && (
        <>
        <h2 className= "text-center">
          Explore new cities here <img src={logo} alt="logo" height="40"/>
        </h2>
        <hr width="80%"/>
        </>
      )}
      {pathname === "/following" && (
        <>
        <h2 className="text-center">
          Your followed user posts <img src={logo1} alt="logo" height="40"/>
        </h2>
        <hr width="80%"/>
        </>
      )}
      {pathname === "/liked" && (
        <>
        <h2 className="text-center">
          Your liked posts <img src={logo2} alt="logo" height="40"/>
        </h2>
        <hr width="80%"/>
        </>
      )}
        <PopularProfiles mobile />
        <i
          className={`fa-solid fa-magnifying-glass-arrow-right ${styles.SearchIcon}`}
        />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts by profilename or city"
          />
        </Form>
        

        {hasLoaded ? (
          <>
            {posts.results.length ? (
                <InfiniteScroll
                children={
                  posts.results.map((post) => (
                      <Post key={post.id} {...post} setPosts={setPosts} />
                    ))
                }
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
                 />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostsPage;