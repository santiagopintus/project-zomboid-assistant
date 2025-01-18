"use client";
import React, { useState } from "react";
import trash from "@/icons/trash.svg";
import checked from "@/icons/checked.svg";
import unchecked from "@/icons/unchecked.svg";
import Image from "next/image";
import ButtonIcon from "@/components/ButtonIcon";

export type ToDoItem = {
  id: number;
  title: string;
  completed: boolean;
};

const ToDoPage = () => {
  const [todoList, setTodoList] = useState<ToDoItem[]>([
    { id: 1, title: "Find food", completed: false },
    { id: 2, title: "Build shelter", completed: false },
  ]);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleRemoveItem = (id: number) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const handleUpdateItem = (id: number) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodoTitle.trim() === "") return;

    const newTodo: ToDoItem = {
      id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
      title: newTodoTitle,
      completed: false,
    };

    setTodoList([...todoList, newTodo]);
    setNewTodoTitle("");
  };

  return (
    <div className="container">
      <h1>Welcome to the to do page!</h1>
      <p>
        Here you can find suggestions for what to do next if you want to
        survive...
      </p>
      <p>
        Besides, you can add <strong>your own to do list</strong> here!
      </p>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="New todo"
          className="new-todo-input"
        />
        <button type="submit" className="add-todo-button">
          Add
        </button>
      </form>

      <table className="todo-table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((item) => (
            <tr
              key={item.id}
              className={`todo-item ${item.completed ? "completed" : ""}`}
            >
              <td>
                <ButtonIcon onClick={() => handleUpdateItem(item.id)}>
                  <Image
                    src={item.completed ? checked : unchecked}
                    width={24}
                    alt="status icon"
                  />
                </ButtonIcon>
              </td>
              <td>{item.title}</td>
              <td>
                <ButtonIcon onClick={() => handleRemoveItem(item.id)}>
                  <Image alt="trash icon" src={trash} width={24} />
                </ButtonIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoPage;
