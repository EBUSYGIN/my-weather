import { Header, HomeMiddle } from '@/ui/1-widgets';
import { MajorCities } from '@/ui/1-widgets/MajorCities/MajorCities';
import { Container } from '@/ui/4-shared';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <HomeMiddle />
        <MajorCities />
      </Container>
    </>
  );
}
