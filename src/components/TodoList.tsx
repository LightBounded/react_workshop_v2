import { useTodos } from "../context/Todos";

export function TodoList() {
  const { todos, setTodos } = useTodos();
  const finishedTodos = todos.filter((todo) => todo.completed);
  const unfinishedTodos = todos.filter((todo) => !todo.completed);

  return (
    <ul>
      {unfinishedTodos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button
            onClick={() =>
              setTodos(
                todos.map((t) => {
                  if (t.id === todo.id) {
                    return {
                      ...t,
                      completed: true,
                    };
                  }
                  return t;
                })
              )
            }
          >
            Complete
          </button>
          <button
            onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
          >
            Delete
          </button>
        </li>
      ))}
      {finishedTodos.map((todo) => (
        <li key={todo.id}>
          <del>{todo.text}</del>
          <button
            onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
