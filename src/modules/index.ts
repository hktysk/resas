import { combineReducers } from 'redux';
import prefectures from './prefectures';

const rootReducer = combineReducers({
  prefectures,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
