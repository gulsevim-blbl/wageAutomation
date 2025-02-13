import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddWorker = (props) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");
  const [error, setError] = useState();

  const minimumWage = 22500;

  const workerNameChangeHandler = (e) => {
    setEnteredWorkerName(e.target.value);
  };

  const wageChangeHandler = (e) => {
    setEnteredWage(e.target.value);
  };

  const addWorkerHanler = (e) => {
    e.preventDefault(); //sayfa yenilenmesini engellemek içindi
    if (
      // boş değer atamasını engellemek için boşsa aşağı inmesini engelletiriz bu şekilde
      enteredWorkerName.trim().length === 0
    ) {
      setError({
        title: "İsim Alanı Zorunludur!",
        message: "Lütfen bir isim giriniz...",
      });
      return;
    }

    if (enteredWage.trim().length === 0) {
      setError({
        title: "Maaş Alanı Zorunludur!",
        message: "Lütfen bir maaş giriniz...",
      });
      return;
    }

    if (+enteredWage < minimumWage) {
      //string ifade ile başlandığı için her defasında number olmasını istiyorsak başına artı koyarız
      setError({
        title: "Asgeri Ücretten Aşağı Kabul Edilmemektedir.",
        message: `Lütfen ${minimumWage} değerinden büyük bir maaş değeri giriniz.`,
      });
      return;
    }

    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredWorkerName,
        wage: enteredWage,
      },
      ...prevState,
    ]);
    setEnteredWorkerName(""); //ekleme yapıldıktan sonra inputu temzie çekmek için
    setEnteredWage(""); //ekleme yapıldıktan sonra inputu temzie çekmek için

    // console.log(enteredWorkerName, enteredWage);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
      <Card className="mt-10">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHanler}>
          <label htmlFor="name" className="font-medium">
            Çalışan İsmi
          </label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Çalışan İsmi Giriniz"
            id="name"
            onChange={workerNameChangeHandler}
            value={enteredWorkerName} //eklendikten sonra girilen değerler inputu boş sıfırlamak için
          />
          <label htmlFor="wage" className="font-medium">
            Maaş Miktarı
          </label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Maaş Girniz"
            id="wage"
            onChange={wageChangeHandler}
            value={enteredWage} //eklendikten sonra girilen değerler inputu boş sıfırlamak için
          />
          <Button className="mt-2" type="submit">
            Ekle
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddWorker;
