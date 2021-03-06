import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeHeader from '../custom/HomeHeader';
import HomeScreen from '../screens/HomeScreen';
import ReportPostScreen from '../screens/ReportPostScreen';
import AddPostScreen from '../screens/AddPostScreen';

const Stack = createStackNavigator();

export default function HomeNavigator({navigation, route}) {
  navigation.setOptions({
    //hides tab bar on report post screen
    tabBarVisible: route.state ? (route.state.index > 0 ? false : true) : null,
  });
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={() => ({
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#2bb76e'},
      })}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <HomeHeader navigation={navigation} title="big APPetite" />
          ),
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name="ReportPostScreen"
        component={ReportPostScreen}
        options={({route}) => ({title: route.params.heading})}
      />
      <Stack.Screen
        name="AddPostScreen"
        component={AddPostScreen}
        options={{title: 'Share your leftovers!', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
}
