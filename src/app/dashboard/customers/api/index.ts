
import { customerFace } from "../types";
import { v4  as uuidv4 } from 'uuid';

const  getCustomers=async()=>{
    return await  fetch('/api/adminApi/customer').then((res) => res.json());
    }

    const addCustomer=async(cusBody:customerFace)=>{
        return await fetch('/api/adminApi/customer',{method:'POST',headers:{ 'Content-Type': 'application/json' },body: JSON.stringify({ ...cusBody, id: uuidv4() })})
    }



    // const addCustomer = async (customer: Omit<customerFace, 'id'>) => {
//   const res = await fetch('/api/adminApi/customer', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ ...customer, id: uuidv4() }), // افزودن id یکتا
//   });

//   if (!res.ok) {
//     const errorText = await res.text();
//     throw new Error(errorText || 'Error adding customer');
//   }

//   return res.json(); // اگر موفق بود، نتیجه را برمی‌گرداند
// };

export {
    getCustomers,
    addCustomer
}