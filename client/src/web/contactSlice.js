import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import webApi from "./webApi";
import WebService from "./webService";

export const fetchContact=createAsyncThunk('contact/fetchContact',async(data)=>{
    let response = await WebService.getApi(webApi.LOAD_CONTACT);
    if(response.data.status){
        return response.data.result;
    }
});

const slice = createSlice({
    name:"contact",
    initialState:{
        value:{
            contactList:[],
            iscontactLoading:false,
            contactError:""
        }
    },
    reducers:{
        updatecontact:(state,action)=>{
            state.value.contactList.unshift(action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchContact.pending,(state,action)=>{
            state.value.iscontactLoading = true;
        })
        builder.addCase(fetchContact.fulfilled,(state,action)=>{
            state.value.iscontactLoading = false;
            state.value.contactList = action.payload;
        })
        builder.addCase(fetchContact.rejected,(state,action)=>{
            state.value.iscontactLoading = false;
            state.value.contactList = [];
            state.value.contactError = "Oops!.. something went wrong"
        })
    }
})
export const {updatecontact} = slice.actions;
export default slice.reducer