// import logo from './logo.svg';
// import './List.css';

function List({ items, color }) {
    console.log("List")
    //console.log(items)
    return (
        <div>
            {
                items.length === 0
                    ? <span><i>Nothing here...</i></span>
                    : items.map((item, i) =>
                        <div key={i} style={{ display: "flex", alignItems: "center", color: color }}>
                            <input type="checkbox" checked={item.done || undefined} style={{ marginRight: "10px" }} />
                            <span>{item.text}</span>
                        </div>
                    )
            }
        </div>
    );
}

export default List;
