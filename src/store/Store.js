import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {setState} from '../api';


import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

// IMPORTING ALL  REDUCERS
import userReducer from '../reducers/UserReducer';
import loginReducer from '../reducers/LoginReducer';
import productCategoryReducer from '../reducers/ProductCategoryReducer';
// import userReducer  from '../reducers/UserReducer';
import likeReducer from '../reducers/LikeReducer';
import commentReducer from '../reducers/CommentReducer';
import orderReducer from '../reducers/OrderReducer';
import productReducer from '../reducers/ProductReducer';
// import productSizeReducer from '../reducers/ProductSizeReducer';
import paymentReducer from '../reducers/PaymentReducer';
import cartReducer from '../reducers/CartReducer';
import vendorReducer from '../reducers/VendorReducer';
import deliveryAreaReducer from '../reducers/DeliveryAreaReducer';



const persistConfig = {
    key: 'stcData',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['login','like','comment','order','product','productCategory','payment','cart','vendor','deliveryArea'],
}



// function saveToLocalStorage(state){
//     try {
//         const serializedState = JSON.stringify(state);
//         localStorage.setItem('stcData1', serializedState);
//     } 
//     catch(e) {
//         console.log(e)
//     }
// }


// export function loadFromLocalStorage(){
//     try{
//         const serializedState = localStorage.getItem('stcData1')
//         if(serializedState === null) return undefined;
//         return JSON.parse(serializedState);
//     }
//     catch(e){
//         console.log(e);
//         return undefined;
//     }
// }

const reducers = combineReducers({
    user: userReducer,
    login: loginReducer,
    like: likeReducer,
    comment: commentReducer,
    order: orderReducer,
    product: productReducer,
    productCategory: productCategoryReducer,
    // productSize: productSizeReducer,
    payment: paymentReducer,
    cart: cartReducer,
    vendor: vendorReducer,
    deliveryArea:deliveryAreaReducer,
});

const finalReducer = (state, action) => {
    if(action.type === 'Logout') {
        state = undefined;
    }
    return reducers(state, action);
}


const pReducer = persistReducer(persistConfig, finalReducer);

const middleware = applyMiddleware(thunk);

const store = createStore(pReducer, undefined, middleware);

store.subscribe(()=> setState(store.getState()));

const persistor = persistStore(store);


export  { persistor, store}; 
// export default store; 