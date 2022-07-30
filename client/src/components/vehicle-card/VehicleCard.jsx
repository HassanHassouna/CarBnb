import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import PaidIcon from "@mui/icons-material/Paid";
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
  justifyContent: "flex-end",
  my: "10px",
};

const styleBox3 = {
  component: "div",
  marginLeft: "10px",
  variant: "h8",
  fontSize: "16px",
  color: "text.secondary",
};

const VehicleCard = (props) => {
  const handleDeleteClick = (e) => {
    console.log(
      `implement here the Delete click handler of car with id ${props.item.id}`
    );
  };

  const handleEditClick = (e) => {
    console.log(
      `implement here the Edit click handler of car with id ${props.item.id}`
    );
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={props.item.img}
        alt={props.item.brand + props.item.model}
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
              {props.item.brand}
              <Typography
                component="div"
                marginLeft="10px"
                variant="h8"
                color="text.secondary"
              >
                {props.item.type}
              </Typography>
            </Typography>
          </Box>
          <Typography variant="h7" color="text.secondary">
            {props.item.model}
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
            {props.item.location}
          </Typography>
          <Box display="flex" gap="18px" marginTop="20px">
            <Typography
              display="flex"
              flexDirection="column"
              variant="h6"
              gap="5px"
              fontWeight={"bold"}
              component="box"
            >
              <Typography sx={styleBox3}>
                <AirlineSeatReclineExtraIcon color="primary" />
                {` ${props.item.seats} seats `}
              </Typography>
            </Typography>
            <Typography
              display="flex"
              flexDirection="column"
              variant="h"
              gap="5px"
              fontWeight={"bold"}
              component="box"
            >
              <Typography
                display="flex"
                flexDirection="column"
                variant="h6"
                gap="5px"
                fontWeight={"bold"}
                component="box"
              >
                <Typography sx={styleBox3}>
                  <LocalGasStationIcon color="primary" />
                  {`${props.item.engine}`}
                </Typography>
              </Typography>
            </Typography>
            <Typography
              display="flex"
              flexDirection="column"
              variant="h6"
              gap="5px"
              fontWeight={"bold"}
              component="box"
            >
              <Typography
                display="flex"
                flexDirection="column"
                variant="h6"
                gap="5px"
                fontWeight={"bold"}
                component="box"
              >
                <Typography sx={styleBox3}>
                  <ManageHistoryIcon color="primary" />
                  {`${props.item.gear}`}
                </Typography>
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            display="flex"
            flexDirection="column"
            variant="h6"
            gap="5px"
            fontWeight={"bold"}
            component="box"
          >
            <Typography
              display="flex"
              flexDirection="row"
              gap="8px"
              variant="h6"
              fontWeight={"bold"}
            >
              <PaidIcon color="primary" fontSize={"10px"} />
              {"price"}
            </Typography>
            <Typography> {`${props.item.totalPrice} /day`}</Typography>

            {props.page === "myCars" && (
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
                  style={{ marginLeft: "20px", width: "90px" }}
                  startIcon={<DeleteOutlineIcon />}
                >
                  delete
                </Button>
              </Box>
            )}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
