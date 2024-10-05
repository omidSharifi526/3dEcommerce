
import mongoose from 'mongoose';

const FormSchema = new mongoose.Schema({
  formId: {
    type: String,
    required: true,
  },
  fields: [{
    id: { type: String, required: true },
    label: { type: String, required: true },
    type: { type: String, required: true },
    required: { type: Boolean, default: false },
  }],
});

// export default mongoose.models.Form || mongoose.model('Form', FormSchema);

const Form = mongoose.models.Form || mongoose.model('Form', FormSchema);

export default Customer;
