const solution1 = {};
const solution2 = {};
const solution3 = {};
const solution4 = {};
const solution5 = {};
const Completed = {
  //   // App
  //   import React, { useEffect, useState } from "react";
  // import "./App.css";
  // import CurrencyRow from "./CurrencyRow";
  // const BASE_URL = "https://api.exchangeratesapi.io/latest";
  // function App() {
  //   const [currencyOptions, setCurrencyOptions] = useState([]);
  //   const [fromCurrency, setFromCurrency] = useState();
  //   const [toCurrency, setToCurrency] = useState();
  //   const [exchangeRate, setExchangeRate] = useState();
  //   const [amount, setAmount] = useState(1);
  //   const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  //   console.log(exchangeRate);
  //   let toAmount, fromAmount;
  //   if (amountInFromCurrency) {
  //     fromAmount = toAmount;
  //     toAmount = amount * exchangeRate;
  //   } else {
  //     toAmount = amount;
  //     fromAmount = amount / exchangeRate;
  //   }
  //   useEffect(() => {
  //     fetch(BASE_URL)
  //       .then(res => res.json())
  //       .then(data => {
  //         const firstCurrency = Object.keys(data.rates)[0];
  //         setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
  //         setFromCurrency(data.base);
  //         setToCurrency(firstCurrency);
  //         setExchangeRate(data.rates[firstCurrency]);
  //       });
  //   }, []);
  //   useEffect(() => {
  //     if (fromCurrency != null && toCurrency != null) {
  //       fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
  //         .then(res => res.json())
  //         .then(data => setExchangeRate(data.rates[toCurrency]));
  //     }
  //   }, [fromAmount, toCurrency]);
  //   function handleFromAmountChange(e) {
  //     setAmount(e.target.value);
  //     setAmountInFromCurrency(true);
  //   }
  //   function handleToAmountChange(e) {
  //     setAmount(e.target.value);
  //     setAmountInFromCurrency(false);
  //   }
  //   return (
  //     <>
  //       <h1>Convert</h1>
  //       <CurrencyRow
  //         currencyOptions={currencyOptions}
  //         selectedCurrency={fromCurrency}
  //         onChangeCurrency={e => setFromCurrency(e.target.value)}
  //         onChangeAmount={handleFromAmountChange}
  //         amount={fromAmount}
  //       />
  //       <div className="equals">=</div>
  //       <CurrencyRow
  //         currencyOptions={currencyOptions}
  //         selectedCurrency={toCurrency}
  //         onChangeCurrency={e => setToCurrency(e.target.value)}
  //         onChangeAmount={handleToAmountChange}
  //         amount={toAmount}
  //       />
  //     </>
  //   );
  // }
  // export default App;
  // Currency Row
  // import React from "react";
  // const CurrencyRow = props => {
  //   const { currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount } = props;
  //   return (
  //     <div>
  //       <input type="number" className="input" value={amount} onChange={onChangeAmount} />
  //       <select value={selectedCurrency} onChange={onChangeCurrency}>
  //         {currencyOptions.map(option => (
  //           <option key={option} value={option}>
  //             {option}
  //           </option>
  //         ))}
  //       </select>
  //     </div>
  //   );
  // };
  // export default CurrencyRow;
};
