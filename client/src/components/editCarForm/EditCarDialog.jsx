import { forwardRef } from 'react';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import EditCarForm from './EditCarForm';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const editVahicleDialog = ({
  open,
  onClose,
  profile_picture,
  brand,
  model,
  year,
  number_of_seats,
  price_per_day,
  description,
  location,
  gear,
  gas,
  engine,
  type,
  carId,
}) => {
  const CloseDialogHandler = () => {
    console.log('CloseDialogHandler:', onClose);
    onClose();
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={CloseDialogHandler}
        TransitionComponent={Transition}
        sx={{ alignItems: 'center' }}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={CloseDialogHandler}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Edit your vehicle.
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          sx={{ padding: '20px', display: 'flex', justifyContent: 'center' }}
        >
          <EditCarForm
            onSubmit={CloseDialogHandler}
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
            carId={carId}
          />
        </Box>
      </Dialog>
    </div>
  );
};

export default editVahicleDialog;
