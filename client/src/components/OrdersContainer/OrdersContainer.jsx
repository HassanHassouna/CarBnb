import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReservationCard from "../ReservationCard/ReservationCard";
import VehicleCard from "../vehicle-card/VehicleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import dummyData from "../../pages/MyProfile/dummyData";
import { useOutletContext } from "react-router-dom";
import { fetchVehicles } from "../../app/actions/fetch-vehicles-actions";

import "swiper/css";
import "swiper/css/pagination";
import "./OrdersContainer.css";
import {
  fetchMyReservations,
  fetchMyOrders,
} from "../../app/actions/user-actions";

const OrdersContainer = (props, navBar) => {
  const handleOutletChange = useOutletContext();
  const dispatch = useDispatch();
  const myOrders = useSelector((state) => state.userSlice.orders);
  const myReservations = useSelector((state) => state.userSlice.reservations);
  const ordersList = Object.values(myOrders);
  const reservationsList = Object.values(myReservations);
  const { page } = props;
  const data = page === "trips" ? dummyData : dummyData;
  const pageLabel = `No past ${page}`;
  const pageTitle = `My ${page}`;
  handleOutletChange(page);

  useEffect(() => {
    fetchMyData();
  }, []);

  const fetchMyData = async () => {
    await dispatch(fetchVehicles());
    dispatch(fetchMyReservations());
    // dispatch(fetchMyOrders());
  };

  const defaultOuput = () => {
    return (
      <div className="trips-view-container-img">
        <img
          src="https://resources.turo.com/client/v2/builds/assets/il_car_on_the_desert_@2xc6729191106bba04b948.png"
          alt=""
        />
        <p className="no-past title">{pageLabel}</p>
        <div>This is where you can access information about your {page}</div>
      </div>
    );
  };

  return (
    <>
      <div className="details-view-container">
        <p className="title"> {pageTitle} </p>
        {data.length === 0 && defaultOuput()}
      </div>
      {data.length !== 0 && (
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
          clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item) => {
            return (
              <SwiperSlide className="swiper-slide">
                <VehicleCard page="myCars" item={item}></VehicleCard>
                {/* <ReservationCard item={item}></ReservationCard> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};

export default OrdersContainer;
