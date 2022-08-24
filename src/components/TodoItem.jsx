import { useState } from "react";
import "../styles/Todos.scss";

export const TodoItem = (item) => {
  const [complete, setComplete] = useState(item.completed);

  const handleComplete = () => {
    setComplete(!complete);
  };

  return (
    <div className="TodoItem">
      <h1>{item.title}</h1>
      <div className="checkbox">
        {item.completed ? (
          <div className="Complete">
            <span>Completado</span>
            <input type='checkbox' checked/>
          </div>
        ) : (
          <div className="unComplete">
            <span>No Completado</span>
            <input type='checkbox'/>
          </div>
        )}
      </div>
    </div>
  );
};
