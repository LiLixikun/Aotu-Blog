import Home from "./Home";
import About from "./About";
import { IRouter } from '../types'

const routes: Array<IRouter> = [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/about",
        component: About,
        exact: true,
    },
];

export default routes
