import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://calebnyong02_db_user:invoiceIQ123@cluster0.u8q3imy.mongodb.net/InvoiceIQ').then(() => { console.log('DB CONNECTED') });
}



//invoiceIQ123