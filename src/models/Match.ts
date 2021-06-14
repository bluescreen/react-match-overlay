enum Ippon {
	Men = "M",
	Kote = "K",
	Do = "D",
	Tsuki = "T",
	Empty = "O",
	Hansoku = "h",
	HansokuNikai = "H",
	C = "C"
}

enum Encho{
	Encho = "E",
	Hikiwake ="X"
}


export default interface Match {
	Shiaijo: string,
	Pool?: number,
	Fight?: string,
	NumberTareWhite: string,
	NameTareWhite: string,
	HansokuWhite?: Ippon,
	IpponWhite2?: Ippon,
	IpponWhite1?: Ippon,
	EnchoOrHikiwake?: Encho,
	IpponRed1?: Ippon,
	IpponRed2?: Ippon,
	HansokuRed?: Ippon,
	NumberTareRed: string,
	NameTareRed: string,
	Updated?: string
}

export const initialMatch: Match = {
	Shiaijo: 'A',
	NumberTareWhite: 't-1',
	NameTareWhite: 'white',
	NumberTareRed: 't-2',
	NameTareRed: 'red',
}