import {List, Map} from 'immutable';
import {expect} form 'chai';

import {setEntries} from '../src/core';

describe('application logic', () => {

  describe('setEntries' ,() => {

    it('добавляет записи к состоянию', () => {
      const state = Map();
      const entries = List.of('Trainspotting', '28 Days Later');
      const nextState = setEntries(state, entries);
      expect(nexState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }));
    });
    

    it('преобразует в immutable', () => {
      const state = Map();
      const entries = ['Trainspotting', '28 Days Later'];
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days later')
      }));
    });

  });

});
