import {List} from 'immutable';

export function setEntries(stat, entries) {
  return state.set('entries', List(entries));
}
