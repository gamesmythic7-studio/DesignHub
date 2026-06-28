import { Router } from "express";
import { db, schema } from "@workspace/db";
import { eq } from "drizzle-orm";
import { taskCreateSchema, taskUpdateSchema } from "@workspace/api-zod";

export const tasksRouter = Router();

tasksRouter.get("/", async (_req, res) => {
  const rows = await db.select().from(schema.tasks);
  res.json(rows);
});

tasksRouter.post("/", async (req, res) => {
  const parsed = taskCreateSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: { message: "Invalid input", details: parsed.error.flatten() } });
    return;
  }
  const { dueDate, ...rest } = parsed.data;
  const [created] = await db
    .insert(schema.tasks)
    .values({
      ...rest,
      dueDate: dueDate ? new Date(dueDate) : null,
      userId: req.body.userId ?? "00000000-0000-0000-0000-000000000000",
    })
    .returning();
  res.status(201).json(created);
});

tasksRouter.get("/:id", async (req, res) => {
  const [task] = await db
    .select()
    .from(schema.tasks)
    .where(eq(schema.tasks.id, req.params.id));
  if (!task) {
    res.status(404).json({ error: { message: "Not found" } });
    return;
  }
  res.json(task);
});

tasksRouter.patch("/:id", async (req, res) => {
  const parsed = taskUpdateSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: { message: "Invalid input", details: parsed.error.flatten() } });
    return;
  }
  const { dueDate, ...rest } = parsed.data;
  const updateData: Record<string, unknown> = { ...rest };
  if (dueDate !== undefined) {
    updateData.dueDate = dueDate ? new Date(dueDate) : null;
  }
  const [updated] = await db
    .update(schema.tasks)
    .set(updateData)
    .where(eq(schema.tasks.id, req.params.id))
    .returning();
  if (!updated) {
    res.status(404).json({ error: { message: "Not found" } });
    return;
  }
  res.json(updated);
});

tasksRouter.delete("/:id", async (req, res) => {
  await db.delete(schema.tasks).where(eq(schema.tasks.id, req.params.id));
  res.status(204).send();
});
