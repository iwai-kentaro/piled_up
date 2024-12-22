
import "./Child.css";

const Child = ({  color:c = 'red', num , fn, bool, obj:o }) => {
  console.log(o);
  
  // console.log(bool);

  return (
    <div className={`component ${c}`}>
      <h3>Hello Component</h3>
      <h3>{num}</h3>
      <h3>{fn('123')}</h3>
      <h3>{bool ? 'true' : 'false'}</h3>
      <h3>{ o.name + o.age }</h3>
    </div>
  );
};

export default Child;
