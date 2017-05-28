import { TabNavigator, StackNavigator } from 'react-navigation';

import LoginForm from '../components/LoginForm';
import EventList from '../components/EventList';
import Browse from '../components/Browse';
import Profile from '../components/Profile';
import EventCreate from '../components/EventCreate';
import EventEdit from '../components/EventEdit';

export const MainNavigator = TabNavigator({
  login: { screen: LoginForm },
  main: {
    screen: TabNavigator({
      feed: { screen: EventList },
      browse: { screen: Browse },
      profile: {
        screen: StackNavigator({
          profile: {
            screen: Profile,
            navigationOptions: () => ({
              title: 'Profile'
            })
          },
          create: { screen: EventCreate }
        })
      }
    }, {
      tabBarPosition: 'bottom'
    })
  }
}, {
  navigationOptions: {
    tabBarVisible: false
  },
  lazy: true,
  swipeEnabled: false
});
