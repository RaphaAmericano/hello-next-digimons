import { Digimon } from "@/types/digimon";
import Image from "next/image";
import Link from "next/link";

interface IProps extends Digimon {}

export default function Card({ name, img, level }: IProps){
    return <div>
        <h2>{name}</h2>
        <h3>{level}</h3>
        <Image 
            src={img} 
            width={100} 
            height={100} 
            alt={`Picture of ${name}`} />
        <Link href={`/digimon/${name.toLowerCase()}`}>Detalhes</Link>
    </div>
}