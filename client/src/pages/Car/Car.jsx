import React from "react"
import PhotoSwiper from "../../components/PhotoSwiper/PhotoSwiper"
import "./style.css"
import SideSearch from "../../components/SideSearch/SlideSearch"
import { Overview } from "../../components/Overview/Overview"
import Features from "../../components/Features/Features"
import Search from "../../components/Search/Search"
export const Car = () => {
  return (
    <div className="photoSwiper_container">
      <div className="photo_swiper">
        <PhotoSwiper />
      </div>
      <div className="details_container">
        <div className="left_side_container">
          <Overview />
          <Features />
        </div>
        <div className="right_side_container">
          <div className="side_search">
            {/* <SideSearch /> */}
            {/* <Search /> */}
          </div>
        </div>{" "}
      </div>
    </div>
  )
}
