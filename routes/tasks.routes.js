const express = require("express");
const fs = require("fs");
const router = express.Router();


// GET TASKS
router.get("/", (req, res) => {
  const data = fs.readFileSync("./data/tasks.json", "utf-8");
  const tasks = JSON.parse(data);

  const activeTasks = tasks
    .filter(task => task.done === false)
    .sort((a, b) => b.priority - a.priority);

  const completedTasks = tasks
    .filter(task => task.done === true);

  res.json({
    active: activeTasks,
    completed: completedTasks
  });
});

// POST TASK (CREATE)
router.post("/", (req, res) => {
  const { title, priority, description } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title required" });
  }
  if (!priority) {
  return res.status(400).json({ error: "Priority required" });
  }

  const priorityMap = {
    urgent: 4,
    high: 3,
    medium: 2,
    low: 1
  };

  const numericPriority = priorityMap[priority];

  if (!numericPriority) {
    return res.status(400).json({ error: "Invalid priority" });
  }

  const data = fs.readFileSync("./data/tasks.json", "utf-8");
  const tasks = JSON.parse(data);
  

const newTask = {
  id: Date.now(),
  title,
  priority: numericPriority,
  description: description || "",
  done: false
};
  tasks.push(newTask);

  fs.writeFileSync("./data/tasks.json", JSON.stringify(tasks, null, 2));

  res.status(201).json(newTask);
});


module.exports = router;