import React, { useState, useEffect } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PopularProfiles from "../profiles/PopularProfiles";
import { Container, Form } from "react-bootstrap";
import appStyles from "../../App.module.css"
import { useLocation } from "react-router";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { fetchMoreData } from "../../utils/utils";
import Asset from "../../components/Asset";
import styles from "../../styles/PostsPage.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import NoResults from "../../assets/no-results.png";
import Guide from "./Guide";

const GuidePage = ({ message, filter = "" }) => {
    const [guides, setGuides] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const currentUser = useCurrentUser();

    const [query, setQuery] = useState("");
  
    useEffect(() => {
        const fetchGuides = async () => {
          try {
            const { data } = await axiosReq.get(`/guides/?${filter}search=${query}`);
            setGuides(data);
            setHasLoaded(true);
          } catch (err) {
            console.log(err);
          }
        };
    
        setHasLoaded(false);
        const timer = setTimeout(() => {
          fetchGuides();
        }, 1000);
    
        return () => {
          clearTimeout(timer);
        };
      }, [filter, query, pathname, currentUser]);
    
      return (
        <Row className="h-100 d-flex justify-content-center">
          <Col className="py-2 p-0 p-lg-2" lg={8}>
            <p className="text-center">More profiles</p>
            <PopularProfiles />
            <i className={`fas fa-search ${styles.SearchIcon}`} />
            <Form
              className={styles.SearchBar}
              onSubmit={(event) => event.preventDefault()}
            >
              <Form.Control
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                className="mr-sm-2"
                placeholder="Search guides by name or city"
              />
            </Form>
    
            {hasLoaded ? (
              <>
                <h1>Guides</h1>
                {guides.results.length ? (
                  <InfiniteScroll
                    children={guides.results.map((guide) => (
                      <Guide key={guide.id} {...guide} showAll />
                    ))}
                    dataLength={guides.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!guides.next}
                    next={() => fetchMoreData(guides, setGuides)}
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
        </Row>
      );
    };

export default GuidePage;