import {configureStore} from '@reduxjs/toolkit'
import ProductSlice from '../Features/ProductSlice'
import CartSlice from '../Features/CartSlice'
import HomeSlice from '../Features/HomeSlice'
import TestSlice from '../Features/Test.js'

const store = configureStore({

    reducer:{
        products :ProductSlice,
        cart:CartSlice,
        home:HomeSlice,
        test:TestSlice

    }
})

export default store