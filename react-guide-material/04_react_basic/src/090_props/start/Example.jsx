import Child from "./components/Child";

const Example = () => {
  const Hello = (arg) => `Hello ${arg}`;
  const o = {
    color: 'red',
    num: 123,
    bool: true,
    fn: function() {
      console.log("Hello");
    },
    obj: {
      name: 'TOM',
      age: '17'
    }
  };
  console.log(o);
  
  
  return (
    <>
      {/* <Child color="blue" />
      <Child color="red" />
      <Child color="green" /> */}
      <Child {...o}/>
    </>
  );
};

export default Example;
