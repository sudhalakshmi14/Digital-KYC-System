const { documents, audits } = require('../data/store');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

const uploadDocument = (req, res) => {
    const { user_id, doc_type } = req.body;
    const file_path = req.file.path;
    const doc = { id: uuidv4(), user_id, doc_type, file_path, verified: false };
    documents.push(doc);
    audits.push({ user_id, action: 'upload_document', status: 'success', timestamp: new Date() });
    res.status(201).json(doc);
};

module.exports = { uploadDocument, upload };