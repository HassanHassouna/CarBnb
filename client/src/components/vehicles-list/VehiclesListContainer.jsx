import VehicleCard from '../vehicle-card/VehicleCard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
const styleList = { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' };

const VehicleListContainer = ({ vehicles, state }) => {
  return (
    <List sx={styleList}>
      {vehicles.map((vehicle, index) => (
        <ListItem key={index}>
          <VehicleCard
            id={vehicle.id}
            page={vehicle.page}
            brand={vehicle.brand}
            type={vehicle.type}
            model={vehicle.model}
            price_per_day={vehicle.price_per_day}
            gear={vehicle.gear}
            location={vehicle.location}
            engine={vehicle.engine}
            profile_picture={vehicle.profile_picture}
            number_of_seats={vehicle.number_of_seats}
            user_id={vehicle.user_id}
            state={state}
            gas={vehicle.gas}
            year={vehicle.year}
            description={vehicle.description}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default VehicleListContainer;
