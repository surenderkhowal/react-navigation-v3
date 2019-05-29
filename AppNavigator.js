import {createStackNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'

const AppNavigator =  createStackNavigator({
    Home:HomeScreen,
    DetailsScreen : DetailsScreen
},
{
    initialRouteName:"Home"
}

);

export default createAppContainer(AppNavigator);