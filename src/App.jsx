import { useState } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";

function App() {
  const [workers, setWorkers] = useState([]);
  return (
    <div className="App">
      <h1 className="text-white text-center text-3xl mt-6">Maaş Otomasyonu</h1>
      <AddWorker setWorkers={setWorkers} />
      <WorkerList workers={workers} setWorkers={setWorkers} />
    </div>
  );
}

export default App;
