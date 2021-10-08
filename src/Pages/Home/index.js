import { useSelector, useDispatch } from "react-redux"
import { addCarlistThunk } from "../../store/modules/CartListReducer/thunks"
import { removeCartlistThunk} from "../../store/modules/CartListReducer/thunks"
import Display from '../../components/Display'
import CartDisplay from '../../components/CartDisplay'
import { useHistory } from "react-router-dom"

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import InputTwoToneIcon from '@material-ui/icons/InputTwoTone';
import Badge from '@material-ui/core/Badge';
import { styled } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    },
    }));


export default function Home(){

    const history = useHistory()

    const products = useSelector((store) => store.list)

    const cart = useSelector((store) => store.cartList)

    const dispatch = useDispatch()

    const add = (item) => {

        dispatch(addCarlistThunk(item))
       
    }

    const toCart = () => history.push('/cart')

    return(
        <div>
            <nav>
                <Box>
                    <AppBar position="static">
                        <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                            <IconButton  onClick={toCart}>
                                <StyledBadge badgeContent={cart.length} color="warning" style={{marginRight: '12px'}}>
                                    <ShoppingCartIcon sx={{ color: 'white'}} />
                                </StyledBadge>
                            </IconButton>
                            <IconButton>
                                <label style={{color: 'white' , display: 'flex', alignItems: 'center', fontSize: '70%', cursor: 'pointer'}}>
                                <InputTwoToneIcon sx={{ color: 'white'}} />
                                    Logar
                                </label>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Box>
            </nav>
            <section>
            <Box sx={{margin:'0'}}>    
            {
                products.map((product) => <Display product={product} add={add}/> )
            }
            </Box>
            </section>
        </div>
        
    )
}