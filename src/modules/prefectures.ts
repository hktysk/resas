import { Prefecture } from '../types';

export const init: Prefecture[] = [];

export const ActionType = {
  ADD: '@PREFECTURES/ADD',
  REMOVE: '@PREFECTURES/REMOVE',
} as const;

export const prefecturesAction = {
  add: (prefecture: Prefecture) => ({
    type: ActionType.ADD,
    payload: prefecture,
  }),

  remove: (prefecture: Prefecture) => ({
    type: ActionType.REMOVE,
    payload: prefecture,
  }),
};

export type ReturnTypeOfAction = (
  | ReturnType<typeof prefecturesAction.add>
  | ReturnType<typeof prefecturesAction.remove>
);

export default function reducer(state = init, action: ReturnTypeOfAction) {
  switch (action.type) {
    case ActionType.ADD:
      return [...state, action.payload];

    case ActionType.REMOVE:
      return state.filter((pref) => pref.prefName !== action.payload.prefName);

    default:
      return state;
  }
}
