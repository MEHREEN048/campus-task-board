function TaskCard({ task }) {
  return (
    <div className="task-card">
      <strong>{task.title}</strong>
      <span>{task.category}</span>
      <b>→</b>
    </div>
  );
}

export default TaskCard;