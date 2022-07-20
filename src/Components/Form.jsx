import React from "react";
import { useState } from "react";
import { add_task, clear_tasks } from "./../redux/actions/actions";
import { connect } from "react-redux";

const Form = ({ add_task, clear_tasks }) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  return (
    <form>
      {/* title input */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control mb-2"
        placeholder="Enter Task"
      />

      {/* time input */}
      <input
        type="datetime-local"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="form-control"
      />

      <div className="buttons my-3">
        {/* add task button */}
        <button
          className="btn btn-primary mx-2"
          onClick={(e) => {
            e.preventDefault();
            add_task(title, time);
            setTime("");
            setTitle("");
          }}
        >
          Add Reminder
        </button>

        {/* clear tasks button */}
        <button
          className="btn btn-danger mx-2"
          onClick={(e) => {
            e.preventDefault();
            clear_tasks();
          }}
        >
          Clear Reminders
        </button>
      </div>
    </form>
  );
};

export default connect(null, { add_task, clear_tasks })(Form);
