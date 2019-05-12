import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import ReviewYourFeedback from '../ReviewYourFeedback/ReviewYourFeedback'
import Stepper from 'react-stepper-horizontal'
import Header from '../Header/Header'
import swal from '@sweetalert/with-react'

class Support extends Component {
  state = {
    support: '',
  }

    //function to handle change of radio buttons to get values from radio buttons
  handleChange = (event) => {
    console.log('in HandleChange');
    console.log(event.target.value);
    this.setState({
      support: event.target.value
    })
    console.log(this.state.support)
  }

  //function to handle click to add comment to comment reducer// has validation attached
  handleClick = (event) => {
    event.preventDefault();
    const action = {type: "ADD_SUPPORT", payload:this.state.support };
    if (this.state.support !== ''){
    this.props.dispatch(action);
    this.props.history.push('/comments');
    }
    else{
      swal({
        title: "Error",
        text: "Please choose an answer before selecting next.",
        icon: "warning",
      })
    }
  }


  render() {
    return (
      <section>
        <Header/>
        <div>
      <Stepper steps={ [{title: 'Feeling'}, {title: 'Understanding'}, {title: 'Support'}, {title: 'Additional Feedback'}, {title: 'Submit Feedback'}] } activeStep={ 2 } activeColor= '#BC4123' defaultBarColor= '#BC4123' activeTitleColor= '#BC4123' defaultTitleColor= 'white' circleFontColor='#0B172A' className="stepper" completeColor="#463940" completeTitleColor="#463940" />
        </div>
        <div className="feedbackInputDiv">
          <h1>How well are you being supported?</h1>
        
          <form>
          <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio0" value="0"
              checked={this.state.support === '0'}
              onChange={this.handleChange}/>
              <label className="form-check-label" htmlFor="inlineRadio1">I feel abandonded.</label>
            </div>
          <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1"
              checked={this.state.support === '1'}
              onChange={this.handleChange}/>
              <label className="form-check-label" htmlFor="inlineRadio1">1</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2"
              checked={this.state.support === '2'}
              onChange={this.handleChange}/>
              <label className="form-check-label" htmlFor="inlineRadio2">2</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3"
               checked={this.state.support === '3'}
               onChange={this.handleChange}/>
              <label className="form-check-label" htmlFor="inlineRadio3">3</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4"
               checked={this.state.support === '4'}
               onChange={this.handleChange}/>
              <label className="form-check-label" htmlFor="inlineRadio4">4</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="5"
               checked={this.state.support === '5'} 
               onChange={this.handleChange}/>
              <label className="form-check-label" htmlFor="inlineRadio5">I feel supported!</label>
            </div>
            <button className="btn btn-outline-dark btn-lg nextbt" name="next" onClick={this.handleClick}>Next</button>
            </form>
          </div>
          <hr/>
          <div>
          <ReviewYourFeedback/>
          </div>
        </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps )(Support);
