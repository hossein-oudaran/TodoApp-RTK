import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { getAsyncTodos } from "../../features/todo/todoSlice";

function TodoList() {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);
  return (
    <div>
      <h2>TodoList</h2>
      {loading ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="list-group">
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
// import { useDispatch, useSelector } from "react-redux";
// import TodoItem from "./TodoItem";
// import { useEffect } from "react";
// import { getAsyncTodos } from "../../features/todo/todoSlice";

// const TodoList = () => {
//   const { todos } = useSelector((state) => state.todos);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAsyncTodos());
//   }, []);

//   return (
// <div>
//   <h2>TodoList</h2>(
//   <ul className="list-group">
//     {todos.map((todo) => (
//       <TodoItem key={todo.id} {...todo} />
//     ))}
//   </ul>
//   )
// </div>
//   );
// };

// export default TodoList;
