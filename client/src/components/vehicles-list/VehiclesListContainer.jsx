import VehicleCard from "../vehicle-card/VehicleCard"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import useMediaQuery from "@mui/material/useMediaQuery"

const VehicleListContainer = ({ vehicles, state }) => {
  const styleList = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
    gridGap: "1rem",
    justifyContent: "center",
    width: "100%",
    margin: "auto",
    justifyItems: "center",
    alignItems: "center",
  }
  const matches = useMediaQuery("(min-width:1160px)")
  return (
    <List sx={styleList}>
      {vehicles.map(
        (
          {
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
            user_id,
            id,
          },
          index
        ) => (
          <ListItem
            sx={{
              padding: matches ? "10px" : 0,
              width: matches ? "100%" : "100vw",
            }}
            key={index}
          >
            <VehicleCard
              id={id}
              page={page}
              brand={brand}
              type={type}
              model={model}
              price_per_day={price_per_day}
              gear={gear}
              location={location}
              engine={engine}
              profile_picture={profile_picture}
              number_of_seats={number_of_seats}
              user_id={user_id}
              state={state}
            />
          </ListItem>
        )
      )}
    </List>
  )
}

export default VehicleListContainer
