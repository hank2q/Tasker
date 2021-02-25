import { useState } from "react";

const AddTask = ({ handleAdd }) => {
    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const [reminder, setReminder] = useState(false);
    const addTask = (e) => {
        e.preventDefault();
        if (!text) {
            alert("Add text to task");
            return;
        }
        handleAdd({ text: text, day: date, reminder: reminder });
        setText("");
        setDate("");
        setReminder(false);
    };
    return (
        <form className="add-form" onSubmit={addTask}>
            <div className="form-control">
                <label htmlFor="text">Task</label>
                <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Task to do"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="date">Date and Time</label>
                <input
                    type="text"
                    id="date"
                    name="date"
                    placeholder="date and time"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="reminder">Set Reminder</label>
                <input
                    type="checkbox"
                    name="reminder"
                    id="reminder"
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" value="save" className="btn btn-block" />
        </form>
    );
};

export default AddTask;
