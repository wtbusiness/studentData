import React, { useState } from 'react';
import data from "./data"
import Students from "./components/Students";
import Score from "./components/Score";
import './App.css';



function App() {
  const [studentData, setStudentData] = useState(data)
  return (
    <div className="App">
     <Students studentDetails={studentData}/>
     
    </div>
  );
}

export default App;
