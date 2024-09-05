'use client'
import React, { useRef, useState } from 'react'


const Add = ({ onSubmit }) => {
    const [value, setValue] = useState("")
    return (
        <div className='flex items-center justify-center'>
            <input className="border-1 border-black p-3 mr-3" onChange={e => {
                setValue(e.target.value)
            }} />
            <button className='w-20 h-10' onClick={(e) => {
                if (value) {
                    onSubmit(e, value)
                    setValue("")
                }
            }}>Add Item</button>
        </div>
    )
}

export default Add