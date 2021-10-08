import { useDispatch, useSelector } from 'react-redux';
import CartDisplay from '../../components/CartDisplay';
import {removeCartlistThunk} from '../../store/modules/CartListReducer/thunks'

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import InputTwoToneIcon from '@material-ui/icons/InputTwoTone';
import Badge from '@material-ui/core/Badge';
import { styled } from '@material-ui/core/styles';
import ShoppingBasketOutlined from '@material-ui/icons/ShoppingBasketOutlined'; 
import { useHistory } from 'react-router';




export default function Cart(){

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        },
        }));
    
    const Card = styled('div')({
        backgroundColor: 'grey',
        fontsize: '15px',
        Width: '100px',
        height: '450px',
    })

    const history = useHistory()

    const dispatch = useDispatch()

    const cart = useSelector((store) => store.cartList)

    const remove = (id) => {
        console.log(id)

        dispatch(removeCartlistThunk(id))
       
    }

    const toHome = () => history.push('/')

    const total = cart.reduce((s,a) => a.price +s ,0 )

    return(
        <div>
            <section>
                <nav>
                    <Box>
                        <AppBar position="static">
                            <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <IconButton >
                                    <StyledBadge badgeContent={cart.length} color="warning" style={{marginRight: '12px'}}>
                                        <ShoppingBasketOutlined sx={{ color: 'white'}} />
                                    </StyledBadge>
                                </IconButton>
                                <IconButton onClick={toHome}>
                                        <label style={{color: 'white' , display: 'flex', alignItems: 'center', fontSize: '70%', cursor: 'pointer'}}>
                                        <HomeIcon sx={{ color: 'white'}} />
                                        Home
                                       </label>
                                </IconButton>
                                <IconButton >
                                    <label style={{color: 'white' , display: 'flex', alignItems: 'center', fontSize: '70%', cursor: 'pointer'}}>
                                        <InputTwoToneIcon sx={{ color: 'white'}} />
                                        Logar
                                    </label>
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                    </Box>
                </nav>
            </section>
            <section>
                <h2 style={{textAlign:'end',width: '94vw'}}>Valor Total: R$ <strong style={{color: 'orange'}}>{total} </strong> </h2>
            {
                cart.map((product) => <CartDisplay product={product} remove={remove}/> )
            }
            </section>
        </div>
    )
}