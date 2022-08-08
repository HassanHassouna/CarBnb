import VehicleCard from '../vehicle-card/VehicleCard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import useMediaQuery from '@mui/material/useMediaQuery';

const VehicleListContainer = ({ vehicles, state }) => {
  const styleList = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gridGap: '1rem',
    justifyContent: 'center',
    width: '100%',
    margin: 'auto',
    justifyItems: 'center',
    alignItems: 'center',
  };
  const matches = useMediaQuery('(min-width:1160px)');
  return (
    <List sx={styleList}>
      {vehicles.map((vehicle, index) => (
        <ListItem
          key={index}
          sx={{
            padding: matches ? '10px' : 0,
            width: matches ? '100%' : '100vw',
          }}
        >
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
