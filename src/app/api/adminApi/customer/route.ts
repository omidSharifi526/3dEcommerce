import dbConnect from '../../../../dbConnect';
import Customer from '@/model/Customer';
import { ObjectId } from 'mongodb';

export async function POST(req: Request) {
    await dbConnect();
  
    const body = await req.json();
    console.log('Received data:', body); // چاپ داده‌های دریافتی
  
    // بررسی وجود فیلدهای ضروری
    if (!body.userName || !body.email || !body.password) {
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
  
      return new Response(JSON.stringify({ message: 'مشتری با موفقیت ثبت شد', customer: newCustomer }),{ status: 200});
    } 
    catch (error) {
      console.error('Error saving customer:', error);
      return new Response(JSON.stringify({ message: 'Error saving customer' }), { status: 500 });
    }
  }



  export async function GET() {
    await dbConnect();
    try {
      const customers = await Customer.find();
      return new Response(JSON.stringify(customers), { status: 200 });
      
    } catch (error) {
      
      return new Response(JSON.stringify({message:'Error Get Customer'}))
    }
  }

  export async function DELETE(req: any) {
    await dbConnect();
    const body = await req.json();
    
    if (!body.id) {
      return new Response(JSON.stringify({ message: 'Customer ID is required' }), { status: 400 });
    }
  
    try {
      const customers = await Customer.deleteOne({ id: body.id });
      
      if (customers.deletedCount === 0) {
        return new Response(JSON.stringify({ message: 'Customer not found' }), { status: 404 });
      }
  
      return new Response(JSON.stringify({ message: 'Customer deleted successfully' }), { status: 200 });
      
    } catch (error) {
      return new Response(JSON.stringify({ message: 'Error Delete Customer' }), { status: 500 });
    }
  }

  export async function PUT(req: any) {
    await dbConnect();
    const body = await req.json();
    
    // بررسی اینکه شناسه مشتری ارسال شده است یا نه
    if (!body.id) {
      return new Response(JSON.stringify({ message: 'Customer ID is required' }), { status: 400 });
    }
  
    try {
      // تبدیل شناسه به ObjectId و بررسی صحت آن
      const customerId = body.id; // اطمینان حاصل کنید که id یک رشته است
  
      // به‌روزرسانی اطلاعات مشتری
      const updatedCustomer = await Customer.updateOne(
        { id: customerId }, // مشتری موردنظر با استفاده از id
        { $set: body } // داده‌های جدید برای به‌روزرسانی
      );
  
      if (updatedCustomer.matchedCount === 0) {
        return new Response(JSON.stringify({ message: 'Customer not found' }), { status: 404 });
      }
  
      return new Response(JSON.stringify({ message: 'Customer updated successfully' }), { status: 200 });
      
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ message: 'Error updating customer' }), { status: 500 });
    }
  }
  
  



