import { useState } from "react";
import "./App.css";

const arr = [
  { id: Date.now(), value: "business", isCompleted: false },
  { id: Date.now() + 1, value: "study", isCompleted: false },
  { id: Date.now() + 2, value: "project", isCompleted: false },
];
function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(arr);

  function changeItem(id) {
    // setTaskList((taskList) =>
    //   taskList.map((item) =>
    //     item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    //   )
    // );

    setTaskList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  }

  function removeItem(id) {
    console.log(id);
    // const newArr = [...taskList];
    // newArr.filter((item) => item.id !== id);
    setTaskList(taskList.filter((item) => item.id !== id));
    console.log(taskList);
  }

  function addTask() {
    console.log("Adding task");
    if (!task) return;
    setTaskList((taskList) => [
      ...taskList,
      {
        id: Date.now(),
        value: task,
        isCompleted: false,
      },
    ]);
    setTask("");
  }

  return (
    <div className="App">
      <h3>This is toDO List</h3>
      <input
        style={{
          width: "50%",
          height: "10px",
          padding: "12px 20px",
          margin: "8px 0",
          boxSizing: "border-box",
        }}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="your task.."
      />
      <button onClick={addTask}>Add</button>
      <List
        removeItem={removeItem}
        taskList={taskList}
        toggleItem={changeItem}
      />
    </div>
  );
}

function List({ removeItem, taskList, toggleItem }) {
  return (
    <ul style={{ listStyle: "none" }}>
      {taskList.map((list) => (
        <li key={list.id}>
          <input type="checkbox" onChange={() => toggleItem(list.id)}></input>
          <span
            style={list.isCompleted ? { textDecoration: "line-through" } : {}}
          >
            {list.value}
          </span>
          <button
            sytle={{ padding: 0, cursor: "pointer" }}
            onClick={() => removeItem(list.id)}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default App;
