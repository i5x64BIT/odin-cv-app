/* eslint-disable react/prop-types */
export default function ListItem({ type, expItem }) {
  if (type === "experience") {
    const { title, company, from, to, description } = expItem;
    return (
      <>
        <li>
          <h1>{!company ? title : `${title}, ${company}`}</h1>
          <h2>
            {from} - {to}
          </h2>
          <p>{description ? description : ""}</p>
        </li>
      </>
    );
  }
  if (type === "education") {
    const { title, school, from, to, description } = expItem;
    return (
      <>
        <li>
          <h1>{!school ? title : `${title}, ${school}`}</h1>
          <h2>
            {from} - {to}
          </h2>
          <p>{description ? description : ""}</p>
        </li>
      </>
    );
  }
  if (type === "skills") {
    return (
      <>
        <li>{expItem}</li>
      </>
    );
  }

}
