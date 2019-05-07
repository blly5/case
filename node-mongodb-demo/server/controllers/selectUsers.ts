

import express from 'express';

import { findByList, addAlbumInfo } from '../modles/base';
import { graphql } from 'graphql';

const router = express.Router();

/**
 * @param { id:Number }
 */

router.get('/getByUserList', async (req:any, res:any, next) => {
        let _userId = req.query.id;
    
        if( _userId ) {
            let data = await findByList(_userId);
            if(!data) {
                res.send( {msg:'未查询到'} );
            }
             res.send(data);
        } 
        else {
            res.send('<h5>the params is undefined</h5>')
        }
        next();
});


router.get('/emitByUserInfo', async (req:any, res:any, next) => {
        let { query = {} } = req;
        if( query.name && query.team ) {
            let data = await addAlbumInfo(query.name, query.team, query.age||0, query.exstr||'暂无');
            console.log(data);
            res.send( data );
        } else {
            res.send({
                'msg' : 'error'
            });
        }
})

export { router as selectUsers };
