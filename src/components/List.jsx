/* eslint-disable react/prop-types */
import ListItem from "./ListItem";

export default function List({ type, list }) {
  const items = [];
  list.forEach((e) => items.push(<ListItem type={type} expItem={e} />));
  return (
    <>
      <ul>{...items}</ul>
    </>
  );
}
