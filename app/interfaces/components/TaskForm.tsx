import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const TaskForm = ({ onSubmit }: any) => {
  const [title, setTitle] = useState<any>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="py-10 text-center space-y-4">
      <Input width={2} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add Task" />
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TaskForm;
