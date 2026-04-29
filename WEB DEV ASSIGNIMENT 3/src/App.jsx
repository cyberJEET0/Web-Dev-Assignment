import { useState } from "react";

import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";

function App() {

  const [students, setStudents] = useState([
    { id: 1, name: "Ishan", score: 78 },
    { id: 2, name: "Rahul", score: 35 },
    { id: 3, name: "Aman", score: 92 }
  ]);

  // Update score
  const updateScore = (id, newScore) => {

    const updatedStudents = students.map((student) => {

      if (student.id === id) {
        return {
          ...student,
          score: Number(newScore)
        };
      }

      return student;
    });

    setStudents(updatedStudents);
  };

  // Add student
  const addStudent = (name, score) => {

    const newStudent = {
      id: Date.now(),
      name: name,
      score: Number(score)
    };

    setStudents([...students, newStudent]);
  };

  return (
    <div className="container">

      <Header />

      <AddStudentForm addStudent={addStudent} />

      <StudentTable
        students={students}
        updateScore={updateScore}
      />

    </div>
  );
}

export default App;