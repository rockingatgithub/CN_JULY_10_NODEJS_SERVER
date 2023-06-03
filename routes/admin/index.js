const express = require('express')
const Admin = require('../../model/admin')
const router = express.Router()

router.post('/', async (req, res) => {

    const admin = await Admin.create(req.body)

    return res.status(200).json({
        message: "Admin created successfully!",
        data: admin
    })

})

module.exports = router