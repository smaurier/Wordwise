import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

export default function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (cities.length <= 0)
    return (
      <Message message="Add you first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
        return <CityItem key={city.id} city={city} />;
      })}
    </ul>
  );
}
