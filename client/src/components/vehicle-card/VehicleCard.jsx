import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PaidIcon from '@mui/icons-material/Paid';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import ReserveCar from '../reserveCar/ReserveCar';
import { useDispatch } from 'react-redux';
import { removeVehicle } from '../../app/actions/remove-vehicle-actions';
import { useState } from 'react';
import EditVahicleDialog from '../editCarForm/EditCarDialog';
import React from 'react';

const styleBox1 = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  my: '10px',
};

const styleBox2 = {
  display: 'flex',
  alignItems: 'center',
};

const typographyStyle = {
  padding: '5px',
};
const chipStyle = {
  border: 'none',
};

const VehicleCard = ({
  page,
  brand,
  type,
  model,
  price_per_day,
  gear,
  location,
  engine,
  profile_picture,
  number_of_seats,
  id,
  state,
  gas,
  description,
  year,
}) => {
  const dispatch = useDispatch();

  const [isEditCarPressed, setIsEditCarPressed] = useState(false);

  const openFormHandler = () => setIsEditCarPressed(true);
  const closeFormHandler = () => setIsEditCarPressed(false);

  const DeleteCarHandler = () => {
    dispatch(removeVehicle(id));
  };

  const EditCarHandler = () => {
    openFormHandler();
  };

  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          sx={{
            objectFit: 'cover',
            height: '140px',
          }}
          image={profile_picture}
          alt={''}
        />
        <CardContent>
          <Box sx={styleBox1}>
            <Box>
              <Typography
                display="flex"
                flexDirection="row"
                variant="h6"
                fontWeight={'bold'}
                component="div"
              >
                {brand}
                <Typography
                  component="div"
                  marginLeft="10px"
                  variant="h8"
                  color="text.secondary"
                >
                  {type}
                </Typography>
              </Typography>
            </Box>
            <Typography variant="h7" color="text.secondary">
              {model}
            </Typography>
            <Typography
              variant="h8"
              fontWeight={'bold'}
              component="div"
              marginTop="10px"
              display="flex"
              flexDirection="row"
              gap="8px"
            >
              <LocationOnIcon color="primary" fontSize={'10px'} />
              {location}
            </Typography>
            <Box sx={styleBox2} justifyContent="space-between">
              <Chip
                icon={<AirlineSeatReclineExtraIcon />}
                label={` ${number_of_seats} seats `}
                variant="outlined"
                sx={chipStyle}
              />
              <Chip
                icon={<LocalGasStationIcon />}
                label={`${engine}`}
                variant="outlined"
                sx={chipStyle}
              />
              <Chip
                icon={<ManageHistoryIcon />}
                label={`${gear}`}
                variant="outlined"
                sx={chipStyle}
              />
            </Box>
            <Box sx={styleBox2} justifyContent="flex-end">
              <PaidIcon color="primary" fontSize={'10px'} />
              <Typography sx={typographyStyle} variant="h7" fontWeight={'bold'}>
                {`${price_per_day} /day`}
              </Typography>
              {page === 'myCars' && (
                <Box display="flex" flexDirection="row">
                  <Button
                    onClick={EditCarHandler}
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: '90px', width: '90px' }}
                    startIcon={<BorderColorIcon />}
                  >
                    edit
                  </Button>
                  <Button
                    onClick={DeleteCarHandler}
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: '20px', width: '90px' }}
                    startIcon={<DeleteOutlineIcon />}
                  >
                    delete
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          {page !== 'myCars' && (
            <ReserveCar id={id} state={state} text="Reserved" />
          )}
        </CardActions>
      </Card>
      <EditVahicleDialog
        open={isEditCarPressed}
        onClose={closeFormHandler}
        profile_picture={profile_picture}
        brand={brand}
        model={model}
        year={year}
        number_of_seats={number_of_seats}
        price_per_day={price_per_day}
        description={description}
        location={location}
        gear={gear}
        gas={gas}
        engine={engine}
        type={type}
        carId={id}
      />
    </React.Fragment>
  );
};

export default VehicleCard;
