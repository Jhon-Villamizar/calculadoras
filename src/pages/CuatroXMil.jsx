import { useEffect, useState } from "preact/hooks";

export const CuatroXMil = () => {
  const [total, setTotal] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    setTotal('');
  },[value])

  const formatNumber = (num) => {
    let cleanNum = num.replace(/\D/g, "");
    return cleanNum.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const parseFormattedNumber = (formattedValue) => {
    if (!formattedValue) return 0;
    return parseInt(formattedValue.replace(/\./g, ""), 10);
  };

  const hasDecimals = (num) => {
    return num % 1 !== 0;
  };

  const handlerChange = (e) => {
    setValue(formatNumber(e.target.value));
  }

  const handlerTotal = () => {
    const numericValue = parseFormattedNumber(value);
    if (!isNaN(numericValue)) {
      const calculated = (numericValue / 1000)*4;
      console.log(calculated);
      if (hasDecimals(calculated)) {
        setTotal(`$ ${calculated.toFixed(2).replace(".", ",")} &#128184;`);
      } else {
        setTotal(`$ ${calculated} &#128184;`)
      }
    } else {
      setTotal("Jmmmm creo que escribiste algo mal tatianita! &#128540;");
    }
  }

  return (
    <div>
      <label className="text-2xl flex flex-col"> 
        Cuanto dinero vas a mover? &#129300;
        <input className="mt-2 border-2 rounded-md text-end px-1" type="text" value={value} onChange={handlerChange} />
      </label>
      <div className="flex justify-end w-full">
        <button className="bg-pink-500 mt-3 p-2 rounded-md self-end cursor-pointer" onClick={handlerTotal}>Calcular</button>
      </div>
      <div className="align-middle flex flex-row mt-5">
        <p className="text-2xl">Result:</p>
        <p className="text-2xl ms-3" dangerouslySetInnerHTML={{ __html: total}}>{total}</p>
      </div>
    </div>
  )
}
