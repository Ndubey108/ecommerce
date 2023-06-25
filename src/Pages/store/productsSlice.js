const {createSlice, createAsyncThunk}=require('@reduxjs/toolkit')
export const statuses=Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
})
const productsSlice=createSlice({
    name:'product',
     initialState:{
        status:statuses.IDLE,
        data:[],
     },
    reducers:{
        // setProducts(state,action){
              
        //     state.data=action.payload;
        // },
        // setStatus(state,action){
              
        //     state.status=action.payload;
        // },
      
    },
    extraReducers:(builder)=>{
        builder
          .addCase(fetchProducts.pending,(state,action)=>{
            state.status=statuses.LOADING;
          })
          .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.status=statuses.IDLE;
          })
          .addCase(fetchProducts.rejected,(state,action)=>{
            state.status=statuses.ERROR;
          })
    }
})
export const {setProducts,setStatus}=productsSlice.actions;
export default productsSlice.reducer;

//thunks
export const fetchProducts=createAsyncThunk('products/fetch',async()=>{
    const res=await fetch('https://fakestoreapi.com/products');
    const data=await res.json();
    return data;
})
// export function fetchProducts(){
//     return async function fetchproductthunk(dispatch,getState){
//         dispatch(setStatus(statuses.LOADING));
        
//         try{
//             const res=await fetch('https://fakestoreapi.com/products');
//               const data=await res.json();
//               dispatch(setProducts(data))
//               dispatch(setStatus(statuses.IDLE))
//         }
//         catch(err){
//        console.log(err)
//        dispatch(setStatus(statuses.ERROR))
//         }
//     }
// }