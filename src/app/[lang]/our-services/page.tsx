import { GetApi } from "@/lib/axios";
import ClientOurServices from "./clientServicePage";


export default async function OurServicePage(){
    const service = await GetApi(`/services/`) as { results: { name: string; text: string }[] };
    return <ClientOurServices data={service}/>
}