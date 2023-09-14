import { Layout } from '@/components/app';
import { AboutScreen, ExperienceScreen, HomeScreen } from '@/screens';
import DebugScreen from '@/screens/DebugScreen';

export default function Index() {
  return (
    <>
      <HomeScreen />
      <Layout>
        <AboutScreen />
        <ExperienceScreen />
        <DebugScreen />
      </Layout>
      <DebugScreen />
    </>
  );
}
