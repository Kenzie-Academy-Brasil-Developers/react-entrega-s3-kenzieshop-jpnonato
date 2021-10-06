import { Switch,Route } from "react-router"
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'

export default function Routes(){

    return(

        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/cart'>
                <Cart />
            </Route>
        </Switch>

    )
}