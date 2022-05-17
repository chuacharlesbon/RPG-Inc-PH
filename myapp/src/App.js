import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import './App.css';
import {UserProvider} from './UserContext'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {

const [user, setUser] = useState({id: null, isAdmin: null, email: null, userName: null})

  const unsetUser = () => {
    localStorage.clear()
  }

  useEffect(() => {
  fetch('http://localhost:4000/users/details', {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log("Loading User Settings")

    if(typeof data._id !== "undefined") {
      console.log("Setting User Complete")
      setUser({
        id: data._id,
        isAdmin: data.isAdmin,
        email: data.email,
        userName: data.firstName + " " + data.lastName
      })
    }else {
      console.log("User Null")
      setUser({
      id: null,
      isAdmin: null,
      email: null,
      userName: null
      })
     
    }
  })
}, [])

  return(
  <UserProvider value={{user, setUser, unsetUser}}>
  <Router>
    <NavBar/>
    <Container>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
    </Container>
    <Footer/>
  </Router>
  </UserProvider>


    )
}

export default App;
