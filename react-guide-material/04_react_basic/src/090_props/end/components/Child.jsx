/* POINT Props の受け取り方
親コンポーネントで属性値のように記述した各値は、１つのオブジェクトとして子コンポーネントで受け取ることができる。
 */


import "./Child.css";

/* POINT Propsを分割代入で受け取る！ */
/* POINT Propsのデフォルト値を設定する！ */
const Child = (props) => {
  console.log(props);
  
  // console.log(bool);

  return (
    <div className="component">
      <h3>Hello Component</h3>
    </div>
  );
};

export default Child;
