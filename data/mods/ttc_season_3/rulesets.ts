export const Rulesets: {[k: string]: ModdedFormatData} = {
	seasoncomplexbans: {
		inherit: true,
		desc: "All of the Complex Bans for Season 3",
		ruleset: [
			'No Shell Smash Mega Toise',
			'No Calm Mind For The Patio Set',
			'No Dragon Dance for the Patio Set',
		],
	},
	seasonunbanlist: {
		inherit: true,
		desc: "Everything that is unban during Season 3",
		unbanlist: [
			// Adding this just in case
			'Unreleased',
			// Tiers
			'LGPE',
			// Moves
			'Barb Barrage', 'Baton Pass','Blazing Torque', 'Ceaseless Edge',
			'Chloroblast', 'Combat Torque', 'Dire Claw',
			"Dragon's Maw", 'Esper Wing', 'Infernal Parade',
			'Magical Torque', 'Mountain Gale', 'Noxious Torque',
			'Psyshield Bash', 'Raging Fury', 'Shelter',
			'Springtide Storm', 'Stone Axe', 'Triple Arrows',
			'Victory Dance', 'Wicked Torque',
			// Items
			'Custap Berry', 'Thick Club', 'Full Incense',
			'Lax Incense', 'Odd Incense', 'Rock Incense',
			'Rose Incense', 'Sea Incense', 'Wave Incense',
		],
	},
	seasonbanlist: {
		inherit: true,
		desc: "Everything that is ban during Season 3",
		banlist: [
			// Tiers
			'ND Uber', 'ND AG',
			// Abilities
			'Moody', 'Power Construct', 'Shadow Tag',
			// Items
			'King\'s Rock', 'Quick Claw', 'Razor Fang',
			// Moves
			'Assist', 'Last Respects',
		],
	}
};