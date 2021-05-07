


export const save = (files, prop: string) => {

    if (!files) {
        // res.status(400).json('file is needed');
        return {
            ok: false,
            msg: 'file is needed'
        };
    }
    let type = '';
    let hash = new Date().getTime();        
    let day = new Date().getUTCDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    let fileItem = files[prop];
    try {
        type = fileItem.mimetype.split('/')[1];
        type = type == 'jpeg' ? 'jpg' : type;

        if (type != 'png' && type != 'jpg') {
            // res.status(400).json('invalid type(' + type + ') extension.');                
            return {
                ok: false,
                msg: 'invalid type(' + type + ') extension.'
            };
        }
    } catch (e) {
        // res.status(400).json('type not valid');
        return {
            ok: false,
            msg: 'fatal error',
        };
    }
    fileItem.mv('./public/storage/files/images/' + year + '/' + month + '/' + day + '/' + hash + '.' + type);        

    return {
        ok: true,
        msg: 'done',
        hash,
        type
    };

}