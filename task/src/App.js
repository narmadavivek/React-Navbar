
import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import All from "./components/All";
import FullStackDev from "./components/Fullstackdev";
import DataScience from "./components/Datascience";
import Cybersecurity from "./components/Cybersecurity";
import Career from "./components/Career";

function App() {
  return (
   
   <BrowserRouter>
    <Navbar/>
   
   <Routes>
    <Route path="/" element={<All/>}/>
    <Route path="/fullstackdev" element={<FullStackDev/>}/>
    <Route path="/datascience" element={<DataScience/>}/>
    <Route path="/cybersecurity" element={<Cybersecurity/>}/>
    <Route path="/career" element={<Career/>}/>
    
   </Routes>
   
  </BrowserRouter>

    
  );
}

export default App;
