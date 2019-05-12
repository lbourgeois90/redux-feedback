import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import '../ThankYou/ThankYou.css'




class ThankYou extends Component {

  handleClick = () => {
    this.props.history.push('/');
  }


  render() {
    return (
      <div className="thankYouDiv">
          <img src="https://i.dlpng.com/static/png/37506_thumb.png" width="40%" height="25%" alt="ThankYou"/>
           <button className="btn btn-outline btn-lg" onClick={this.handleClick}>Leave New Feedback</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps )(ThankYou);
