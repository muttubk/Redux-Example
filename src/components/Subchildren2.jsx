import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement } from '../redux/counterSlice'

function Subchildren2() {
    const count = useSelector((state)=> state.count.value)
    const dispatch = useDispatch()
    return (
        <div className='Subchildren2'>Sub-Children 2
            <h3 className='count'>Count: {count}</h3>
            <button className='decrement-button' onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Subchildren2