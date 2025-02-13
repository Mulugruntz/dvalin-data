export type ActionCardSkill = {
	/**
	 * @TJS-required
	 */
	name: string;
	desc: string;
};
type Entity = {
	/**
	 * @TJS-required
	 */
	_id: number;
	id: string;
	name: string;
	rarity: number;
};
type Energy = {
	/**
	 * @TJS-required
	 */
	_id: number;
	id: string;
	type: string;
	count: number;
};
export type TCGActionCard = {
	/**
	 * @TJS-required
	 */
	_id: number;
	id: string;
	name: string;
	title: string;
	desc: string;
	in_play_description: string;
	attributes: {
		cost: number;
		costType: string;
		cardType: string;
		energy: Energy[];
		source: string;
		artifact?: Entity;
		character?: Entity;
		food?: Entity;
		weapon?: Entity;
		tags: string[];
	};
	skills: ActionCardSkill[];
};
