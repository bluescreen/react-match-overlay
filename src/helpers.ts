import ISO from 'iso-3166-1';

export const mapNumberToFlag = (tareNumber: string, type:string = 'big', fileExt:string = 'gif') => {
  const countryMatch = tareNumber.match(/.[A-Z]*/) ?? []
  const countryId:string = countryMatch[0];

  const entry = ISO.whereAlpha3(countryId);
  const entryName = countryId === 'GER' ? 'de' : entry?.alpha2.toLowerCase()

  return "/flags/"+type+"/"+entryName+"."+fileExt
}

