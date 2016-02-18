import ReactDOM from 'react-dom';
import Provider from './components/Provider/Provider';

const APPLICATION_MOUNT = 'application-mount';

const render = id => {
    console.log('stuff')
    const mount = document.createElement('div');
    const idPrefix = '#';

    if (!document.querySelector(`${idPrefix}${id}`)) {
        mount.id = id;
        document.body.appendChild(mount);
    }

    ReactDOM.render(Provider, document.querySelector(`${idPrefix}${id}`));
};

if (document.body) {
    render(APPLICATION_MOUNT);
}

else {
    document.addEventListener(
        'DOMContentLoaded',
        render.bind(this, APPLICATION_MOUNT));
}
