const express = require("express");
const cors = require("cors");

const tasksRoutes = require("./routes/tasks.routes");

const app = express();

app.use(cors()); 
app.use(express.json());
app.use("/tasks", tasksRoutes);

// app.get("/", (req, res) => {
//   res.json({ message: "test ee! " });
// });
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});