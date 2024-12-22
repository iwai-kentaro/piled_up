import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  date: string;
};

function List() {
  const [todoLists, setTodoLists] = useState<Todo[]>([]);
  const [completeLists, setCompleteLists] = useState<Todo[]>([]);
  const [todoAdd, setTodoAdd] = useState("");

  //input属性の反応
  const handleAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoAdd(e.target.value);
  };

  // 時間を提示
  const now = new Date();
  const year = String(now.getFullYear()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  //   文字列で表記
  const formattedDateTime = `${year}/${month}/${day}　${hour}:${minutes}:${seconds}`;

  // 新しいリストを反映させるため
  //   リストを上に追加する
  // リスト入力後form内を削除する
  const todoItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoAdd.trim() !== "") {
      setTodoLists((prev) => [
        {
          date: `${formattedDateTime}`,
          id: Math.floor(Math.random() * 1e5),
          text: `${todoAdd}`,
        },
        ...prev,
      ]);
    }
    setTodoAdd("");
  };

  const complete = (id: number) => {
    const completeTask = todoLists.find((todo) => todo.id == id);

    if (completeTask) {
      setCompleteLists((prev) => [completeTask, ...prev]);

      setTodoLists((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div>
      <form onSubmit={todoItem}>
        <input type="text" onChange={handleAdd} value={todoAdd} />
        <button className="add__btn">追加</button>
      </form>
      <div className="listBox">
        <div className="list__incomplete">
            <h2>未完了</h2>
            <ul className="todo__list">
              {todoLists.map((list) => (
                <li key={list.id} className="todo__item">
                  <div className="todo__content">
                      <div className="todo__date">{list.date}</div>
                      <div className="todo__text">{list.text}</div>
                  </div>
                  <button className="todo__btn" onClick={() => complete(list.id)}>完了</button>
                </li>
              ))}
            </ul>
        </div>
        <div className="complete__complete">
            <h2>完了</h2>
            <ul className="complete__list">
              {completeLists.map((list) => (
                <li key={list.id} className="complete__item">
                  【完了】
                  <div>
                      <div>{list.date}</div>
                      <div>{list.text}</div>
                  </div>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default List;
