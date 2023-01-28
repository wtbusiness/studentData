import React from 'react'
import Score from './Score';


const Students = ({ studentDetails }) => {
  return (
    <div>
      {studentDetails.map((e) => (
        
        <div className="student">
          <p>{e.name}</p>
          <p>{e.bio}</p>
          <Score scores={e.scores}/>
        </div>
        
      ))}
    </div>
  );
};

export default Students
