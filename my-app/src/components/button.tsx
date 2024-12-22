
const Button = () => {

    const current = () => {
        const d = new Date();
        console.log(d.toLocaleString());
        
    }
  return (
    <>
    <p>{}</p>
      <button onClick={current}>{`button`}</button>
    </>
  );
};

export default Button;
