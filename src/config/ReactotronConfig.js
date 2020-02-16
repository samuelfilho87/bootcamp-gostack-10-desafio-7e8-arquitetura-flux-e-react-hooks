import Reactotron from 'reactotron-react-native';
import { NativeModules } from 'react-native';
import reactotronSaga from 'reactotron-redux-saga';
import { reactotronRedux } from 'reactotron-redux';

// grabs the ip address
const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];

if (__DEV__) {
  const tron = Reactotron.configure({ host })
    .use(reactotronRedux())
    .useReactNative()
    .use(reactotronSaga())
    .connect();

  console.tron = tron;

  tron.clear();
}
