import {ModdedDex} from '../../../sim/dex';
import {Learnset} from '../../../sim/dex-species';

// Generations Files
import Gen1 from './gens/gen1';
import Gen2 from './gens/gen2';
import Gen3 from './gens/gen3';
import Gen4 from './gens/gen4';
import Gen5 from './gens/gen5';
import Gen6 from './gens/gen6';
import Gen7 from './gens/gen7';
import Gen8 from './gens/gen8';
import Gen9 from './gens/gen9';

export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen9',
	init() {
		// #region Functions
		const changeTier = (pokemon: string, tier: string) => {
			this.modData('FormatsData', pokemon.toLowerCase().replace(/ +/g, '').replace('-', '')).tier = tier.toUpperCase();
		};
		// #endregion
		// #region Add Kick Move Flag to moves
		const kickMoves: string[] = [
			"axekick",
			"blazekick",
			"doublekick",
			"highhorsepower",
			"highjumpkick",
			"jumpkick",
			"lowsweep",
			"megakick",
			"rollingkick",
			"stomp",
			"thunderouskick",
			"triplearrows",
			"tripleaxel",
			"triplekick",
			"tropkick",
			"lowkick",
		];

		for (const move of kickMoves) {
			this.modData('Moves', move).flags.kick = 1;
		}
		// #endregion
		// #region Hammer Moves
		const hammerMoves: string[] = [
			"hammerarm",
			"crabhammer",
			"dragonhammer",
			"gigatonhammer",
			"icehammer",
			"woodhammer",
			"terahammer",
		];
		for (const move of hammerMoves) {
			this.modData('Moves', move).flags.hammer = 1;
		}
		// #endregion
		// #region Modifying Tiers
		changeTier('alakazammega', 'OU');
		changeTier('annihilape', 'OU');
		changeTier('blazikenmega', 'OU');
		changeTier('chienpao', 'OU');
		changeTier('chiyu', 'OU');
		changeTier('darmanitangalar', 'OU');
		changeTier('espathra', 'OU');
		changeTier('dracovish', 'OU');
		changeTier('fluttermane', 'OU');
		changeTier('genesect', 'OU');
		changeTier('gengarmega', 'OU');
		changeTier('houndstone', 'OU');
		changeTier('ironbundle', 'OU');
		changeTier('kangaskhanmega', 'OU');
		changeTier('kyuremblack', 'OU');
		changeTier('landorus', 'OU');
		changeTier('lucariomega', 'OU');
		changeTier('marshadow', 'OU');
		changeTier('melmetal', 'OU');
		changeTier('metagrossmega', 'OU');
		changeTier('naganadel', 'OU');
		changeTier('palafin', 'OU');
		changeTier('palafinhero', 'OU');
		changeTier('regieleki', 'OU');
		changeTier('roaringmoon', 'OU');
		changeTier('salamencemega', 'OU');
		changeTier('spectrier', 'OU');
		changeTier('urshifu', 'OU');
		changeTier('walkingwake', 'OU');
		changeTier('zygarde', 'OU');
		// #endregion

		// #region Modifying Pokemon
		// Generation 1
		Gen1(this);
		// Generation 2
		Gen2(this);
		// Generation 3
		Gen3(this);
		// Generation 4
		Gen4(this);
		// Generation 5
		Gen5(this);
		// Generation 6
		Gen6(this);
		// Generation 7
		Gen7(this);
		// Generation 8
		Gen8(this);
		// Generation 9
		Gen9(this);
		// #endregion
	},
};
