// const CustomerSchema = new mongoose.Schema({
//     username: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     id:{type:String}
//   });


export interface customerFace{
    username: string;
    email: string;
    password: string;
    // id: string;
}