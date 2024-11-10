import { useState } from 'react';
import './App.css'

function App() {

    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');

    const ops = ['/','*','+','-','.'];

    const updateCalc = (value : string ) => {
      if(
        ops.includes(value) && calc === '' || 
        ops.includes(value) && ops.includes(calc.slice(-1))
      ){
        return ;
      }
      setCalc(calc+value);

      if (!ops.includes(value)){
        setResult(eval(calc+value).toString());
      }
    }

    const createDigits = () => {
      const digits = [];

      for ( let i = 1 ; i < 10 ; i++){
        digits.push(
          <button onClick={() => updateCalc(i.toString())} type='button' className='py-3 px-6 text-white font-bold text-lg bg-violet-950 hover:bg-violet-900 ' key={i} >{i}</button>
        )
      }
      return digits;
    }

    const calculate = ()=>{
      setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
      if (calc == '') {
        return;
      }
      const value = calc.slice(0,-1);

      setCalc(value);
    }
  
  return (
    <>
      <div className='App  flex justify-center mt-40  '>
        <div className='calculator  max-w-80 border-2 border-violet-950 rounded-2xl overflow-hidden '>
          <div className='display flex justify-end bg-violet-950 py-3 px-1 text-white'>
              {result? <span className='text-xs text-slate-500 pt-3 ' >({result})</span> : ''}&nbsp; {calc || "0"}
          </div>
              <div className='operators flex justify-center '>
                <button onClick={() => updateCalc('/')} type='button' className='py-3 px-6 text-white font-bold text-lg bg-pink-800 hover:bg-pink-600 ' >/</button>
                <button onClick={() => updateCalc('*')} type='button' className='py-3 px-6 text-white font-bold text-lg bg-pink-800 hover:bg-pink-600' >x</button>
                <button onClick={() => updateCalc('+')} type='button' className='py-3 px-6 text-white font-bold text-lg bg-pink-800 hover:bg-pink-600' >+</button>
                <button onClick={() => updateCalc('-')} type='button' className='py-3 px-6 text-white font-bold text-lg bg-pink-800 hover:bg-pink-600' >-</button>
                <button onClick={deleteLast} type='button' className='py-3 px-6 text-white font-bold text-lg bg-pink-800 hover:bg-pink-600 ' >DEL</button>
              </div>
              <div className='digits grid grid-cols-3'>
                {createDigits()}
                <button onClick={() => updateCalc('0')} type='button' className='py-3 px-6 text-white font-bold text-lg bg-violet-950 hover:bg-violet-900 ' >0</button>
                <button onClick={() => updateCalc('.')} type='button' className='py-3 px-6 text-white font-bold text-lg bg-violet-950 hover:bg-violet-900 ' >.</button>
                <button onClick={calculate} type='button' className='py-3 px-6 text-white font-bold text-lg bg-violet-950 hover:bg-violet-900 ' >=</button>
              </div>
        </div>

      </div>
    </>
  )
}

export default App
