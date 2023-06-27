// import { useState } from 'react'
import { useRoutes } from "react-router-dom"
// import { Link, Outlet } from "react-router-dom"
import router from './router'
// import Comp1 from "./components/Comp1"
// import Comp2 from "./components/Comp2"

function App() {
  // const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
    <div className='App'>
      {/* <Link to="/home">Home</Link> */}
      {/* <Link to="/about">About</Link> */}

      {/* <Outlet></Outlet> */}
      {/* 顶级组件
      <Comp1></Comp1>
      <Comp2></Comp2> */}
      {outlet}
    </div>
  )
}

export default App
