
import { useQuery } from "@tanstack/react-query";
import { getCustomers,addCustomer } from "../api";
import { customerFace } from "../types";
import { useMutation } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';


const useGetustomers =  () => {
return useQuery({ queryKey: ['customers'], queryFn: getCustomers,
  select:(data:any)=>{
    return data
} })
  };



// تابعی برای افزودن مشتری جدید


// هوک استفاده از Mutation برای افزودن مشتری
// export const useAddCustomer = () => {
//   return useMutation((cusBody:customerFace)=>{addCustomer},
//     {
//     onSuccess: () => {
//       alert('Customer added successfully!');
//     },
//     onError: (error: any) => {
//       alert('Error adding customer: ' + error.message);
//     },
//   });
// };

// const useAddCustomer=()=>{
//   return useMutation(addCustomer,{

//   })
// }

  

  export{
    useGetustomers,
    // useAddCustomer
  }


