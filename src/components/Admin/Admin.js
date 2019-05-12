import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from '@sweetalert/with-react';
import '../Admin/Admin.css'
import Header from '../Header/Header'



class Admin extends Component {

  //function to get feedback from server to display on DOM during initialization
  componentDidMount(){
    this.props.getFeedback();
  }

  //function to check validation of feedback before submit
  checkDelete = (event) =>{
    console.log(event.currentTarget.value);
    event.preventDefault();
    let feedbackId = event.currentTarget.value
    swal({
      title: "Delete Request",
      text: "Are you sure you want to delete this feedback?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("The feedback has been deleted", {
          icon: "success",
        });
        this.deleteValue(feedbackId);
      } else {
        swal("The feedback was not deleted.");
      }
    });
  }

  //function to call the delete axios request
  deleteValue = (feedbackId) => {
    this.props.deleteFeedback(feedbackId);
  }



  render() {
    console.log(this.props.feedbackList);
    return (
      <section>
        <Header/>
      <div>
          <table className="table">
            <thead>
              <tr>
                <th>Feeling</th>
                <th>Comprehension</th>
                <th>Support</th>
                <th>Comments</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.props.feedbackList.map( (item, i) =>
              <tr key={i}>
                <td>{item.feeling}</td>
                <td>{item.understanding}</td>
                <td>{item.support}</td>
                <td>{item.comments}</td>
                <td><button className="btn" onClick={this.checkDelete} value={item.id}>Delete</button></td>
              </tr>
              )}
            </tbody>
          </table>
      </div>
    </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps )(Admin);