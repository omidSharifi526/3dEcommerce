import dbConnect from '../../../../dbConnect';
import Customer from '@/model/Customer';


export async function POST(req: Request) {
    await dbConnect();
  
    const body = await req.json();
    console.log('Received data:', body); // چاپ داده‌های دریافتی
  
    // بررسی وجود فیلدهای ضروری
    if (!body.username || !body.email || !body.password) {
      return new Response(JSON.stringify({ message: 'Username, email, and password are required' }), { status: 400 });
    }
  
    try {
      // بررسی وجود کاربر با ایمیل مشابه
      const existingCustomer = await Customer.findOne({ email: body.email });
      if (existingCustomer) {
        return new Response(JSON.stringify({ message: 'Email already exists' }), { status: 400 });
      }
  
      const newCustomer = new Customer(body);
      await newCustomer.save();
      console.log('Customer saved successfully:', newCustomer);
  
      return new Response(JSON.stringify({ message: 'New Customer Added', customer: newCustomer }), { status: 200 });
    } catch (error) {
      console.error('Error saving customer:', error);
      return new Response(JSON.stringify({ message: 'Error saving customer' }), { status: 500 });
    }
  }



  export async function GET(params:any) {
    

    try {
      const customers = await Customer.find();
      return new Response(JSON.stringify(customers), { status: 200 });
      
    } catch (error) {
      
      return new Response(JSON.stringify({messahe:'Error Get Customer'}))
    }
  }
  



// export async function POST(req) {
//     await dbConnect();
//     const { email, password } = await req.json();
  
//     // بررسی وجود کاربر
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return new Response('User already exists', { status: 400 });
//     }
  
//     // هش کردن رمز عبور
    
  
//     // ایجاد کاربر جدید
//     const newUser = new User({ email, password: password  });
//     await newUser.save();
  
//     return new Response('User created', { status: 201 });
//   }