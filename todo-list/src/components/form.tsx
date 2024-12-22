// import { useState } from "react";

// function ListInputForm() {
//   const [todoAdd, setTodoAdd] = useState("");
//   //input属性の反応
//   const handleAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTodoAdd(e.target.value);
//   };

//     // 新しいリストを反映させるため
//   //   リストを上に追加する
//   // リスト入力後form内を削除する
//   const todoItem = () => {
//     if (todoAdd.trim() !== "") {
//       setTodoLists((prev) => [
//         {
//           date: `${formattedDateTime}`,
//           id: prev.length + 1,
//           text: `${todoAdd}`,
//         },
//         ...prev,
//       ]);
//     }
//     setTodoAdd("");
//   };


//   return (
//     <>
//       <input type="text" onChange={handleAdd} value={todoAdd} />
//       <button onClick={todoItem}>追加</button>
//       <div className="listBox">
//     </>
//   );
// }

// export default ListInputForm;
