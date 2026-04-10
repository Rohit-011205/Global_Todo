import { useState } from 'react'
import Tasks from './Components/Tasks'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="min-h-screen  text-slate-200 flex flex-col items-center py-16 px-4">
      <div className="main flex items-center justify-between ">
        <h1 className='text-5xl md:text-6xl font-black text-white mb-3 tracking-tighter'>To DO List</h1>

      </div>

      <div className="form mt-10   w-full max-w-xl p-6 md:p-10">
        <Tasks />
      </div>
    </div>

  )
}

export default App
