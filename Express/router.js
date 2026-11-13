const express = require('express')
const router = express.Router()
const {reader,creator,updater,deleter} = require('./controller')


// router.get('/',reader)


// router.post('/',creator)


// router.put('/:id',updater)


// router.delete('/:id',deleter)


router.route('/').get(reader).post(creator)

router.route('/:id').put(updater).delete(deleter)

module.exports = router

