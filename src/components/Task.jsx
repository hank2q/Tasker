import { FaTimes } from "react-icons/fa";

const Task = ({ task, handleDelete, toggleReminder }) => {
    let classes = "task";
    if (task.reminder) {
        classes += " reminder";
    } else {
        classes += " no-reminder";
    }
    return (
        <div className={classes} onDoubleClick={() => toggleReminder(task.id)}>
            <h3>
                {task.text}
                <FaTimes
                    style={{ color: "#ff1200", cursor: "pointer" }}
                    onClick={() => handleDelete(task)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;
