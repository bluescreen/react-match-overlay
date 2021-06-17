import { useState,useMemo } from "react";
import countries from 'iso-3166-1/dist/iso-3166';


const EUROPEAN_COUNTRIES = ["BE", "AT", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HU", "HR", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK",];

const TareNumberEdit = (props: { value: string, onChange: any }) => {
  let currentNumber, currentCountry;
  [currentCountry, currentNumber] = props.value.split("-");

  const countryList = useMemo(() => {
    console.log("create country list");
    return countries.filter((country) => {
      return EUROPEAN_COUNTRIES.includes(country.alpha2)
    })
  }, []);

  const [number, setNumber] = useState(currentNumber)
  const [country, setCountry] = useState(currentCountry)

  const changeNumber = (e: any) => {
    const newNumber = (e.target.value > 0) ? e.target.value : 1;

    setNumber(newNumber);
    props.onChange(country+"-"+newNumber)
  }

  const changeCountry = (e: any) => {
    setCountry(e.target.value);
    props.onChange(e.target.value+"-"+number)
  }


  return (
    <div className="d-flex align-items-center">
      <select style={{width: 120}} className="form-control" value={country} onChange={changeCountry}>
        {countryList.map((country) => <option key={country.numeric} value={country.alpha3}>({country.alpha3}) {country.country}</option>)}
      </select>
      <span>-</span>
      <input type="number" style={{width: 60, marginLeft: 3}} className="form-control" value={number} onChange={changeNumber}></input>
    </div>
  )
}
export default TareNumberEdit;