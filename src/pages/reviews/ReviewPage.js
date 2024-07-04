import React, { useState, useEffect } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";


import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { fetchMoreData } from "../../utils/utils";
import Asset from "../../components/Asset";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import NoResults from "../../assets/no-results.png";

import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom";
import Guide from "../guides/Guide";
import Review from "./Review";

const ReviewPage = () => {
    const [reviews, setReviews] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const currentUser = useCurrentUser();
    const { id } = useParams();

    const [guideData, setGuideData] = useState(null);
  
    useEffect(() => {
        const fetchReviews = async () => {
          try {
            const { data } = await axiosReq.get(`/reviews/?guide=${id}`);
            setReviews(data);
            setHasLoaded(true);
          } catch (err) {
            // console.log(err);
          }
        };

        const fetchGuide = async () => {
            try {
              const { data } = await axiosReq.get(`/guides/${id}`);
              setGuideData(data);
            } catch (err) {
              // console.log(err);
            }
          };
    
        setHasLoaded(false);
        fetchGuide();
        fetchReviews();
      }, [pathname, currentUser, id]);
    
      return (
        <Row className="h-100 d-flex justify-content-center">
          <Col className="py-2 p-0 p-lg-2" lg={8}>
            <p className="text-center">Reviews</p>
    
            <Guide {...guideData} isProfilePage={false} />
    
            {hasLoaded ? (
              <>
    
                {reviews.results.length ? (
                  <InfiniteScroll
                    children={reviews.results.map((guide) => (
                      <Review key={guide.id} {...guide} isProfilePage={false} />
                    ))}
                    dataLength={reviews.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!reviews.next}
                    next={() => fetchMoreData(reviews, setReviews)}
                  />
                ) : (
                  <Container className={appStyles.Content}>
                    <Asset src={NoResults} message= "No reviews yet..." />
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

export default ReviewPage;