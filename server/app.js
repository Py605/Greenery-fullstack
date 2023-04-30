import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import cors from "cors";
import loginRoute from './routes/loginRoute.js'
import sendmail from './services/emailService.js'
import emailTemplate from "./services/emailTemplate.js";

config({ path: "./config/config.env" });

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", paymentRoute);
app.use("/login",loginRoute);
app.get("/api/getkey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
});
app.post("/api/sendgmail",(req,res)=>{
  console.log(req.body.gmail);
  console.log(req.body.referenceNum);
  if(req.body.gmail == null){
    console.log('email not provide');
  }
  else {
    sendmail({
      to: req.body.gmail,
      subject: 'Order Confirmation From Greenery',
      html: emailTemplate({
        orderId: 'Pay_UKAH652LMOQ',
      })
    })
  }
 
  res.status(200).send({data :'ok'})
})
