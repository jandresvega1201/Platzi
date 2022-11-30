import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import getHash from '../utils/getHash';
import resolveRoutes from "../utils/resolveRoutes";
import Error404 from '../pages/error404';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact'
}

const router = async () => {
    const header =  document.getElementById('header');
    const content = document.getElementById('content');

    header.innerHTML = await Header();

    let hash = getHash();
    let route = await resolveRoutes(hash);

    let render = routes[route] ? routes[route]: Error404;
    content.innerHTML = await render();
};

export default router;