
import { getDigimons } from '@/actions/get-digimons';
import Card from '@/components/Card';
import { Digimon } from '@/types/digimon';

export default async function Home() {
  const digimons = await getDigimons();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {digimons ? digimons.map((digimon:Digimon) => <Card  key={digimon.name} {...digimon} />) : (<div>Loading</div>)}
    </main>
  )
}