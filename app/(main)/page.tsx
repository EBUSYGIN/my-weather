import { HomeMiddle, MajorCities } from '@/ui/1-widgets';
import { cities } from '@/assets/config/majorCities.config';

export default function Home() {
  return (
    <main>
      <HomeMiddle />
      <MajorCities cities={cities} />
    </main>
  );
}
