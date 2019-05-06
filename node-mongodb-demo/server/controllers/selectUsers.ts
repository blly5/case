
import { findByList, addAlbumInfo } from '../modles/base';
import express from 'express';

const router = express.Router();

/**
 * @param { id:Number }
 * 
 */

router.get('/getByUserList', async (req:any, res:any, next) => {
        let _userId = req.query.id;
    
        if( Number(_userId) ) {
            let data = await findByList( _userId );
            return res.send( data );
        } 
        else {
            res.send('<h5>the params is undefined</h5>')
        }
        next();
});

router.get('/emitByUserInfo', async (req:any, res:any, next) => {
        let { query = {} } = req;
        let _userId = query.id;
})








export { router as selectUsers };
