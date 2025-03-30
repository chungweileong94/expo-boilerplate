import { Stack, useLocalSearchParams } from 'expo-router';

import { Container } from '~/components/container';
import { ScreenContent } from '~/components/screen-content';

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: 'Details' }} />
      <Container>
        <ScreenContent path="screens/details.tsx" title={`Showing details for user ${name}`} />
      </Container>
    </>
  );
}
