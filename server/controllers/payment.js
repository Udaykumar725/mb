// import { instance } from "../index.js";
// import crypto from "crypto";
// import handleAsyncError from "../middlewares/handleAsyncError.js";



// export const processPayment = handleAsyncError(async (req, res) => {

//     const amount=req.body?.amount;
//     if(!amount){
//         // return error
//     }
//   const options = {
//     amount: Number(amount * 100),
//     currency: "INR",
//   };
//   const order = await instance.orders.create(options);
//   res.status(200).json({
//     success: true,
//     order,
//   });
// });

// //Send API Key
// export const sendAPIKey = handleAsyncError(async (req, res) => {
//   res.status(200).json({
//     key: process.env.RAZORPAY_API_KEY,
//   });
// });

// //Payment Verification
// export const paymentVerification = handleAsyncError(async (req, res) => {
//   const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
//     req.body;
//   const body = razorpay_order_id + "|" + razorpay_payment_id;
//   const expectedSignature = crypto
//     .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
//     .update(body.toString())
//     .digest("hex");
//   const isAuthentic = expectedSignature === razorpay_signature;
//   if (isAuthentic) {
//     return res.status(200).json({
//       success: true,
//       message: "Payment verified successfully",
//       reference: razorpay_payment_id,
//     });
//   } else {
//     return res.status(200).json({
//       success: false,
//       message: "Payment verification failed",
//     });
//   }
// });
