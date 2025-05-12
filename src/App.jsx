import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Hello from './Component/Hello'
import Profile from './Page/Profile'

function App() {
  let user = {
    email: "avaast@myges.fr",
    firstname: "Aurélien",
    lastname : "vaast",
    role: "Admin"
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Hello firstname={user} />} />
          <Route path="/Profile" element={<Profile user={user} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
