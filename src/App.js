import React, { useState } from 'react';
import './App.css';
import { List, Settings } from './components';
import randomatic from 'randomatic';

function App() {
  const [tab, setTab] = useState("all");
  const [color, setColor] = useState("black"); // black | red | blue
  const [items, setItems] = useState([]);

  // let activeTab = "all"; // all | undone | done | settings
  /* 
  item = {
    done: boolean,
    text: string,
    id: string
  }
  */

  function changeTab(target) {
    console.log(`change tab to: ${target}`);
    setTab(target);
  }

  function addToDo() {
    let newText = document.getElementById("newToDo").value
    if (!newText) return;
    const newToDo = { text: newText, done: false, id: randomatic('A0!', 8) };
    console.log("newToDo");
    console.log(newToDo);

    setItems([...items, newToDo]);

    // reset text area
    document.getElementById("newToDo").value = "";

    console.log("items:");
    console.log(items);
  }

  function clearAllItems() {
    setItems([])
  }

  const toggleItem = (newItem) => {
    let copy = [...items];
    let index = copy.findIndex((item) => newItem.id === item.id)
    copy[index] = newItem;
    setItems(copy);
  }

  function filteredItems() {
    switch (tab) {
      case "done":
        return items.filter((item) => item.done)
      case "undone":
        return items.filter((item) => !item.done)
      case "all":
      default:
        return items
    }
  }


  return (
    <div className="App">
      <header>
        <h1>My ToDo App</h1>
      </header>
      <div>
        {/* <div>text - id - done? (length: {items.length})</div> */}
        {
          /*
          // render all items for debugging
          items.map((item, i) =>
            <div key={item.id}>{item.text} - {item.id} - {item.done.toString()}</div>
          )
          */
        }
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px 10px", margin: "100px auto" }}>
        <label htmlFor="newToDo">New To Do Item:</label>
        <textarea id="newToDo" name="newToDo" placeholder="Type..."></textarea>
        <button onClick={addToDo}>Add</button>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px 10px", margin: "100px auto" }}>
        <div onClick={() => changeTab("all")} className="buttonDiv" style={{ backgroundColor: tab === "all" ? "gray" : "white" }}>All</div>
        <div onClick={() => changeTab("undone")} className="buttonDiv" style={{ backgroundColor: tab === "undone" ? "gray" : "white" }}>Undone</div>
        <div onClick={() => changeTab("done")} className="buttonDiv" style={{ backgroundColor: tab === "done" ? "gray" : "white" }}>Done</div>
        <div onClick={() => changeTab("settings")} className="buttonDiv" style={{ backgroundColor: tab === "settings" ? "gray" : "white" }}>Settings</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "100px auto" }}>
        {
          tab === "settings"
            ? <Settings handler={setColor} />
            : <List items={filteredItems(items)} color={color} toggle={toggleItem} />
        }
      </div>

      <button onClick={clearAllItems}>Clear To Dos</button>
    </div>
  );
}

export default App;
