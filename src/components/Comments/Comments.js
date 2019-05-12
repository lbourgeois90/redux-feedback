import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import ReviewYourFeedback from '../ReviewYourFeedback/ReviewYourFeedback';
import '../HowAreYouFeeling/HowAreYouFeeling.css'
import Stepper from 'react-stepper-horizontal'
import Header from '../Header/Header'
import swal from '@sweetalert/with-react'



class Comments extends Component {
  state = {
    comment: '',
  }

  //function to handle change of radio buttons to get values from radio buttons
  handleChange = (event) => {
    console.log('in HandleChange');
    console.log(event.target.value);
    this.setState({
      comment: event.target.value
    })
    console.log(this.state.comment)
  }

  //function to handle click to add comment to comment reducer// has validation attached
  handleClick = (event) => {
    event.preventDefault();
    const action = {type: "ADD_COMMENT", payload:this.state.comment };
    if ( this.state.comment !== '') {
    this.props.dispatch(action);
    this.props.history.push('/review');
    }
    else{
      swal({
        title: "Error",
        text: "Please enter a comment before selecting next.",
        icon: "warning",
      })
    }
  }

  render() {
    return (
      <section>
        <Header/>
          <div>
              <Stepper steps={ [{title: 'Feeling'}, {title: 'Understanding'}, {title: 'Support'}, {title: 'Additional Feedback'}, {title: 'Submit Feedback'}] } activeStep={ 3 } activeColor= '#BC4123' defaultBarColor= '#BC4123' activeTitleColor= '#BC4123' defaultTitleColor= 'white' circleFontColor='#0B172A' className="stepper" completeColor="#463940" completeTitleColor="#463940" />
        </div>
        <div className="feedbackInputDiv">
          <h1>Any additional comments that you have?</h1>
        
        <form>
        <div className="form-group">
            <label  className="textAreaLabel" htmlFor="comments">Additional Comments</label>
            <textarea className="form-control" id="comment" rows="3" name="comment" onChange={this.handleChange}></textarea>
            <small id="textAreaHelp" className="form-text text-muted">You must enter in text to continue.</small>
        </div>
            <button className="btn btn-outline-dark btn-lg" name="next" onClick={this.handleClick}>Next</button>
        </form>
        </div>
  
      <ReviewYourFeedback/>
      </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps )(Comments);
