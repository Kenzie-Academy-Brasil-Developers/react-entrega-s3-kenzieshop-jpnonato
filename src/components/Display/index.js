import { styled } from '@material-ui/core/styles';
import { borderRadius, maxWidth } from '@material-ui/system';

export default function Display({product,add}){

    const Description = styled('div')({
       
        margin: '2px auto',
        width: '42vw',
        maxWidth: '230px'
    })

    const AddButton = styled('button')({

        marginBottom: '25px',
        boxShadow: '#122040 0px 4px 1px 0px',
        padding: '12px',
        backgroundColor: '#0d52e7',
        color: '#fff',
        border: 'none',
        borderRadius: '7px'

    })
  
    return(
        <div>
            <img style={{width: '30vw' , marginTop: '15px', maxWidth: '245px'}} src={product.img}/>
            <h3 style={{margin: '2px'}}>{product.name}</h3>
            <Description>{product.info}</Description>
            <h3 style={{margin: '7px'}}> R$ {product.price}</h3>
            <AddButton onClick={() => add(product)}>Adicionar ao Cart</AddButton>
        </div>
    )
}

//Onclick={add}