import express from "npm:express";
import tasksRoutes from "./routes/tasks.route.ts";
import "./db.ts";

const app = express();

app.use(express.json());
app.use(tasksRoutes);

app.listen(3000, () => {
  console.log("Server is running  on port 3000");
});
