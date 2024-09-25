

const  getCustomers=async()=>{
    return await  fetch('/api/adminApi/customer').then((res) => res.json());
    }

export {
    getCustomers
}