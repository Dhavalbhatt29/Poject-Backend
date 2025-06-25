const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        const folder = req.body.folder
        const dir = path.join(__dirname,'..','assets', folder);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },

    filename:(req, file, cb) => {
        const filname = Date.now() + path.extname(file.originalname);
        cb(null, filname);
    }
});


const upload = multer({
    storage: storage,
})


module.exports = upload;