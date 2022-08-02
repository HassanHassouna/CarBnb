import VehicleCard from "../vehicle-card/VehicleCard";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import { getFilteredVehicles } from "../../app/selectors/vehicles-selectors"
const styleList = { display: "grid", gridTemplateColumns: "repeat(3,1fr)" };

const VehicleListContainer = ({ vehicles }) => {
  console.log(vehicles);
  return (
    <List sx={styleList}>
      {vehicles.map(
        ({
          profile_picture,
          brand,
          model,
          year,
          number_of_seats,
          price_per_day,
          type,
          location,
          engine,
          gear,
        }) => (
          <ListItem>
            <VehicleCard
              profile_picture={profile_picture}
              brand={brand}
              model={model}
              year={year}
              number_of_seats={number_of_seats}
              price_per_day={price_per_day}
              type={type}
              location={location}
              engine={engine}
              gear={gear}
            />
          </ListItem>
        )
      )}
    </List>
  );
};

export default VehicleListContainer;
