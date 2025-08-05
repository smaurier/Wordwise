import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

export default function CountriesList({ cities, isLoading }) {
  const countries = cities.reduce((arr, curr) => {
    const countryExists = arr.some(
      (country) => country.country === curr.country
    );
    if (!countryExists) {
      return [...arr, { country: curr.country, emoji: curr.emoji }];
    }
    return arr;
  }, []);

  if (isLoading) return <Spinner />;
  if (cities.length <= 0)
    return (
      <Message message="Add you first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <CountryItem country={country} key={country.country} />;
      })}
    </ul>
  );
}
