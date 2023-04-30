import express from 'express';

const router = express.Router();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post('/',(req,res)=>{
   
    const result = req.body;
    jwt.sign({result},secretKey,{expiresIn : "2h"},(err,token)=>{

        if(err){
            res.send('something went wrong')
        }
        res.status(200).send({result:result, auth: token})
    });
  
})

function verifyToken(req,res,next){
    const baererHeader = req.headers['authorization'];
 
    if(typeof baererHeader !== 'undefined'){
       const beaerToken = baererHeader.split(' ');
       const token = beaerToken[1];
       req.token = token.substring(1,token.length - 1)
       next()
    }else{
        res.send({
            result:'invalid addtoken'
        })
    }
}
export default router;