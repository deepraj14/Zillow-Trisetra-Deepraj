import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Property from './Property';
const DisplayProperty = ({address}) => {


    const{data,isLoading,refetch}=useQuery(["property"],()=>{
        return axios.get(`https://catfact.ninja/${address}`).then((res)=>{return res.data}).catch((err)=>{console.log(err)});
    })

   
   return <Property data={data} refetch={refetch} isLoading={isLoading}/>
}

export default DisplayProperty
