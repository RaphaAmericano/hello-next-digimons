"use server"

import { getDigimon as get } from "@/api"

export async function getDigimon(name:string){
    const [digimon] = await get(name)
    const { name:digimon_name, ...props } = digimon;
    return { digimon_name, ...props }
    
}