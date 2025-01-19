"use client";
import React, { useState, useEffect } from "react";
import trash from "@/icons/trash.svg";
import checked from "@/icons/checked.svg";
import unchecked from "@/icons/unchecked.svg";
import add from "@/icons/add.svg";
import Image from "next/image";
import ButtonIcon from "@/components/ButtonIcon";
import { getFromLocalStorage, saveToLocalStorage } from "@/utils/utils";
import Loading from "@/components/Loading";

export type ToDoItem = {
  id: string;
  title: string;
  completed: boolean;
};

const ToDoPage = () => {
  const [todoList, setTodoList] = useState<ToDoItem[]>([]);
  const [defaultList] = useState<ToDoItem[]>([
    {
      id: "1",
      title: "Find a safe house away from urban areas",
      completed: false,
    },
    {
      id: "2",
      title: "Secure water source (fill all containers, grab water bottles)",
      completed: false,
    },
    {
      id: "3",
      title: "Gather essential food supplies (non-perishables first)",
      completed: false,
    },
    {
      id: "4",
      title: "Find weapons (baseball bat, kitchen knife)",
      completed: false,
    },
    {
      id: "5",
      title: "Collect basic medical supplies (bandages, painkillers)",
      completed: false,
    },
    {
      id: "6",
      title: "Find a backpack or bag to increase carrying capacity",
      completed: false,
    },
    {
      id: "7",
      title: "Barricade windows and doors of your safe house",
      completed: false,
    },
    { id: "8", title: "Find a working vehicle and fuel", completed: false },
    {
      id: "9",
      title: "Gather carpentry tools (hammer, nails, saw)",
      completed: false,
    },
    {
      id: "10",
      title: "Start a small farm (seeds, trowel, water bottles)",
      completed: false,
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [sortedList, setSortedList] = useState<ToDoItem[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  useEffect(() => {
    /* Populate the todo list with the saved list */
    const savedList = getFromLocalStorage("todoList");
    if (savedList != null) {
      setTodoList(savedList);
    } else if (savedList == null) {
      setTodoList(defaultList);
    }
  }, [defaultList]);

  useEffect(() => {
    /* Populate the sorted list with the original list */
    setSortedList(todoList);
  }, [todoList]);

  /* Save sorted list to local storage after every change */
  useEffect(() => {
    setLoading(false);
    saveToLocalStorage("todoList", sortedList);
  }, [sortedList]);

  /* Sort list by completed status (pushes completed items to the bottom) */
  const sortTodoList = React.useCallback(() => {
    const prevList = todoList;
    setSortedList(
      prevList.sort((a, b) => Number(a.completed) - Number(b.completed))
    );
  }, [todoList]);

  /* Sort list when completed status changes */
  useEffect(() => {
    sortTodoList();
  }, [todoList, sortTodoList]);

  /* Remove item from list by filtering the array and setting the state */
  const handleRemoveItem = (id: string) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  /* Update item status by toggling the completed property */
  const handleUpdateItem = (id: string) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  /* Add new item to list by creating a new object and setting the state */
  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodoTitle.trim() === "") return;

    const newTodo: ToDoItem = {
      id: crypto.randomUUID(), // Generate a unique ID for the new item
      title: newTodoTitle.trim(),
      completed: false,
    };

    setTodoList([...todoList, newTodo]);
    setNewTodoTitle("");
    sortTodoList();
  };

  /* Welcome message */
  const WelcomeMsg = () => {
    return (
      <>
        <h1>Welcome to the to-do page!</h1>
        <p>
          Here you can find suggestions for what to do next if you want to
          survive...
        </p>
        <p>
          Besides, you can add <strong>your own to-do list</strong> here!
        </p>
      </>
    );
  };

  if (loading) {
    return (
      <div className="container">
        {WelcomeMsg()}
        <Loading />
      </div>
    );
  }

  return (
    <div className="container">
      {WelcomeMsg()}
      <form
        onSubmit={handleAddItem}
        style={{ display: "flex", alignItems: "center", gap: "8px" }}
      >
        <label htmlFor="newItem">New task: </label>
        <input
          id="newItem"
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="New todo"
          className="new-todo-input"
        />
        <ButtonIcon type="submit">
          <Image src={add} width={24} alt="add icon" />
        </ButtonIcon>
      </form>

      <table className="todo-table">
        {todoList.length ? (
          <thead>
            <tr>
              <th>Status</th>
              <th style={{ textAlign: "start" }}>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
        ) : (
          <thead>
            <tr>
              <th
                style={{
                  fontWeight: "400",
                  fontSize: "2.4rem",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                There are no tasks to complete! I hope you&apos;re doing fine...
              </th>
            </tr>
          </thead>
        )}
        <tbody>
          {sortedList.map((item) => (
            <tr
              key={item.id}
              className={`todo-item ${item.completed ? "completed" : ""}`}
            >
              {/* CHECK MARK */}
              <td className="todo-item-status">
                <ButtonIcon onClick={() => handleUpdateItem(item.id)}>
                  <Image
                    src={item.completed ? checked : unchecked}
                    width={24}
                    alt="status icon"
                  />
                </ButtonIcon>
              </td>

              {/* TITLE */}
              <td
                className={`todo-item-title ${
                  item.completed ? "completed" : ""
                }`}
              >
                {item.title}
              </td>

              {/* REMOVE BUTTON */}
              <td className="todo-item-actions">
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
