import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Setting from '../screan/setting';

export default function homeStackNaviha () {
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name="stackSetting" component={Setting} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

