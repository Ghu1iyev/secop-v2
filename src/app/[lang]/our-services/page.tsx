import { GetApi } from "@/lib/axios";
import ClientOurServices from "./clientServicePage";

export default async function OurServicePage(){
    const service = await GetApi(`/services`);
    console.log('d', service);
    return <ClientOurServices />
}