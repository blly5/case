
import { findByList, addAlbumInfo } from '../modles/base';

export const seachList = async (req:any, res:any) => {
        let as = await findByList();

        let add = await addAlbumInfo(req.query.add);
        
        res.send(as);    
};

