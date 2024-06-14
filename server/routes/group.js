const express = require("express");
const Group = require('../models/group');
const router = express.Router();

router
    .post('/createGroup', async (req, res) => {
        try{
            const group = await Group.createGroup(req.body.name, req.body.description);
            res.send(group);
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .get('/getGroup', async (req, res) => {
        try{
            const group = await Group.getGroup(req.body.id);
            res.send(group);
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .put('/updateGroupName', async (req, res) => {
        try{
            const group = await Group.updateGroupName(req.body.id, req.body.name);
            res.send(group);
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .delete('/deleteGroup', async (req, res) => {
        try{
            const group = await Group.deleteGroup(req.body.id);
            res.send({ success: "group deleted" });
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    });

module.exports = router;