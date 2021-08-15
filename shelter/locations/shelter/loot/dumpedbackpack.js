module.exports = {
    label: `Dumped backpack`,
    loot: [
        {
            weight: 100,
            items: [
                { id: 1, chance: 100, min: 1, max: 3 }, // potato
                { id: 2, chance: 40, min: 1, max: 2 }, // bandage
                { id: 8, chance: 10, min: 1, max: 1 }, // firstaid
                { id: 173, chance: 20, min: 1, max: 1 }, // water bottle
                { id: 14, chance: 25, min: 1, max: 2 }, // bread
                { id: 17, chance: 25, min: 1, max: 2 }, // soda
                { id: 15, chance: 25, min: 1, max: 2 }, // bottled water
                { id: 15, chance: 5, min: 1, max: 1 }, // Hammer
                { id: 95, chance: 5, min: 1, max: 1 }, // Rusty chef knife
            ],
        },
    ],
    mobs: [
        {
            name: 'rotten zombie',
            statModifiers: { health: 0.1 },
        },
    ],
};
