"use server"

import { getDigimons as get } from "@/api"

export async function getDigimons(){
    const result = await get()
    return result
    
}