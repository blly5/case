

import express from 'express';

import { findByList, addAlbumInfo } from '../modles/base';
import { graphql } from 'graphql';

const router = express.Router();

/**
 * @param { id:Number }
 */

router.get('/getByUserList', async (req:any, res:any, next) => {
        let _userId = req.query.id;
    
        if( Number(_userId) ) {
            let data = await findByList(_userId);
            return res.send( data );
        } 
        else {
            res.send('<h5>the params is undefined</h5>')
        }
        next();
});


router.get('/emitByUserInfo', async (req:any, res:any, next) => {
        let { query = {} } = req;
        if( query.name && query.team ) {
            let data = await addAlbumInfo(query.name, query.team, query.age||0, query.exstr||'暂无' ,function( data:any ) { res.send(data); });
            console.log(data);
            res.send( data );
        } else {
            res.send({
                'msg' : 'error'
            });
        }
})

export { router as selectUsers };
