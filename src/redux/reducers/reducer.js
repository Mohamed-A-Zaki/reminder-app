import { ADD_TASK, CLREAR_TASKS, REMOVE_TASK } from "./../types/types";
// import data from "../../json/data.json";

/**
 *
 * @param {*} tasks
 * @param {*} action
 * @returns
 */

/**
  - reducer function run first
  - it run before App.jsx
 */

const reducer = (tasks = [], action) => {
  // add data from json file to localStorage
  // localStorage.setItem("tasks", JSON.stringify(data));

  // get data from localStorage and add it to tasks
  tasks = JSON.parse(localStorage.getItem("tasks")) || tasks;

  switch (action.type) {
    case ADD_TASK:
      add_task();
      add_tasks_to_localStorage();
      return tasks;

    case REMOVE_TASK:
      remove_task();
      add_tasks_to_localStorage();
      return tasks;

    case CLREAR_TASKS:
      clear_tasks();
      add_tasks_to_localStorage();
      return tasks;

    default:
      add_tasks_to_localStorage();
      return tasks;
  }

  // function to add task
  function add_task() {
    // destructure action object
    const { title, time } = action;

    // if empty values
    if (title === "" || time === "") {
      alert("empty value");
    } else {
      // if repeated value
      if (tasks.findIndex((ele) => ele.title === title) !== -1) {
        alert("repeated value");
      } else {
        // create new task object
        const new_task = {
          id: tasks.length + 1,
          title,
          time,
        };
        // add task object to tasks
        tasks = [...tasks, new_task];
      }
    }
  }

  // function to remove task
  function remove_task() {
    tasks = tasks.filter(({ id }) => id !== action.id);
  }

  // function to clear tasks
  function clear_tasks() {
    tasks = [];
  }

  // function to add tasks to localStorage
  function add_tasks_to_localStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
};

export default reducer;
