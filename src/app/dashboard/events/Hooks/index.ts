import { getNews } from "../api";
import { useQuery } from "@tanstack/react-query";


const useGetNews =  () => {
    return useQuery({ queryKey: ['getNews'], queryFn: getNews,
      select:(data:any)=>{
        return data
    } })
      };
    

      export {
        useGetNews
      }

