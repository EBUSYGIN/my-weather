import { Header, HomeMiddle } from '@/ui/1-widgets';
import { CityCard } from '@/ui/3-entities';
import { Container } from '@/ui/4-shared';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <HomeMiddle />
      </Container>
      <CityCard city='Москва' />
    </>
  );
}
