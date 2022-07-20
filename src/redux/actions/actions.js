import { ADD_TASK, CLREAR_TASKS, REMOVE_TASK } from "./../types/types";

export const add_task = (title, time) => ({
  type: ADD_TASK,
  title,
  time,
});

export const remove_task = (id) => ({
  type: REMOVE_TASK,
  id,
});

export const clear_tasks = () => ({
  type: CLREAR_TASKS,
});
