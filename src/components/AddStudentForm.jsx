import { useState } from "react";

function AddStudentForm({ addStudent }) {

  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault();

    // Empty validation
    if (name.trim() === "" || score === "") {

      alert("Please fill all fields");

      return;
    }

    // Score validation
    if (score < 0 || score > 100) {

      alert("Score must be between 0 and 100");

      return;
    }

    addStudent(name, score);

    // Clear form
    setName("");
    setScore("");
  };

  return (

    <form onSubmit={handleSubmit} className="form">

      <input
        type="text"
        placeholder="Enter student name"

        value={name}

        onChange={(event) =>
          setName(event.target.value)
        }
      />

      <input
        type="number"

        placeholder="Enter score"

        min="0"
        max="100"

        value={score}

        onChange={(event) => {

          let value = event.target.value;

          if (value > 100) {
            value = 100;
          }

          if (value < 0) {
            value = 0;
          }

          setScore(value);
        }}
      />

      <button type="submit">
        Add Student
      </button>

    </form>

  );

}

export default AddStudentForm;