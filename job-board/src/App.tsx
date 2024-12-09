import JobBoard from "./JobBoard";

function App() {
  return (
    <div className="App">
      <h2 className="title">Hacker News Job Board</h2>
      <JobBoard initialNumToRender={6} />
    </div>
  );
}

export default App;
