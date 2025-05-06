import { Jobs } from '../../../jobs';
import Job from '../job/Job';
import jobStyle from './jobslist.module.css';

export default function JobsList() {
  const jobs = Jobs.filter( job => !job.finished )
              .sort((a,b) =>  new Date(a.finish_by) - new Date(b.finish_by))
              .map((y,idx)=> ({...y, n:idx+1}))
              .map(x => <Job jobData={x}/>);
  return (
      <div className={jobStyle.container}>
        <div style={{
          display: "flex",
          padding: "1rem",
          gap: "2rem"
        }}>
          <div>N</div>
          <div>Описание</div>
          <div>Завершить</div>
        </div>
        {jobs}
      </div>
  );
}
