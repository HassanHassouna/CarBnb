import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import PaidIcon from "@mui/icons-material/Paid";
import Chip from "@mui/material/Chip";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";

const styleBox1 = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  my: "10px",
};

const styleBox2 = {
  display: "flex",
  alignItems: "center",
  width: "100%",
};

const typographyStyle = {
  padding: "5px",
};
const chipStyle = {
  border: "none",
};

const VehicleCard = ({
  page,
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
}) => {
  const handleDeleteClick = (e) => {
    console.log(`implement here the Delete click handler of car with `);
  };

  const handleEditClick = (e) => {
    console.log(`implement here the Edit click handler of car with id `);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={profile_picture}
        alt={brand + model}
      />
      <CardContent>
        <Box sx={styleBox1}>
          <Box>
            <Typography
              display="flex"
              flexDirection="row"
              variant="h6"
              fontWeight={"bold"}
              component="div"
            >
              {brand}
            </Typography>
          </Box>
          <Typography variant="h7" color="text.secondary">
            {model}
          </Typography>
          <Typography
            variant="h8"
            fontWeight={"bold"}
            component="div"
            marginTop="10px"
            display="flex"
            flexDirection="row"
            gap="8px"
          >
            <LocationOnIcon color="primary" fontSize={"10px"} />
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
          <Box
            sx={styleBox2}
            justifyContent="flex-end"
            display={"flex"}
            flexDirection="column"
          >
            <PaidIcon color="primary" fontSize={"10px"} />
            <Typography
              justifyContent="flex-end"
              display={"flex"}
              sx={typographyStyle}
              variant="h7"
              fontWeight={"bold"}
            >
              {`${price_per_day} /day`}
            </Typography>
            <Typography>
              {page === "myCars" && (
                <Box display="flex" flexDirection="row">
                  <Button
                    onClick={handleEditClick}
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: "90px", width: "90px" }}
                    startIcon={<DeleteOutlineIcon />}
                  >
                    edit
                  </Button>
                  <Button
                    onClick={handleDeleteClick}
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{
                      marginRight: "90px",
                      marginLeft: "20px",
                      width: "90px",
                    }}
                    startIcon={<DeleteOutlineIcon />}
                  >
                    delete
                  </Button>
                </Box>
              )}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
