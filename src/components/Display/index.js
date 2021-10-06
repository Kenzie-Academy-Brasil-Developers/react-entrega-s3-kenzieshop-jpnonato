export default function Display({product,add}){
  
    return(
        <div>
            <img src={product.img}/>
            <h3>{product.name}</h3>
            <h4>{product.info}</h4>
            <h3> R$ {product.price}</h3>
            <button onClick={() => add(product)}>Adicionar ao Cart</button>
        </div>
    )
}

//Onclick={add}