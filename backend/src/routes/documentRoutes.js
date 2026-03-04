const express = require('express');
const router = express.Router();
const { uploadDocument, upload } = require('../controllers/documentController');
const auditMiddleware = require('../middlewares/auditMiddleware');

router.post('/', upload.single('document'), auditMiddleware('upload_document'), uploadDocument);

module.exports = router;