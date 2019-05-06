
import { findByList, addAlbumInfo } from '../modles/base';
import express from 'express';

const router = express.Router();

router.get('/',(req:any, res:any, next) => {

        next();
});

export { router as selectUsers };



