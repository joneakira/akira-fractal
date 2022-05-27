import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { NativeBaseProvider } from 'native-base';
import Router from './src/router/Router';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    </NavigationContainer>
    
  );
}

registerRootComponent(App)