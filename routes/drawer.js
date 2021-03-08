import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import ContactStack from "./contactStack";

const RootDrawer = createDrawerNavigator({
   Home: {
      screen: HomeStack,
   },
   About: {
      screen: AboutStack,
   },
   Contact: {
      screen: ContactStack,
   },
});

export default createAppContainer(RootDrawer);
