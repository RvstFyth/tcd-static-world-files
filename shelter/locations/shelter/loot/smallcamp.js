module.exports = {
    label: `Small abandoned camp`,
    enabled: true,
    chance: 100,
    descriptions: [
        // This will be displayed in the prompt where the player chooses a location to loot. A random entry will be picked if there is more then one.
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
    ],
    fightDescriptions: [
        // This will be displayed in the prompt before a fight happens. A random entry will be picked if there is more then one.
        'As you walk towards the camp, a zombie starts coming towards you. Do you choose to fight?',
    ],

    maxLootUnique: 2,
    maxLootTotal: 5,
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

    encounterChance: 95, // The chance to encounter a mob
    mobs: [
        {
            name: 'rotten zombie',
            stats: {
                minHealth: 10,
                maxHealth: 40,
                minAttack: 3,
                maxAttack: 3,
                minDefence: 3,
                maxDefence: 3,
            },
        },
    ],
};
