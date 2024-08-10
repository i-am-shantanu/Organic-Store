import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUser = createAsyncThunk("fetchUser",async()=>{

	const response = await fetch("https://randomuser.me/api/");
	const data = await response.json();
	return data;
})

const TestSlice = createSlice(
	{
		name:"test",
		initialState:{
			isLoading:false,
			data:null,
			error:false
		},
		extraReducers :

			 	 (builder)=>{

				builder.addCase(fetchUser.pending,(state,action)=>{
					state.isLoading = true;
				})

				builder.addCase(fetchUser.fulfilled,(state,action)=>{
					state.isLoading=false;
					state.data=action.payload;
				})

				builder.addCase(fetchUser.rejected,(state,action)=>{
					state.error=true;
					state.isLoading=false;
				})
			
		}

	}
)

export default TestSlice.reducer

