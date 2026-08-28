
import type { ServiceData } from "../data";
import ServiceHero from "./ServiceHero";

export default function Service({service}:{service?:ServiceData}){
    return(<ServiceHero  service={service}/>)
}