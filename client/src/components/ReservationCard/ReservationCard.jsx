import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Devider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Link } from "@mui/material";

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

const ReservationCard = (props) => {
  const [page, setPage] = useState("");

  useEffect(() => {
    setPage(props.page);
  }, [props.page]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={props.item.img}
        alt="Mercedes  CLS 450 coupe"
      />
      <CardContent>
        <Box sx={styleBox1}>
          <Box>
            <Box
              display="flex"
              flexDirection="row"
              variant="h6"
              fontWeight={"bold"}
              component="div"
            >
              {props.item.brand}
              <Box
                component="div"
                marginLeft="10px"
                variant="h8"
                color="text.secondary"
              >
                {props.item.type}
              </Box>
            </Box>
          </Box>
          <Box variant="h7" color="text.secondary">
            {props.item.model}
          </Box>
          <Box
            variant="h8"
            fontWeight={"bold"}
            component="div"
            marginTop="10px"
            display="flex"
            flexDirection="row"
            gap="8px"
          >
            <Box display="flex" flexDirection="row">
              <Avatar>{props.user.charAt(0)}</Avatar>
              <Box>
                <Link
                  display="flex"
                  flexDirection="row"
                  gap="8px"
                  variant="h8"
                  color="text.secondary"
                  marginLeft="20px"
                  width={"100px"}
                  marginTop="10px"
                  style={{ textDecoration: "none" }}
                  href={`https://fullstackmondayu.monday.com/boards/2949023880`}
                >
                  {props.user}
                </Link>
              </Box>
            </Box>
            <Box marginRigth={"40px"} marginTop={"10px"} width={"140px"}>
              <LocationOnIcon color="primary" fontSize={"10px"} />
              {props.item.location}
            </Box>
          </Box>
          <Box display="flex" gap="40px" marginTop="20px">
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
                <CalendarMonthIcon color="primary" fontSize={"10px"} />
                {"Start Date "}
              </Typography>
              <Typography> {props.item.startDate}</Typography>
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
                flexDirection="row"
                gap="8px"
                variant="h6"
                fontWeight={"bold"}
              >
                <CalendarMonthIcon color="primary" fontSize={"10px"} />
                {"End Date "}
              </Typography>
              <Typography> {props.item.EndDate}</Typography>
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
              {"Total Price"}
            </Typography>
            <Typography> {`${props.item.totalPrice} $`}</Typography>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReservationCard;
