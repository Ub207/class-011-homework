"use client";

import { useState } from "react"

const State = () => {
    const [count, setCount] = useState(50)

    const handleIncrement = () => {
        setCount(count + 10)

    };
    const handleDecrement = () => {
        setCount(count - 20)
    };
    return (
        <div className="flex justify-center items-center">
            <h1 className="text-4xl">{count}</h1>

            <button className="bg-blue-500 border-gray-700 text-white rounded-md" onClick={handleIncrement}>Increment</button>
            <button className="bg-red-500 border-slate-800 text-white rounded-md" onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default State
