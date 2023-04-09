import {} from '@reduxjs/toolkit';
import { CompareState } from './compare.types';

export function fillCurrentIdList(state: CompareState): CompareState {
  const q = state.itemsQuantity - state.currentIdList.length;

  if (q > 0) {
    const items = state.items
      .filter(({ id }) => !state.currentIdList.includes(id))
      .slice(0, q)
      .map((item) => item.id);

    if (items.length) {
      state.currentIdList = [...state.currentIdList, ...items];
    }
  } else if (q < 0) {
    state.currentIdList = state.currentIdList.slice(0, state.itemsQuantity);
  }
  return state;
}
