import produce, { Draft } from 'immer';
import { ForkEffect } from 'redux-saga/effects';

import { RootAction } from './actions';

export const combineSagas = (param: { [key: string]: ForkEffect<never>[] }) =>
  function* () {
    const targetSagas = Object.values(param).flat();

    for (let i = 0; i < targetSagas.length; i++) {
      yield targetSagas[i];
    }
  };

export function createReducer<IState, IAction extends RootAction>(
  initialState: IState,
  handleMap: InitialHandler<IState, RootAction>
) {
  return (state = initialState, action: IAction) =>
    produce<IState, Draft<any>>(state, draft => {
      const handler = handleMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
}

export type InitialHandler<TState, TRootAction extends RootAction> = {
  [P in TRootAction['type']]?: (state: TState, action: TRootAction) => TState;
};
