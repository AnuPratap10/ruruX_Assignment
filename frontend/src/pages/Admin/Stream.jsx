import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Stream = () => {
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
  );
};


