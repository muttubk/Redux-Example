import { useSelector, useDispatch } from 'react-redux';
import './App.css'

import Parent1 from './components/Parent1'
import Parent2 from './components/Parent2'
import { useRef } from 'react';
import { incrementByAmount } from './redux/counterSlice';

function App() {
  const count = useSelector((state)=> state.count.value)
  const dispatch = useDispatch();

  const inputRef = useRef()
  const handleClick = () =>{
    dispatch(incrementByAmount(Number(inputRef.current.value)))
    inputRef.current.value = ''
  }
  return (
    <div className="App">
      <h3>App</h3>
      <h3 className='count'>Count: {count}</h3>
      <div>
        <input ref={inputRef} type='number' className='payload-input' placeholder='Enter payload' />
        <button onClick={()=>{handleClick()}} className='update-button'>Update</button>
      </div>
      <div className='App-container'>
        <Parent1/>
        <Parent2/>
      </div>
    </div>
  );
}

export default App;