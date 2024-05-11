import axios from "axios";
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export const AdminDashboard = () => {
  
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <>
      <h3>AdminDashboard</h3>
      <div style={{marginTop: "10px", padding: "10px", textDecoration: "none"}}>
        <Link to="/admin/streams">
          <button style={{marginLeft: "10px"}}>Stream</button>
        </Link>
        <Link to="/admin/subject">
          <button style={{marginLeft: "10px"}}> Subject</button>
        </Link>
        <Link to="/admin/marks">
          <button style={{marginLeft: "10px"}}>Marks</button>
        </Link>
        <Link to="/admin/students">
          <button style={{marginLeft: "10px"}}>Students</button>
        </Link>
      </div>

 
      <div>
      <h2>Dashboard</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Year</th>
            <th>Stream</th>
            <th>Email</th>
            <th>Subject</th>

          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.year}</td>
              <td>{student.stream.name}</td> {/* Assuming streamName is available */}
              <td>{student.email}</td>
              <td>{student.email}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </>
  );
};