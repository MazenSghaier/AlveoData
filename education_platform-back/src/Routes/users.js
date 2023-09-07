import express from 'express'

const router = express.Router();

const users =[
    {
        FirstName:"John",
        LasttName:"Rox",
        age:25
    },
    {
        FirstName:"Ali",
        LasttName:"imen",
        age:8
    }
]

router.get("/", (req,res) => {
    res.send(users);
});

router.post('/',(req,res) => {
    console.log('POST ROUTE REACHED')
});

export default router ;