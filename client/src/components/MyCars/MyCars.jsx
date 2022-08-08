import { memo, useCallback, useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import ListVahicleDialog from '../list-new-vehicle-form/ListVehicleDialog';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import VehicleCard from '../vehicle-card/VehicleCard';
import 'swiper/css/pagination';
import { fetchMyVehicles } from '../../app/actions/fetch-vehicles-actions';
import useMediaQuery from '@mui/material/useMediaQuery';
import './MyCars.css';

const MyCars = memo(() => {
  const matches = useMediaQuery('(min-width:1160px)');
  const dispatch = useDispatch();
  const [isAddCarPressed, setIsAddCarPressed] = useState(false);

  const data = useSelector((state) => state.vehiclesSlice.myVehicles);
  const myVehicles = Object.values(data);
  const myId = useSelector((state) => state.userSlice.userObject.id);
  const loading = useSelector((state) => state.viewSlice.isLoading);

  const openFormHandler = () => setIsAddCarPressed(true);
  const closeFormHandler = () => setIsAddCarPressed(false);
  const handleOutletChange = useOutletContext();

  const fetchMyData = useCallback((id) => {
    if (id) dispatch(fetchMyVehicles(id));
  }, []);

  useEffect(() => {
    fetchMyData(myId);
  }, [myId]);

  handleOutletChange('mycars');

  if (loading) return <LoadingSpinner />;

  const userHadNoCars = () => {
    return (
      <div className="trips-view-container-img">
        <img
          src="https://resources.turo.com/client/v2/builds/assets/il_car_on_the_desert_@2xc6729191106bba04b948.png"
          alt=""
        />
        <div className="no-past-container">
          <p className="no-past title"> No cars to show </p>
          <label className="no-past-label"></label>
        </div>
        <div>This is where you can access information about your cars</div>
      </div>
    );
  };

  return (
    <div className="details-view-container">
      <p className="title"> My cars </p>
      {myVehicles.length === 0 && userHadNoCars()}
      {myVehicles.length !== 0 && (
        <Swiper
          style={{
            width: '100%',
            paddingBottom: '3rem',
          }}
          slidesPerView={matches ? '3' : '1'}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {myVehicles.map((vehicle, index) => {
            return (
              <SwiperSlide key={index} className="swiper-slide">
                <VehicleCard
                  page={'myCars'}
                  profile_picture={vehicle.profile_picture}
                  brand={vehicle.brand}
                  type={vehicle.type}
                  model={vehicle.model}
                  price_per_day={vehicle.price_per_day}
                  gear={vehicle.gear}
                  location={vehicle.location}
                  engine={vehicle.engine}
                  number_of_seats={vehicle.number_of_seats}
                  user_id={vehicle.user_id}
                  id={vehicle.id}
                ></VehicleCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      <Button variant="contained" onClick={openFormHandler}>
        Add car
      </Button>
      <ListVahicleDialog open={isAddCarPressed} onClose={closeFormHandler} />
    </div>
  );
});

export default MyCars;
