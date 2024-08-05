import { Button, Input } from "@material-tailwind/react";
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
      <Input variant="outlined" width={2} value={title} onChange={(e) => setTitle(e.target.value)} label="Add New Task" crossOrigin="" />
      <Button type="submit" placeholder="Add" size="md">
        Add
      </Button>
    </form>
  );
};

export default TaskForm;
