
import React from 'react'

function TodoList() {
  return (
    <div>TodoList</div>
  )
}

export default TodoList
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
//     <div>
//       <h2>TodoList</h2>(
//       <ul className="list-group">
//         {todos.map((todo) => (
//           <TodoItem key={todo.id} {...todo} />
//         ))}
//       </ul>
//       )
//     </div>
//   );
// };

// export default TodoList;
