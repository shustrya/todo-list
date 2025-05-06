export default function Job({jobData}) {
  if(jobData.finished) return null;

  return (
    <div key={jobData.id}
          style={{
            display: "flex",
            padding: "1rem",
            gap: "2rem"
          }}
    >
      <div>{jobData.n}</div>
      <div>{jobData.description}</div>
      <div>{jobData.finish_by}</div>
    </div>
  );
}
