export const Items: {[itemid: string]: ModdedItemData} = {
	inteleonite: {
		name: "Inteleonite",
		spritenum: 575,
		megaStone: "Inteleon-Mega",
		megaEvolves: "Inteleon",
		itemUser: ["Inteleon"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1001,
		gen: 6,
		isNonstandard: "Past",
	},
	granbulite: {
		name: "Granbulite",
		spritenum: 575,
		megaStone: "Granbull-Mega",
		megaEvolves: "Granbull",
		itemUser: ["Granbull"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1002,
		gen: 6,
		isNonstandard: "Past",
	}
}