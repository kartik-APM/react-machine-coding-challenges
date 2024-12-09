import { useEffect, useState } from "react";

interface JobBoardProps {
  initialNumToRender: number;
}

interface JobProps {
  by: string;
  id: string;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export default function JobBoard({ initialNumToRender }: JobBoardProps) {
  const [jobIds, setJobIds] = useState([]);
  const [num, setNum] = useState(initialNumToRender);

  const handleButtonClick = () => {
    setNum((num) => num + 6);
  };
  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/jobstories.json`)
      .then((res) => res.json())
      .then((data) => setJobIds(data));
  }, []);

  return (
    <div>
      {jobIds.map((jobId: string, index: number) =>
        index < num ? <Job jobId={jobId} /> : null
      )}
      {num < 26 ? (
        <button className="button-style" onClick={handleButtonClick}>
          Load More Jobs
        </button>
      ) : null}
    </div>
  );
}

function Job({ jobId }: { jobId: string }) {
  const [job, setJob] = useState<JobProps | null>(null);

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`)
      .then((res) => res.json())
      .then((job) => setJob(job));
  }, [jobId]);
  return (
    <div className="job-card">
      {job ? (
        <div>
          <p className="job-title">
            <a href={job.url && job.url} target="_blank" rel="noreferrer">
              {job.title}
            </a>
          </p>
          <div className="job-desc">
            <p>By {job.by}</p>
            <p>|| {new Date(job.time * 1000).toLocaleString()}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
