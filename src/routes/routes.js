import Cabinet from "../pages/Cabinet"
import Shop from "../pages/Shop"
import Ticket from "../pages/Ticket"
import Registration from "../pages/Registration"
import { CABINET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ROOM_ROUTE, SHOP_ROUTE, TICKET_ROUTE } from "./const"
import Login from "../pages/Login"
import Room from "../pages/Room"

export const authRoutes = [
    {
        path: TICKET_ROUTE,
        Component: Ticket
    },
    {
        path: CABINET_ROUTE,
        Component: Cabinet
    },

]
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: ROOM_ROUTE,
        Component: Room
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    }
]
