import { Router } from "npm:express";
import {
  getTasks,
  getTask,
  createTasks,
  deleteTask,
  updateTask,
} from "./../controllers/tasks.controller.ts";

const router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTask);
router.post("/tasks", createTasks);
router.delete("/tasks/:id", deleteTask);
router.put("/tasks/:id", updateTask);

export default router;
