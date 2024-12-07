import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Homepage from "./screens/Homepage";
import FindScout from "./screens/FindScout";
import {NavigationContainer, NavigationIndependentTree} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import {Chat} from "./screens/Chat";
import {Profile} from "./screens/Profile";
import {Map} from "./screens/Map";

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <NavigationIndependentTree>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Home") {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name === "Chat") {
                            iconName = focused ? "chatbox-ellipses" : "chatbox-ellipses-outline";
                        } else if (route.name === "Map") {
                            iconName = focused ? "location" : "location-outline";
                        } else if (route.name === "Profile") {
                            iconName = focused ? "person" : "person-outline";
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: "black",
                    tabBarStyle: {
                        height: 70,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        position: "absolute",
                        elevation: 50,
                        paddingTop: 5,
                    },
                    tabBarIconStyle: {
                        width: 50,
                        height: 50,
                    },
                    tabBarLabel: '',
                    headerShown: false,
                })}
                id="routes">
                <Tab.Screen name="Home" component={Homepage}/>
                <Tab.Screen name="Chat" component={Chat}/>
                <Tab.Screen name="Map" component={Map}/>
                <Tab.Screen name="Profile" component={Profile}/>
            </Tab.Navigator>
        </NavigationIndependentTree>
    );
}

const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screens: {
        BottomBar: {
            screen: TabNavigator,
            options: {
                headerShown: false,
            }
        },
        FindScout: FindScout,
    },
});


export default function App() {
  return (
      <NavigationContainer>
          <RootStack.Navigator initialRouteName="BottomBar" id="bottomBar">
              <RootStack.Screen
                  name="BottomBar"
                  component={TabNavigator}
                  options={{ headerShown: false }}
              />
              <RootStack.Screen
                  name="FindScout"
                  component={FindScout}
              />
          </RootStack.Navigator>
      </NavigationContainer>
  );
}
