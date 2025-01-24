import { useEffect, useState } from "preact/hooks";
import { Table } from "../components/table";

export const InteresCompuesto = () => {
  const [total, setTotal] = useState([]);
  const [money, setMoney] = useState('');
  const [interest, setInterest] = useState(0);
  const [time, setTime] = useState(1);
  const [period, setPeriod] = useState('diario');

  useEffect(() => {
      setTotal([]);
    },[money, time, period])
  
    const formatNumber = (num) => {
      let cleanNum = num.replace(/\D/g, "");
      return cleanNum.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
  
    const parseFormattedNumber = (formattedValue) => {
      if (!formattedValue) return 0;
      return parseInt(formattedValue.replace(/\./g, ""), 10);
    };

    function formatoDinero(numero) {
      return numero.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
  
    const handlerMoneyChange = (e) => {
      setMoney(formatNumber(e.target.value));
    }
    const handlerInterestChange = (e) => {
      setInterest(e.target.value);
    }
    const handlerTimeChange = (e) => {
      setTime(e.target.value);
    }
    const handlerPeriotChange = (e) => {
      setPeriod(e.target.value);
    }
  
    const handlerTotal = () => {
      let interesRate = interest / 100;
      const capital = parseFormattedNumber(money);
      if (period === 'diario') {
        let t = 0;
        let data = [];
        let initialCapital = capital;
        let dailyInterest = interesRate / 365;
        for (let i = 0; i < time; i++) {
          let calculatedAmount  = (initialCapital * dailyInterest).toFixed(2);
          t += parseFloat(calculatedAmount);
          data.push({
            capitalInicial: formatoDinero(initialCapital),
            interes: `${interest}%`,
            ganancia: formatoDinero(parseFloat(calculatedAmount)),
            total: formatoDinero(parseInt(capital)+t)
          })
          initialCapital = parseInt(capital)+t;
        }
        setTotal(data);
      } else if (period === 'mensual') {
        let t = 0;
        let data = [];
        let initialCapital = parseInt(capital);
        let monthlyInterest = interesRate / 12;
        for (let i = 0; i < time; i++) {
          let calculatedAmount  = (initialCapital * monthlyInterest).toFixed(2);
          t += parseFloat(calculatedAmount);
          data.push({
            capitalInicial: formatoDinero(initialCapital),
            interes: `${interest}%`,
            ganancia: formatoDinero(parseFloat(calculatedAmount)),
            total: formatoDinero(parseInt(capital)+t)
          })
          initialCapital = parseInt(capital)+t;
        }
        setTotal(data);
      } else {
        let t = 0;
        let data = [];
        let initialCapital = parseInt(capital);
        for (let i = 0; i < time; i++) {
          let calculatedAmount = initialCapital * interesRate;
          t += parseFloat(calculatedAmount);
          data.push({
            capitalInicial: formatoDinero(initialCapital),
            interes: `${interest}%`,
            ganancia: formatoDinero(parseFloat(calculatedAmount)),
            total: formatoDinero(parseFloat(capital+t))
          })
          initialCapital = parseInt(capital)+t;
        }
        setTotal(data);
      }      
    }

  return (
    <div className="w-4/5 m-auto">
      <div className="flex flex-wrap flex-row gap-5 justify-between">
        <label className="text-2xl flex flex-col w-90"> 
          Cuanto dinero vas a Ahorrar? &#129300;
          <input className="mt-2 border-2 rounded-md text-end px-1" type="text" value={money} onChange={handlerMoneyChange} />
        </label>
        <label className="text-2xl flex flex-col w-40">
          Interes E.A &#128293;
          <input className="mt-2 border-2 rounded-md text-end px-1" type="number" value={interest} onChange={handlerInterestChange} />
        </label>
        <label className="text-2xl flex flex-col w-40">
          Proyeccion 	&#9200;
          <input className="mt-2 border-2 rounded-md text-end px-1" type="number" value={time} onChange={handlerTimeChange} />
        </label>
        <label className="text-2xl flex flex-col gap-1 w-30 justify-between">
          Periodo &#128197;
          <select className="bg-black" onChange={handlerPeriotChange} value={period}>
            <option value="diario">Diario</option>
            <option value="mensual">Mensual</option>
            <option value="anual">Anual</option>
          </select>
        </label>
      </div>
      <div className="flex justify-end w-full">
        <button className="bg-pink-500 mt-3 p-2 rounded-md self-end cursor-pointer" onClick={handlerTotal}>Calcular</button>
      </div>
      <div className="w-full mt-3">
        {
          total.length >0 && <Table props={total}></Table>
        }
      </div>
    </div>
  )
}
