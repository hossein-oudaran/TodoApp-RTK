import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";

function AddTodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return null;
    dispatch(addTodo({ title: value }));
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={"form-inline mt-3 mb-4"}>
        <label htmlFor="name" className="mb-1">
          Name
        </label>
        <input
          autoComplete="off"
          id="name"
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Add todo..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-1">
          {" "}
          submit
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;

// const AddTodoForm = () => {
//   const [value, setValue] = useState("");
//   const dispatch = useDispatch();

//   const { loading } = useSelector((state) => state.todos);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!value) return;
//     dispatch(addAsyncTodo({ title: value }));
//     setValue("");
//   };

//   return (
// <form
//   className={`form-inline mt-3 mb-4 ${
//     loading ? "opacity-50" : "opacity-100"
//   }`}
//   onSubmit={handleSubmit}
// >
//   <label htmlFor="name" className="mb-1">
//     Name
//   </label>
//   <input
//     autoComplete="off"
//     id="name"
//     type="text"
//     className="form-control mb-2 mr-sm-2"
//     placeholder="Add todo..."
//     value={value}
//     onChange={(event) => setValue(event.target.value)}
//   />
//   <button disabled={loading} type="submit" className="btn btn-primary mt-1">
//     {loading ? "Submitting..." : "Submit"}
//   </button>
// </form>
//   );
// };

// export default AddTodoForm;
