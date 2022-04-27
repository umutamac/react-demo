// import logo from './logo.svg';
// import './List.css';

function List({ items, color, toggle }) {
    console.log("List")
    //console.log(items)

    function toggleHandler(index) {
        console.log(index)

        let toggledItem = {
            text: items[index].text,
            id: items[index].id,
            done: !items[index].done
        }
        toggle(toggledItem);
    }

    return (
        <div>
            {
                items.length === 0
                    ? <span><i>Nothing here...</i></span>
                    : items.map((item, i) =>
                        <div key={i} style={{ display: "flex", alignItems: "center", color: color }}>
                            {/* <input type="checkbox" checked={item.done || undefined} /> */}
                            <div onClick={() => toggleHandler(i)} style={{ cursor: "pointer" }}>{item.done ? <span>&#9745;</span> : <span>&#9744;</span>}</div>

                            <span style={{ marginLeft: "10px" }} >{item.text}</span>
                        </div>
                    )
            }
        </div>
    );
}

export default List;
