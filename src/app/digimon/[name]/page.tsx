import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next'
import { getDigimon,  getDigimons } from "@/api";

import Image from "next/image";
import { Digimon } from '@/types/digimon';

interface IProps {
  params: {
    name: string
  },
  searchParams: any 
}

export async function generateStaticParams(){
  const digimons = await getDigimons();
  return digimons.map((digimon: Digimon ) => ({ name: digimon.name.toLowerCase()}))
}


export default async function Page( { params: { name } , searchParams }: IProps ) {
  const [digimon] = await getDigimon(name);  
  const { name:digimon_name, level, img} = digimon;
  return (
    <div>
      {/* {JSON.stringify(name)} */}
      <h1>{digimon_name}</h1>
      <h2>{level}</h2>
      <Image 
        src={img} 
        width={150} 
        height={150} 
        alt={`Picture of ${name}`} />
    </div>
  );
}
