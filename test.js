import unhandledError from './index.js';

Promise.reject(new Error('THIS_IS_UNHANDLED'));

unhandledError();
