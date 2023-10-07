import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useTodos } from "../context/Todos";

export function TodoForm() {
  const [inputText, setInputText] = useState<string>("");

  const { setTodos, todos } = useTodos();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTodos([...todos, { id: uuid(), text: inputText, completed: false }]);
        setInputText("");
      }}
    >
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </form>
  );
}
