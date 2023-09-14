import { Digimon } from "@/types/digimon"
import type { AxiosResponse } from "axios"
import axios from "axios"
import getConfig from "next/config"

// const { publicRuntimeConfig } = getConfig();
// console.log(publicRuntimeConfig)

const service = axios.create({
    baseURL: "https://digimon-api.vercel.app/api/digimon",
    timeout: 10000,
    headers: {
        "Content-Type":"application/json"
    }
});

function parseResponse(response: AxiosResponse){
    return response.data
}

service.interceptors.response.use(parseResponse)

export async function getDigimons(){
    return service.get<never, Digimon[]>("/")
}

export async function getDigimon(name:string){
    return service.get<never, Digimon[]>("/name/" + name)
}