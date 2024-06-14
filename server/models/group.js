const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    description: String,
    members: [String],
});

const Group = mongoose.model("Group", groupSchema);

async function createGroup(name, description) {
    const group = await getGroupByName(name);
    if(group) throw Error('Name already in use');

    const newGroup = await Group.create({
        name: name,
        description: description
    });

    return newGroup;
}

async function getGroup(id) {
    const group = await getGroup(id);
    if(!group) throw Error('Group not found');
    return group;
}

async function updateGroupName(id, name) {
    const group = await Group.updateOne({"_id": id}, {$set: {name: name}});
    return group;
}

async function deleteGroup(id) {
    await Group.deleteOne({"_id": id});
}

async function getGroupByName(name) {
    return await Group.findOne({"name": name});
}

async function getGroup(id) {
    return await Group.findOne({"_id": id});
}

module.exports = {createGroup, getGroup, updateGroupName, deleteGroup};