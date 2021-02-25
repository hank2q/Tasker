import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
    const [showForm, setShowForm] = useState(false);
    const [tasks, setTasks] = useState([]);

    const deleteTask = (task) => {
        let newtasks = tasks.filter((t) => t.id !== task.id);
        setTasks(newtasks);
    };

    const toggleReminder = (taskId) => {
        let newTasks = tasks.map((t) => {
            if (t.id === taskId) {
                t.reminder = !t.reminder;
            }
            return t;
        });
        setTasks(newTasks);
    };

    const addTask = (task) => {
        let maxId = 0;
        tasks.forEach((task) => {
            if (task.id >= maxId) {
                maxId++;
            }
        });
        task.id = maxId + 1;
        setTasks([...tasks, task]);
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="container">
            <Header btnText={showForm} toggleAddForm={toggleForm} />
            {showForm && <AddTask handleAdd={addTask} />}
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    handleDelete={deleteTask}
                    toggleReminder={toggleReminder}
                />
            ) : (
                <p>No tasks available</p>
            )}
        </div>
    );
}

export default App;
