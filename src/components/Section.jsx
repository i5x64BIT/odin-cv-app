import List from "./List";
/* eslint-disable react/prop-types */
export default function Section({ type, person }) {
  if (!person || !person[type]) {
    return (
      <section>
        <button>Add {type}</button>
      </section>
    );
  } else {
    return (
      <section>
        <h1>{type.charAt(0).toUpperCase() + type.substr(1)}</h1>
        <List type={type} list={person[type]} />
      </section>
    );
  }
}
