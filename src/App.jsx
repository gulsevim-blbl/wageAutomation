import { useEffect, useState } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";

function App() {
  const [workers, setWorkers] = useState(localStorage.getItem("workers") ? JSON.parse(localStorage.getItem("workers")) : [] ); // LOCALSTORAGE DE BİR ŞEY VARSA TUT YOKSA SIFIRLANABİLİRSİN DEMEK

  useEffect(() => { //SAYFA YENİLENMESİNDE EKLENEN VERİLER KAYBOLMASIN DİYE LOCALSTORAGE'E EKLİYORUZ.
      localStorage.setItem("workers", JSON.stringify(workers));
  },[workers]);

  return (
    <div className="App">
      <h1 className="text-white text-center text-3xl mt-6">Maaş Otomasyonu</h1>
      <AddWorker setWorkers={setWorkers} />
      <WorkerList workers={workers} setWorkers={setWorkers} />
    </div>
  );
}

export default App;
