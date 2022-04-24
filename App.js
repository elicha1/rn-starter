import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ConterScreen from "./src/screens/ConterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/squareScreen";
import TextScrean from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    List:ListScreen,
    Image: ImageScreen,
    Counter: ConterScreen,
    Color: ColorScreen,
    Square : SquareScreen,
    Text:TextScrean,
    Box: BoxScreen

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
