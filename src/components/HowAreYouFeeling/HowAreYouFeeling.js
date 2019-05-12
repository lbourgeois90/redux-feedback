import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import ReviewYourFeedback from '../ReviewYourFeedback/ReviewYourFeedback'
import Stepper from 'react-stepper-horizontal'
import '../HowAreYouFeeling/HowAreYouFeeling.css'
import Header from '../Header/Header'
import swal from '@sweetalert/with-react'



class HowAreYouFeeling extends Component {

  state = {
    feeling: '',
  }

  
    //function to handle change of radio buttons to get values from radio buttons
  handleChange = (event) => {
    console.log('in HandleChange');
    console.log(event.currentTarget.value);
    this.setState({
      feeling: event.currentTarget.value
    })
    console.log(this.state.feeling)
  }

  //function to handle click to add comment to comment reducer// has validation attached
  handleClick = (event) => {
    event.preventDefault();
    const action = {type: "ADD_FEELINGS", payload:this.state.feeling };
    if( this.state.feeling !== ''){
      this.props.dispatch(action);
      this.props.history.push('/understanding');
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
    console.log(this.state.feeling)
    return (
      <section>
        <Header/>
        <div>
      <Stepper steps={ [{title: 'Feeling'}, {title: 'Understanding'}, {title: 'Support'}, {title: 'Additional Feedback'}, {title: 'Submit Feedback'}] } activeStep={ 0 } activeColor= '#BC4123' defaultBarColor= '#BC4123' activeTitleColor= '#BC4123' defaultTitleColor= 'white' circleFontColor='#0B172A' className="stepper" completeColor="#463940" completeTitleColor="#463940" />
        </div>
        <div className="feedbackInputDiv">
          <h1>How Are You Feeling Today?</h1>
        
          <form>
          <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio0" value="0"
              checked={this.state.feeling === '0'}
              onChange={this.handleChange}/>
              <label className="form-check-label" htmlFor="inlineRadio1">I'm very stressed.</label>
            </div>
          <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1"
              checked={this.state.feeling === '1'}
              onChange={this.handleChange}/>
              <label className="form-check-label" htmlFor="inlineRadio1">1</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2"
              checked={this.state.feeling === '2'}
              onChange={this.handleChange}/>
              <label className="form-check-label" htmlFor="inlineRadio2">2</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3"
               checked={this.state.feeling === '3'}
               onChange={this.handleChange}/>
              <label className="form-check-label" htmlFor="inlineRadio3">3</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4"
              checked={this.state.feeling === '4'}
              onChange={this.handleChange}/>
              <label className="form-check-label" htmlFor="inlineRadio4">4</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="5"
               checked={this.state.feeling === '5'} 
               onChange={this.handleChange}/>
              <label className="form-check-label" htmlFor="inlineRadio5">I'm feeling great!</label>
            </div>
            <div>
            <button className="btn btn-outline-dark btn-lg nextbt" name="next" onClick={this.handleClick}>Next</button>
            </div>
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

export default connect( mapReduxStateToProps )(HowAreYouFeeling);