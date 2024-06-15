import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screan/home';

export default function homeStackNaviha () {
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name="stackHome" component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

