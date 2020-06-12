import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Details from '~/pages/Details';

const Routes = createAppContainer(createSwitchNavigator({
  Main,
  Details,
}));

export default Routes;
