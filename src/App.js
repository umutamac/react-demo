import React, { useState } from 'react';
import './App.css';
import List from './components/List.js';
import randomatic from 'randomatic';

function App() {
  const [items, setItems] = useState([]);
  // const [newItem, setNewItem] = useState("");
  const [tab, setTab] = useState("all")
  const [color, setColor] = useState("black"); // black | red | blue

  // let activeTab = "all"; // all | undone | done | settings
  /* 
  item = {
    done: boolean,
    text: string,
    id: string
  }
  */

  function changeTab(target) {
    console.log(`change tab to: ${target}`)
    setTab(target);
    //activeTab = target;
  }

  function colorHandler(e) {
    setColor(e.target.value);
  }

  function addToDo() {
    let newText = document.getElementById("newToDo").value
    if (!newText) return;
    const newToDo = { text: newText, done: false, id: randomatic('A0!', 8) };
    console.log(newToDo);

    setItems([...items, newToDo]);

    // reset text area
    document.getElementById("newToDo").value = "";
    // setNewItem("");
    console.log("items:")
    console.log(items)
  }

  // function addToDo() {
  //   if (newItem === "") return;
  //   const newToDo = { text: newItem, done: false, id: randomatic('A0!', 8) };

  //   console.log(newToDo);
  //   items.push(newToDo);
  //   //setItems(items);
    
  //   // reset text area
  //   document.getElementById("newToDo").value = "";
  //   setNewItem("");
  // }

 

  // const toggleItem = (id) => {
  //   let targetItem = items.find(item => id === item.id);
  //   targetItem.done = targetItem.done === false ? true : false

  // }

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

      <div>
        <button onClick={() => changeTab("all")}>All</button>
        <button onClick={() => changeTab("undone")}>Undone</button>
        <button onClick={() => changeTab("done")}>Done</button>
        <button onClick={() => changeTab("settings")}>Settings</button>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "100px auto" }}>
        {
          tab === "settings" ?
            <div>
              <label htmlFor="color" style={{ marginRight: "10px" }}>Choose color:</label>
              <select name="color" id="color" onChange={colorHandler}>
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
              </select>
            </div>
            : <List items={filteredItems(items)} color={color} />
        }
      </div>
    </div>
  );
}

export default App;
