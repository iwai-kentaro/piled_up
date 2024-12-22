import "./Expression.css";

const Expression = () => {
    const title = "Expression"
    const arry = ['item1','item2','item3']
    const hello = (args) => `${args} Function`;
    const jsx = <h3>konnnitiha</h3>;
    console.log(jsx);
    
    return (
        <div className= {title.toLocaleLowerCase()} >
            <h3>Hello {title}</h3>
            <h3>{arry}</h3>
            <h3>{hello('hello')}</h3>
            {<h3>konnnitiha</h3>}
            {jsx}
        </div>
    )
}

export default Expression;