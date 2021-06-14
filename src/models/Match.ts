export default interface Match {
	Shiaijo: string,
	Pool?: number,
	Fight?: string,
	NumberTareWhite: string,
	NameTareWhite: string,
	HansokuWhite?: string,
	IpponWhite2?: string,
	IpponWhite1?: string,
	EnchoOrHikiwake?: string,
	IpponRed1?: string,
	IpponRed2?: string,
	HansokuRed?: string,
	NumberTareRed: string,
	NameTareRed: string,
	Updated?: string
}

export const initialMatch: Match = {
	Shiaijo: 'A',
	NumberTareWhite: 't-1',
	NameTareWhite: 'white',
	NumberTareRed: 't-2',
	NameTareRed: 'red'
}