import { createAsyncThunk } from '@reduxjs/toolkit';
import {IThunkConfig} from "../../../../app/providers/StoreProvider/config/StateSchema";
import {IStockSchema} from "../types/stockSchema";

export const fetchStockData = createAsyncThunk<
    IStockSchema,
    string,
    IThunkConfig<string>>(
    'stock/fetchStockData',
    async (token, { rejectWithValue, extra }) => {
        try {
            const result = await extra.api.get<IStockSchema>(`/stable/tops?token=${token}`);

            if (!result.data) {
                throw new Error();
            }

            return result.data;
        } catch (e) {
            return rejectWithValue('Error');
        }
    },
);
