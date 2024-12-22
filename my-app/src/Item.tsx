type Syouhin = {
    name : string,
    price : string,
};

const Item: React.FC<Syouhin> = ({name, price}) => {
    return(
        <p>商品名：{name}、価格：{price}</p>
    )
}

export default Item;