import lodash from 'lodash';
import { Prefecture } from '../../types';
import reducer, {
  init,
  ActionType,
  prefecturesAction,
} from '../prefectures';

describe('都道府県の状態管理のテスト', () => {
  let state: Prefecture[];
  const payload: Prefecture = {
    prefName: '北海道',
    prefCode: 0,
  };

  beforeEach(() => {
    state = lodash.cloneDeep(init);
  });

  describe('reducer', () => {
    it('add', () => {
      const action = ({
        type: ActionType.ADD,
        payload,
      });
      const result: Prefecture[] = [payload];

      expect(reducer(state, action)).toEqual(result);
    });

    it('remove', () => {
      const action = ({
        type: ActionType.REMOVE,
        payload,
      });
      const result: Prefecture[] = [];
      state.push(payload);

      expect(reducer(state, action)).toEqual(result);
    });
  });

  describe('action', () => {
    it('add', () => {
      const result = ({
        type: ActionType.ADD,
        payload,
      });

      expect(prefecturesAction.add(payload)).toEqual(result);
    });

    it('remove', () => {
      const result = ({
        type: ActionType.REMOVE,
        payload,
      });

      expect(prefecturesAction.remove(payload)).toEqual(result);
    });
  });
});
