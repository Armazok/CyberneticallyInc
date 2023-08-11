import {IStockSchema} from "../types/stockSchema";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchStockData} from "../service/fetchStockData";

const initialState: IStockSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const stockSlice = createSlice({
    name: 'stock',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStockData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchStockData.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchStockData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {actions: stockActions} = stockSlice;
export const {reducer: stockReducer} = stockSlice;
