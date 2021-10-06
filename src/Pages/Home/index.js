import { useSelector, useDispatch } from "react-redux"
import { addCarlistThunk } from "../../store/modules/CartListReducer/thunks"
import { removeCartlistThunk} from "../../store/modules/CartListReducer/thunks"
import Display from '../../components/Display'
import CartDisplay from '../../components/CartDisplay'


export default function Home(){

    const products = useSelector((store) => store.list)

    const cart = useSelector((store) => store.cartList)

    const dispatch = useDispatch()

    const add = (item) => {

        dispatch(addCarlistThunk(item))
       
    }

    const remove = (id) => {

        dispatch(removeCartlistThunk(id))
       
    }

    return(
        <div>
            <section>
            {
                products.map((product) => <Display product={product} add={add}/> )
            }
            </section>
            <section>
                <h2 style={{color: 'green'}}>Carrinho: </h2>
            {
                cart.map((product) => <CartDisplay product={product} remove={remove}/> )
            }
            </section>
        </div>
        
    )
}