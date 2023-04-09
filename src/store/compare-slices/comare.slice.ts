import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PhoneType } from '../../types/phone.model';
import { CompareState } from './compare.types';
import { fillCurrentIdList } from './compare.utils';

const initialState: CompareState = {
  items: [],
  currentIdList: [],
  showDifference: false,
  itemsQuantity: 3,
};

export const compareSlice = createSlice({
  name: 'compare',
  initialState,
  reducers: {
    toggleShowDifference(state) {
      state.showDifference = !state.showDifference;
    },
    setItemsQuantity(state, action: PayloadAction<number>) {
      const q = action.payload;
      if (q >= 2 && q <= 6) {
        state.itemsQuantity = q;
        fillCurrentIdList(state);
      }
    },
    addItem(state, action: PayloadAction<PhoneType>) {
      state.items.push(action.payload);
      fillCurrentIdList(state);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.currentIdList = state.currentIdList.filter(
        (id) => id !== action.payload
      );
      fillCurrentIdList(state);
    },
    replaceItem(state, action: PayloadAction<{ from: number; to: number }>) {
      const { from, to } = action.payload;
      const idx = state.currentIdList.findIndex((id) => id === from);

      if (idx > -1) {
        state.currentIdList[idx] = to;
      }
    },
  },
});
