import { Stack, Link } from 'expo-router';

import { Button } from '~/components/button';
import { Container } from '~/components/container';
import { ScreenContent } from '~/components/screen-content';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Home" />
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link>
      </Container>
    </>
  );
}
