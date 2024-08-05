import TaskList from "@/app/interfaces/components/TaskList";
import TaskForm from "@/app/interfaces/components/TaskForm";
import React, { useEffect } from "react";

const TaskPage = () => {
  const [tasks, setTasks] = React.useState<any>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    const fetchedTasks = [
      { id: 1, title: "Task 1", completed: false },
      { id: 2, title: "Task 2", completed: true },
      { id: 3, title: "Task 3", completed: false },
    ];
    setTasks(fetchedTasks);
  };

  const addTask = (title: any) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const onDone = (id: any) => {
    const updatedTasks = tasks.map((task: any) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId: any) => {
    const updatedTasks = tasks.filter((task: any) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1 className="text-4xl text-center">Simple Task Management App</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onDone={onDone} />
    </div>
  );
};

export default TaskPage;
