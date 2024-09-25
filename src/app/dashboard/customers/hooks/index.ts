
import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../api";

const useGetustomers =  () => {
return useQuery({ queryKey: ['customers'], queryFn: getCustomers,
  select:(data:any)=>{
    return data
} })
  };
  

  export{
    useGetustomers
  }


