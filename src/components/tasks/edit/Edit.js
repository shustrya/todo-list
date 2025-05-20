import { useRef } from "react";

export default function Edit({users, onEdit, onDelete}) {

  const inputRef = useRef();

  function handleNewName() {
    const value = String(inputRef.current.value).trim();


    if(value) {
      onEdit(value);
      inputRef.current.value = '';
    }
  }

  return (
    <tr>
      <td colSpan="4"></td>
      <td>
        <div>
          {users.map((n,i) => <div key={i}><span>{n}</span>
          <button onClick={() => onDelete(n)}>Х</button>
        </div>
        )}
        </div>
        <div>
          <input style={{
            width: "45px"
          }} type="text"
          ref={inputRef}/>
          <button onClick={handleNewName}>+</button>
        </div>
      </td>
      <td></td>
  </tr>
);
}
