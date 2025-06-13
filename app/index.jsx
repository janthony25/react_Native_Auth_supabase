import { useRouter } from 'expo-router';
import { Text } from 'react-native';
import { Button } from 'react-native-web';
import ScreenWrapper from '../components/ScreenWrapper';

const index = () => {
    const router = useRouter();
  return (
    <ScreenWrapper>
      <Text>index</Text>
      <Button title='welcome' onPress={() => router.push('welcome')} />
    </ScreenWrapper>
  )
}

export default index