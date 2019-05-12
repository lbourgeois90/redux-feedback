import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import '../ReviewYourFeedback/ReviewYourFeedback.css'
import Header from '../Header/Header'
import {withRouter} from 'react-router-dom'


class ReviewYourFeedback extends Component {


  //function that will conditionally render header based on values in reducers
  headerDisplay= () => {
  if (this.props.reduxState.commentReducer.length === 0) {
    return (
      <div></div>
    )
  }
  else{
    return (
   <Header/>
    )
  }
}

  //function for submit button to post data to server as well as push to thankyou view
  submitHandle = (event) =>{
    event.preventDefault();
    this.props.postFeedback();
    this.props.history.push('/thankyou')

  }


  //function to conditionally render the incomplete button for when feedback isnt complete and to change to submit on completed feedback
  buttonDisplay = () => {
    console.log(this.props.reduxState.commentReducer);
    if (this.props.reduxState.commentReducer.length === 0) {
      return (<button className="btn"disabled>Incomplete</button>)
    }
    else{
      return (
      <button className="btn" onClick={this.submitHandle}>Submit</button>
      )
    }
  }

  render() {
    return (
      <section>
        {this.headerDisplay()}
        <div className="feedbackSection">
          <h2>Review Your Feedback:</h2>
          <table className="table table-borderless">
            <thead>
              <tr>
                <th>Feelings</th>
                <th>Understanding</th>
                <th>Support</th>
                <th>Additional Comments</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.reduxState.feelingReducer}</td>
                <td>{this.props.reduxState.understandingReducer}</td>
                <td>{this.props.reduxState.supportReducer}</td>
                <td>{this.props.reduxState.commentReducer}</td>
              </tr>
            </tbody>
          </table>
          {this.buttonDisplay()}
        </div>
        </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps )(withRouter(ReviewYourFeedback));