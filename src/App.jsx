import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hello from './Component/Hello';
import Profile from './Page/Profile';
import UserList from './Page/UserList';
import Login from './Component/Login/Login';
import * as icon from "@fortawesome/free-solid-svg-icons";

import { useContext, useState } from 'react';
import { CheckBoxList } from '@mostuf/checkboxlist';
import CustomSelect from '@mostuf/custom-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Darkmode from './Component/Darkmode/Darkmode';
import { DarkmodeContext } from './Context/darkmodeContext';


function App() {
  const [cgu, setCGU] = useState(null);
  const [students, setStudents] = useState([]);
  const {darkmode, setDarkmode} = useContext(DarkmodeContext);
  let user = {
    email: "avaast@myges.fr",
    firstname: "Aurélien",
    lastname: "vaast",
    role: "Admin"
  }
  return (
      <div className={`app ${darkmode?"dark":""}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<Hello firstname={user} />} />
            <Route path="/Profile" element={<Profile user={user} />} />
            <Route path="/UserList" element={<UserList />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </BrowserRouter>

        {/* <label>Acceptez vous les CGU?</label>
      <CheckBoxList options={["Oui", "Non"]} name="CGU" onChange={value => setCGU(value)} />
      <label>Présent au cours</label>

      <CheckBoxList 
        options={["Jean", "Muriel", "Jacques", "Bernard"]} 
        name="student" 
        multiple={true} 
        onChange={value => setStudents(value)} 
        /> */}
        {/* <CustomSelect options={["Oui", "Non"]} /> */}
        {/* <CustomSelect options={[{ icon: "faStar", value: "Oui" }, { icon: "faSun", value: "Non" }]}>
        {(option) => {
          return (
            <>
              <FontAwesomeIcon icon={icon[option.icon]} />
              <div className="opt">{option.value}</div>
            </>
          )
        }}
      </CustomSelect> */}
        <Darkmode />
      </div>
  )
}

export default App
