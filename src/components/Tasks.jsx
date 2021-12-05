import React, { useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import dateFnsFormat from "date-fns/format";

const FORMAT = "dd/MM/yyyy";
function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

const AddTask = ({ onCancel, onAddTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState(null);
  return (
    <div className="add-task-dialog">
      <input value={task} onChange={(event) => setTask(event.target.value)} />
      <div className="add-task-actions-container">
        <div className="btns-container">
          <button
            className="add-btn"
            onClick={() => {
              onAddTask(task);
              onCancel();
              setTask("");
            }}
          >
            Add Task
          </button>
          <button
            className="cancel-btn"
            onClick={() => {
              onCancel();
              setTask("");
            }}
          >
            Cancel
          </button>
        </div>
        <div className="icon-container">
          <DayPickerInput
            onDayChange={(day) => setDate(day)}
            formatDate={formatDate}
            format={FORMAT}
            dayPickerProps={{
              modifiers: { disabled: [{ before: new Date() }] },
            }}
            placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
          />
        </div>
      </div>
    </div>
  );
};

const Tasks = () => {
  const [showAddTask, setshowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addNewTask = (text) => {
    setTasks((prevState) => [...prevState, text]);
  };
  return (
    <div className="tasks">
      <h1>Inbox</h1>
      <div
        className="add-task-btn"
        onClick={() => setshowAddTask((prevState) => !prevState)}
      >
        <span className="plus">+</span>
        <span className="add-task-text">Add Task</span>
      </div>
      {showAddTask && (
        <AddTask
          onAddTask={addNewTask}
          onCancel={() => setshowAddTask(false)}
        />
      )}
      {tasks.length > 0 ? (
        tasks.map((task) => <p>{task}</p>)
      ) : (
        <p>No tasks yet</p>
      )}
    </div>
  );
};

export default Tasks;
