import InnerLayout from '../components/Layout/Layout';
import Layout from '../components/Layout/Layout';
import AboutScreen from '../screens/AboutScreen';
import DebugScreen from '../screens/DebugScreen';
import ExperienceScreen from '../screens/ExperienceScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

export default function Index() {
  return (
    <>
      <HomeScreen />
      <InnerLayout>
        <AboutScreen />
        <ExperienceScreen />
        <DebugScreen />
      </InnerLayout>
      <DebugScreen />
    </>
  );
}
