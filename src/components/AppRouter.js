import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { SHOP_ROUTE } from '../routes/const';
import { authRoutes, publicRoutes } from '../routes/routes'
const AppRouter = () => {
    const isAuth = true;
    return ( 
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} exact path={path} element={<Component/>} />)}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} exact path={path} element={<Component/>} />)}
        </Routes>
    )
}
 
export default AppRouter;