import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Rating from './Rating.js';
import Characteristics from './Characteristics.js';

const Component = styled.div`
border: solid blue 1px;
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr;
  gap: 45px 45px;
  grid-template-areas:
    ". .";
`;

const Ratings = styled.div`
display: flex;
flex-direction: column;
border: solid red 1px;
`;

const Reviews = styled.div`
display: flex;
flex-direction: column;
border: solid purple 1px;
`;

const Buttons = styled.div`
display: flex;
flex-flow: row wrap;
`;


class ReviewsAndRatings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ratings: {},
      totalRecommendedReviews: 0,
      totalNumReviews: 0,
      averageRating: 0,
      characteristics: {
        Size: {value: -1},
        Width: {value: -1},
        Comfort: {value: -1},
        Quality: {value: -1},
        Length: {value: -1},
        Fit: {value: -1}
      }
    }

  }

  componentDidMount() {
    fetch('/reviews/25190')
    .then(response => response.json())
    .then(data => console.log(data));

    fetch('/reviews/meta/25190')
    .then(response => response.json())
    .then(data => {
      console.log(data)

      let totalNumReviews = 0;
      let totalRatingValues = 0;

      for (const [key, value] of Object.entries(data.ratings)) {
        totalRatingValues = totalRatingValues +key*value;
        totalNumReviews = totalNumReviews + Number(value);
      }

      this.setState({
        ratings: data.ratings,
        totalNumReviews: String(totalNumReviews),
        totalRecommendedReviews: Number(data.recommended.true),
        averageRating: (Math.round((totalRatingValues/Number(totalNumReviews))*4)/4),
        characteristics: data.characteristics
      });
    });
  }

  render() {
    return (
      <Component>
        <h5>RATINGS AND REVIEWS</h5>
        <GridLayout>
          <Ratings>
            <Rating totalNumReviews={this.state.totalNumReviews} recommended={this.state.totalRecommendedReviews} ratings={this.state.ratings} averageRating={this.state.averageRating}/>
            <Characteristics characteristics={this.state.characteristics}/>
          </Ratings>
          <Reviews>
            <div>Review title with word-breakdown</div>
            <Buttons>
            <button>More Reviews</button>
            <button>Add A Review</button>
            </Buttons>
          </Reviews>
        </GridLayout>
      </Component>
    )
  }
}

export default ReviewsAndRatings;