import Point from "./Point";
import TextField from "./TextField";
import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Info({ isPreview, person, setPerson }) {
  const points = [];
  for (let p in person.info) {
    points.push(<Point text={person.info[p]} />);
  }
  const handleChange = (e) => {
    const newInfo = { ...person.info, [e.target.name]: e.target.value };
    const newPerson = Object.assign({}, person, { info: newInfo });
    setPerson(newPerson);
  };
  const [propList, setPropList] = useState([]);
  const addEntry = () => {
    const key = crypto.randomUUID();
    setPropList([
      ...propList,
      <TextField
        name={key}
        handleChange={handleChange}
        placeholder={"Custom Value"}
        value={person.info[key]}
      />,
    ]);
  };
  if (isPreview) {
    return (
      <div className="info">
        <TextField
          name="fullName"
          placeholder="Full Name"
          value={person.info.fullName}
          handleChange={handleChange}
        />
        <TextField
          name="birth"
          placeholder="Date of birth"
          value={person.info.birth}
          handleChange={handleChange}
        />
        <TextField
          name="occupation"
          placeholder="Occupation status"
          value={person.info.occupation}
          handleChange={handleChange}
        />
        {...propList}
        <button onClick={addEntry}>Add Entry</button>
      </div>
    );
  }
  return <div className="info">{...points}</div>;
}
