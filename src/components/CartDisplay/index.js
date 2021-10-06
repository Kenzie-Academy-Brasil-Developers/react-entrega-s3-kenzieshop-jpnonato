export default function CartDisplay({product, remove}){
      
  
    return(
        <div>
            <img src={product.img} />
            <h3>{product.name}</h3>
            <h4>{product.info}</h4>
            <h3>{product.price}</h3>
            <button onClick={() => remove(product.id)}>Remover do cart</button>
        </div>
    )
}