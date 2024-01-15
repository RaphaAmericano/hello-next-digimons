"use server"

import { getDigimon as get } from "@/api"

export async function getDigimon(name:string){
    try {
        const result = await get(name);
        const [digimon] = result
        const { name:digimon_name, ...props } = digimon;
        return { digimon_name, ...props }
    } catch (e) {
        return e
    }
    
}