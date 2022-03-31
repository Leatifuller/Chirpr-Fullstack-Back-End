import * as express from 'express';
const router=express.Router();
import db from './db';


router.get ('/api/chirps', async(req,res)=>{
  try {
      res.json(await db. chirps.all())

  } catch(e) {
       res.send('Hello') 
  }
 
});

router.get ('/apichirps/:id', async (req,res)=>{
try  {
        res.json((await db.chirps.one(req.params.id))[0]);

    } catch (e){
        res.sendStatus(500);
    }
})



export default router;