function StudentRow({ student, updateScore }) {

  const isPass = student.score >= 40;

  return (

    <tr>

      <td>{student.name}</td>

      <td>

        <input
          type="number"
          min="0"
          max="100"
          value={student.score}

          onChange={(event) => {

            let value = Number(event.target.value);

            if (value < 0) {
              value = 0;
            }

            if (value > 100) {
              value = 100;
            }

            updateScore(student.id, value);
          }}
        />

      </td>

      <td className={isPass ? "pass" : "fail"}>

        {isPass ? "Pass" : "Fail"}

      </td>

    </tr>

  );

}

export default StudentRow;