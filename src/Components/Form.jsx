import React, { useState } from "react";

import { add_task, clear_tasks } from "./../redux/actions/actions";
import { connect } from "react-redux";

// import datepicker
import DatePicker from "react-datepicker";

// https://reactdatepicker.com/

const Form = ({ add_task, clear_tasks }) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState(new Date());

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
      <DatePicker
        className="form-control"
        selected={time}
        showTimeSelect
        onChange={(value) => setTime(value)}
        dateFormat="Pp"
        // withPortal
      />

      <div className="buttons my-3">
        {/* add task button */}
        <button
          className="btn btn-primary mx-2"
          onClick={(e) => {
            e.preventDefault();
            add_task(title, time);
            setTime(new Date());
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
