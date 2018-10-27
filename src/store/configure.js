import { createStore } from 'redux';
import cardItem from './modules/cardItem';

const configure = () => createStore(cardItem);

export default configure;