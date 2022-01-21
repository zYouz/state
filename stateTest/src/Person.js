import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        intervall: null,
        timer: 0,
      };
    
  }
  componentDidMount = () => {
    console.log("run componentDidMount ");

    this.setState({
      intervall: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  };
  componentWillUnmount = () => {
    console.log("run componentWillUnmount ");
    clearInterval(this.state.intervall);
  };

  render() {
    console.log("run render");
    return (
      <div className="card" style={myStyle}>
        <h3 className="card-header" style={{ color: "blue" }}>
          {this.props.Person.fullNAME}
        </h3>
        <div className="card-body">
          <h5 className="card-title">{this.props.Person.bio}</h5>
          <span>{this.props.children}</span>
          <p className="card-text">{this.props.Person.profession}</p>
        </div>
        {this.state.timer}
      </div>
    );
  }
}
const myStyle = { width: "50vw", marginLeft: 300 };
export default Person;