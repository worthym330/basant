// models/Enquiry.js
import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    mobile: {
      type: String,
    },
  },
  { timestamps: true }
);

export default EnquirySchema;
