import { get, put } from './cache';

const DELAY = 1000;

export const GET = () => {
    return new Promise((fulfill) => {
        setTimeout(() => {
            fulfill(get());
        }, DELAY);
    });
};

export const PUT = definitions => {
    return new Promise((fulfill) => {
        setTimeout(() => {
            fulfill(put(definitions));
        }, DELAY);
    });
};