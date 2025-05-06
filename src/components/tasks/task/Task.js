export default function Task({taskData}) {
  if(taskData.finished) return null;

  return (
    <div key={taskData.id}
          style={{
            display: "flex",
            padding: "1rem",
            gap: "2rem"
          }}
    >
      <div>{taskData.n}</div>
      <div>{taskData.description}</div>
      <div>{taskData.finish_by}</div>
    </div>
  );
}
