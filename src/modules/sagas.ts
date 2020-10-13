import { combineSagas } from './redux-helper';
import userSaga from './user/sagas';

const rootSaga = combineSagas({
  user: userSaga,
});

export default rootSaga;
