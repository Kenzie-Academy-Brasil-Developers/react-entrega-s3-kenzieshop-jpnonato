import { styled } from '@material-ui/core/styles';

export default function CartDisplay({product, remove}){

    const Description = styled('div')({
        
        margin: '2px auto',
        width: '42vw',
        maxWidth: '230px'

    })

    const RemoveButton = styled('button')({

        marginBottom: '25px',
        boxShadow: '#722506 0px 4px 1px 0px',
        padding: '12px',
        backgroundColor: '#d94c11',
        color: '#fff',
        border: 'none',
        borderRadius: '7px'

    })
      
  
    return(
        <div>
            <img src={product.img} style={{width: '30vw' , marginTop: '15px', maxWidth: '245px'}}/>
            <h3 style={{margin: '2px'}}>{product.name}</h3>
            <Description>{product.info}</Description>
            <h3 style={{margin: '7px'}}>{product.price}</h3>
            <RemoveButton onClick={() => remove(product.id)}>Remover do cart</RemoveButton>
        </div>
    )
}