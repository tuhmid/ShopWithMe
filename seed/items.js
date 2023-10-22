const db = require('../db');
const { Item } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error'));

const seedItems = async () => {
    const items = [
        {
            name: 'medication for tim',
            store: 'walgreens'
        },
        {
            name: 'nike air forces',
            store: 'footlocker'
        },
        {
            name: 'headphones',
            store: 'bestbuy'
        },
        {
            name: 'coffee maker',
            store: 'target'
        },
        {
            name: 'laptop',
            store: 'apple'
        },
        {
            name: 'backpack',
            store: 'amazon'
        },
        {
            name: 'smartphone',
            store: 'verizon'
        },
        {
            name: 'running shoes',
            store: 'adidas'
        },
        {
            name: 'gaming console',
            store: 'gamestop'
        },
        {
            name: 'sunglasses',
            store: 'sunglasshut'
        },
        {
            name: 'watch',
            store: 'fossil'
        },
        {
            name: 'toothbrush',
            store: 'cvs'
        },
        {
            name: 'guitar',
            store: 'guitarcenter'
        },
        {
            name: 'television',
            store: 'walmart'
        },
        {
            name: 'desk chair',
            store: 'office-depot'
        }
    ];

    await Item.insertMany(items);
    console.log('items added');
}

async function run() {
    await seedItems();
    db.close();
}

run();
