import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/home";
import Fractal from '../screens/fractal'

const Drawer = createDrawerNavigator();

const Router = () => {
  return(
    <Drawer.Navigator
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#200033',
        paddingTop: 50
      },
      drawerActiveTintColor: '#ffffa0',
      drawerInactiveTintColor: '#ffffe0'
    }}
    initialRouteName="Home">
      <Drawer.Screen
      name='Home'
      component={Home}
      options={{
        headerStyle: {
          backgroundColor: '#200033'
        },
        headerTintColor: '#ffffe9'
      }} />
      <Drawer.Screen
      name='Fractal'
      component={Fractal}
      options={{
        headerStyle: {
          backgroundColor: '#200033'
        },
        headerTintColor: '#ffffe9'
      }} />
    </Drawer.Navigator>
  )
}

export default Router;