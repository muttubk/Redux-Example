import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/counterSlice'

function Subchildren1() {
    const count = useSelector((state) => state.count.value)
    const dispatch = useDispatch()

    return (
        <div className='Subchildren1'>Sub-Children 1
            <h3 className='count'>Count: {count}</h3>
            <button className='increment-button' onClick={() => dispatch(increment())}>Increment</button>
        </div>
    )
}

export default Subchildren1