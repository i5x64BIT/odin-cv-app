/* eslint-disable react/prop-types */
export default function TextField({name, handleChange, value, placeholder}) {
  return <input type="text" name={name} placeholder={placeholder} onChange={handleChange} value={value}/>;
}
