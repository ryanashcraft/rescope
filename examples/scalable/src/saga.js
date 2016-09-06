import { takeEvery } from 'redux-saga';
import { fork, put, select } from 'redux-saga/effects';

function* onChangeSize() {
  const counter = yield select((state) => state.counter);
  const isToggled = yield select((state) => state.toggle);
  yield put({ type: 'INCREMENT', by: isToggled && counter >= 10 ? 2 : 1 });
}

function* watchKittenChangeSize() {
  yield takeEvery('CHANGE_SIZE', onChangeSize);
}

export default function* root() {
  yield [
    fork(watchKittenChangeSize),
  ];
}