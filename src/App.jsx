import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AllRoutes from './components/AllRoutes'

function App() {

  const [isLogin, setIslogin] = useState(false);
  const [notes,setNotes] = useState([]);

  async function getData() {
    // console.log(document.cookie.split('token=')[1])
    fetch(`${import.meta.env.VITE_BASE_URL}/blog/`, {
      method: 'GET',
      headers: {
        'Authorization': document.cookie.split('token=')[1]

      }
    })
      .then(res => res.json())
      .then(res => {
        if(res.login) {
          
          setIslogin(true)
          setNotes(res.data)
        }
        
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    getData()
  }, [isLogin])

  return (
    <>
      <Navbar data={{ isLogin }} />
      <AllRoutes data={{ isLogin, setIslogin, notes, setNotes }} />
    </>
  )
}

export default App
