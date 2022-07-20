import React from "react";
import { connect } from "react-redux";
import { remove_task } from "./../redux/actions/actions";

const Tasks = ({ tasks, remove_task }) => {
  return (
    <div className="tasks">
      {tasks.map(({ id, title, time }) => {
        return (
          <div
            key={id}
            className="task bg-white p-3 my-2 border rounded d-flex justify-content-between align-items-center"
          >
            <div className="content text-start">
              <div className="title">{title}</div>
              <div className="time">{time}</div>
            </div>

            <div className="remove">
              <button
                className="btn btn-danger"
                onClick={() => remove_task( id )}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state,
});

const mapDispatchToProps = { remove_task };

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
