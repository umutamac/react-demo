
function Settings({ handler }) {
    console.log("Settings")

    function colorHandler(e) {
        let val = e.target.value;
        if(!val) return;
        console.log(val);
        handler(val);
    }

    return (
        <div>
            <label htmlFor="color" style={{ marginRight: "10px" }}>Choose color:</label>
            <select name="color" id="color" onChange={colorHandler}>
                <option value="">Select</option>
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
            </select>
        </div>
    );
}

export default Settings;
