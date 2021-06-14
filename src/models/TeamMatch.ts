import Match from './Match'

export interface TeamMatch extends Match {
	FightNumber         :number,
	TeamWhite           :string,
	WinsWhite           :number,
	SetWhite            :number,
	TeamEnchoOrHikiwake :string,
	SetRed              :number,
	WinsRed             :number,
	TeamRed             :string,
	Updated             :string,
}