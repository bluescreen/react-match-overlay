import Match from './Match'

export interface TeamMatch extends Match {
	FightNumber         :string,
	TeamWhite           :string,
	WinsWhite           :string,
	SetWhite            :string,
	TeamEnchoOrHikiwake :string,
	SetRed              :string,
	WinsRed             :string,
	TeamRed             :string,
	Updated             :string,
}