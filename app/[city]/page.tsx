import { CityWeather } from '@/ui/1-widgets';
import { NavToHome } from '@/ui/4-shared';

async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const decodedCity = decodeURIComponent(city);

  return (
    <main>
      <NavToHome />
      <CityWeather city={decodedCity} />
    </main>
  );
}

export default CityPage;
