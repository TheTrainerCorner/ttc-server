// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [
	{
		section: "Season 3",
		column: 1,
	},
	{
		name: "[Gen 9] Cherish Ball",
		desc: "<b>Cherish Ball</b>: This is the official Cherish Ball format for TTC",
		mod: 'ttc_season_3',
		ruleset: [
			'Standard NatDex', 'OHKO Clause', 'Evasion Clause',
			'Species Clause', 'Sleep Clause Mod', 'Z-Move Clause',
			'Dynamax Clause', 'Terastal Clause',
			'Season Complex Ban', 'Season Unbanlist', 'Season Banlist',
		],

	},
	{
		name: "[Gen 9] Luxury Ball",
		desc: "<b>Luxury Ball</b>: This is the official Luxury Ball format for TTC",
		mod: 'ttc_season_3',
		ruleset: [
			'Standard NatDex', 'OHKO Clause', 'Evasion Clause',
			'Species Clause', 'Sleep Clause Mod', 'Z-Move Clause',
			'Dynamax Clause', 'Terastal Clause',
			'Season Complex Ban', 'Season Unbanlist', 'Season Banlist',
		],

	},
	{
		name: "[Gen 9] Pokeball",
		desc: "<b>Pokeball</b>: This is the official Pokeball format for TTC",
		mod: 'ttc_season_3',
		ruleset: [
			'Standard NatDex', 'OHKO Clause', 'Evasion Clause',
			'Species Clause', 'Sleep Clause Mod', 'Z-Move Clause',
			'Dynamax Clause', 'Terastal Clause',
			'Season Complex Ban', 'Season Unbanlist', 'Season Banlist',
		],

	},
	{
		section: "Season 2",
		column: 1,
	},
	{
		name: "[Gen 9] Season 2 Changes",
		desc: "This has all of the season 2 changes",
		mod: 'ttc_season_2',
		ruleset: [
			'Standard NatDex', 'OHKO Clause', 'Evasion Clause',
			'Species Clause', 'Sleep Clause Mod', 'Z-Move Clause',
			'Dynamax Clause', 'Terastal Clause',
			'Season Complex Ban', 'Season Unbanlist', 'Season Banlist',
		],

	},
	{
		section: "Season 1",
		column: 1,
	},
	{
		name: "[Gen 9] Season 1 Changes",
		desc: "This has all of the season 1 changes",
		mod: 'ttc_season_1',
		ruleset: [
			'Standard NatDex', 'OHKO Clause', 'Evasion Clause',
			'Species Clause', 'Sleep Clause Mod', 'Z-Move Clause',
			'Dynamax Clause', 'Terastal Clause',
			'Season Complex Ban', 'Season Unbanlist', 'Season Banlist',
		],

	},
];
