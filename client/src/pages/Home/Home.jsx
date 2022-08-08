import Search from "../../components/Search/Search"
import BrandsToShow from "../../components/brandsToShow/BrandsToShow"
import SearchResponsive from "../../components/Search/SearchResponsive"
import BrandsToShowResponsive from "../../components/brandsToShow/BrandToShowResponsive"
import useMediaQuery from "@mui/material/useMediaQuery"

import "./style.css"
const Home = () => {
  const matches = useMediaQuery("(min-width:1160px)")

  return (
    <>
      {matches ? (
        <>
          <div className="container__searchBar">
            <Search />
          </div>
          <BrandsToShow />
        </>
      ) : (
        <>
          <div className="container__searchBar_responsive">
            <SearchResponsive />
          </div>
          <BrandsToShowResponsive />
        </>
      )}
    </>
  )
}

export default Home
