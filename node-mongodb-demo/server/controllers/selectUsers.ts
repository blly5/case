

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
            let data = await findByList( _userId );
            return res.send( data );
        } 
        else {
            res.send('<h5>the params is undefined</h5>')
        }
        next();
});


/**
 * @param {id:Number, name:String}
 */

router.get('/emitByUserInfo', async (req:any, res:any, next) => {
        let { query = {} } = req;
        
        let _userId = query.id;
        let _name = query.name;

        if(_userId&&_name) {

        }
        else {
            res.send();
        }
})

export { router as selectUsers };
