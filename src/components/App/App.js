import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import '../App/App.css';
import ReviewYourFeedback from '../ReviewYourFeedback/ReviewYourFeedback'
import HowAreYouFeeling from '../HowAreYouFeeling/HowAreYouFeeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';



class App extends Component {

  state = {
    feedbackList: [],
  }

  //axios request to server to post feedback to database
  postFeedback = () => {
    console.log('in postFeedback');
    axios({
      method: 'POST',
      url: '/feedback',
      data: {
        feeling: this.props.reduxState.feelingReducer,
        understanding: this.props.reduxState.understandingReducer,
        support: this.props.reduxState.supportReducer,
        comments: this.props.reduxState.commentReducer,
      }
    })
    .then( (response) => {
      console.log('in response')
      const action = {type: 'EMPTY'};
      this.props.dispatch(action);
      this.getFeedback();
    })
    .catch( (error) => {
      console.log('ERROR in POST', error);
      alert(`Sorry! Unable to add your feedback. Try again later.`)
    })
  }

  //axios request to the server to get feedback from the database
  getFeedback = () => {
    console.log('in getFeedback');
    axios({
      method: "GET",
      url: '/feedback'
    })
    .then( (response) => {
      console.log('Response Data', response.data);
      this.setState({
        feedbackList: response.data
      })
    })
    .catch( (error) => {
      console.log('ERROR in GET', error);
      alert(`Sorry! Unable to get feedback. Try again later.`);
    })
  }

  //axios request to the server to delete feedback from the database
  deleteFeedback = (feedbackId) =>{
    axios({
        method: 'DELETE',
        url: `/feedback/${feedbackId}`,
        data: feedbackId, 
    })
    .then(response =>{
        console.log(response);
        this.getFeedback();
    })
    .catch(error=>{
        console.log('ERROR in DELETE', error);
        alert('Sorry! There was an error deleting the feedback! Try again');   
    })
    }




  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={HowAreYouFeeling} />
          <Route path='/understanding' component={Understanding} />
          <Route path='/support' component={Support} />
          <Route path='/comments' component={Comments} />
          <Route path='/thankyou' component={ThankYou} />
          <Route path='/admin' render = {(props) => <Admin {...props} feedbackList={this.state.feedbackList} getFeedback={this.getFeedback} deleteFeedback={this.deleteFeedback}/>}/>
          <Route path='/review' render = {(props) => <ReviewYourFeedback {...props} postFeedback={this.postFeedback}/>}/>
          <br/>
        </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps )(App);
