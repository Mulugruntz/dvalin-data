type ArtifactSet = {
	/**
	 * @TJS-required
	 */
	_id: number;
	id: string;
	name: string;
	description?: string;
};

export type Artifact = {
	/**
	 * @TJS-required
	 */
	_id: number;
	id: string;
	name: string;
	minRarity: number;
	maxRarity: number;
	flower?: ArtifactSet;
	plume?: ArtifactSet;
	sands?: ArtifactSet;
	goblet?: ArtifactSet;
	circlet?: ArtifactSet;
	onePiece?: string;
	twoPiece?: string;
	fourPiece?: string;
};
