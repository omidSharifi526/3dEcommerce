
import { useQuery } from "@tanstack/react-query";
import { getCustomers,addCustomer,deleteCustomer,updateCustomer} from "../api";
import { customerFace } from "../types";
import { useMutation,useQueryClient} from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';


const useGetustomers =  () => {
return useQuery({ queryKey: ['customers'], queryFn: getCustomers,
  select:(data:any)=>{
    return data
} })
  };

// addMeetingSuccess: (data: any) => voi
const useAddCustomer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: any) => addCustomer(data), // تابع فچینگ برای Mutation
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['customers'],
        // refetchActive: true, // مثلا فقط کوئری‌های فعال را دوباره واکشی کن
      });
      // addMeetingSuccess(data); // تابع فراخوانی موفقیت‌آمیز
    },
    onError: (error: any) => {
      console.error('Error adding meeting:', error); // مدیریت خطا
      // می‌تونی یک نوتیفیکیشن یا پیام خطا اینجا اضافه کنی
    },
  });

};
const useUpdateCustomer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: any) => updateCustomer(data,), // تابع فچینگ برای Mutation
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['customers'],
        // refetchActive: true, // مثلا فقط کوئری‌های فعال را دوباره واکشی کن
      });
      // addMeetingSuccess(data); // تابع فراخوانی موفقیت‌آمیز
    },
    onError: (error: any) => {
      console.error('Error adding meeting:', error); // مدیریت خطا
      // می‌تونی یک نوتیفیکیشن یا پیام خطا اینجا اضافه کنی
    },
  });

};

const useDeleteCustomer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: any) => deleteCustomer(id), // تابع فچینگ برای Mutation
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['customers'],
        // refetchActive: true, // مثلا فقط کوئری‌های فعال را دوباره واکشی کن
        
      });

    },
    onError: (error: any) => {
      console.error('Error adding meeting:', error); // مدیریت خطا
      // می‌تونی یک نوتیفیکیشن یا پیام خطا اینجا اضافه کنی
    },
  });

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
    useAddCustomer,
    useDeleteCustomer,
    useUpdateCustomer
  }


