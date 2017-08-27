import React from 'react'
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class ContactPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      course: { title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }
  onClickSave(){
    // alert(`saving ${this.state.course.title }`);
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }
  courseRow(course, index){
    return
      <div key={index}>
        {course.title}
      </div>;
  }
  courseItem(course){
    return <div>{course.title}</div>
  }
  allCourses(props){
    const numbers = props.numbers;
    const courseItems = numbers.map((number)=>
      <courseItem key = {number.toString()}
        value={number} />
        );
    return ( <ul> {courseItems} </ul> );
    }
    // <allCourses numbers={this.props.courses}/>
  // }

              // {this.props.courses.map((course, index) =>
              //   <div key={index}>{course.title}</div>
              // )}
  render(){
    return(
      <main className="page-content">
        <section className="section-sm-top-133 text-center section-top-31">
          <div className="shell text-center">
            <h5 className="tt-u">Contact</h5>
            <ol className="breadcrumb">
              <li><Link to="/" activeClassName="active">Home</Link></li>
              <li>About</li>
            </ol>
          </div>
        </section>
        <h2>start</h2>
              
              {this.props.courses.map((course, index) =>
                <div key={index}>{course.title}</div>
              )}
        <h2>finish</h2>
        <section className="section-sm-top-133 border-bottom">
          <div className="shell">
            <h2 className="text-center divider">Contact us</h2>
              <div className="range">
                <div className="cell-sm-4">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">Name:</label>
                    <input  onChange={this.onTitleChange}
                            value={this.state.course.title}
                            id="contact-name" type="text" name="name" 
                            data-constraints="@Required" 
                            className="form-control"/>
                  </div>
                </div>
                <div className="cell-sm-4">
                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">E-Mail:</label>
                    <input id="contact-email" type="email" name="email" data-constraints="@Required @Email" className="form-control"/>
                  </div>
                </div>
                <div className="cell-sm-4">
                  <div className="form-group">
                    <label htmlFor="contact-phone" className="form-label">Phone:</label>
                    <input id="contact-phone" type="text" name="phone" data-constraints="@Required @Numeric" className="form-control"/>
                  </div>
                </div>
                <div className="cell-xs-12 offset-top-30">
                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">Message:</label>
                    <textarea id="contact-message" name="message" data-constraints="@Required" className="form-control"></textarea>
                  </div>
                </div>
              </div>
              <div className="text-center offset-top-30">
                <button onClick={this.onClickSave} type="submit" className="btn btn-transparent btn-sm">Send</button>
                <button type="reset" className="btn btn-transparent btn-sm">Clear</button>
              </div>
          </div>
        </section>
      </main>     );
  }
}
// ContactPage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   courses: PropTypes.array.isRequired
// };

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses // from rootReducer
  };
}
// export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
export default connect(mapStateToProps)(ContactPage);