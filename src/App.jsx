import "./App.css";

import { connect } from "react-redux";

import Form from "./Components/Form";
import Heading from "./Components/Heading";
import Tasks from "./Components/Tasks";

const App = (props) => {
  const empty_div = (
    <div className="alert bg-danger text-white">No tasks ...</div>
  );

  return (
    <div className="App text-center bg-light p-5 border rounded position-absolute top-50 start-50 translate-middle">
      <Heading />
      <Form />
      {props.tasks.length === 0 ? empty_div : <Tasks />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state,
});

export default connect(mapStateToProps)(App);
