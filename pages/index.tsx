import { NestedLayout } from '../components';
import AboutScreen from '../screens/AboutScreen';
import DebugScreen from '../screens/DebugScreen';
import ExperienceScreen from '../screens/ExperienceScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

export default function Index() {
  return (
    <>
      <HomeScreen />
      <NestedLayout>
        <AboutScreen />
        <ExperienceScreen />
        <DebugScreen />
      </NestedLayout>
      <DebugScreen />
    </>
  );
}
