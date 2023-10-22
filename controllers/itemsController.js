const { Item } = require('../models')


async function getAllItems(req, res) {
    try {
        const items = await Item.find()
        return res.json(items)
    } catch (e) {
        return res.status(500).send('Server error')
    }
}


async function createItem(req, res) {
    try {
        const item = new Item(req.body)
        await item.save()
        return res.status(201).json({
            item
        })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function updateItem(req, res) {
    try {
        const id = req.params.id
        const item = await Item.findByIdAndUpdate(id, req.body, { new: true })
        if (item){
            return res.status(200).json(item)
        }
        throw new Error('item not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteItem(req, res) {
    try{
        const id = req.params.id
        const item = await Item.findByIdAndDelete(id)
        if (item) {
            return res.status(200).json(item)
        }
        throw new Error('item not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllItems,
    createItem,
    updateItem,
    deleteItem

}