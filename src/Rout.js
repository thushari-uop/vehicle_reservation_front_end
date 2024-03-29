import React from "react";

import Home from "./Pages/Home";
import Passenger from "./Pages/Passenger";
import Drive from "./Pages/Drive";
import About from "./Pages/About";
// import Contact from "./pages/Contact";

import SignInToRide from "./passenger/SignIn";
import SignInToDrive from "./driver/SignIn";
import PassengerRegistation from "./passenger/PassengerRegistation";
import DriveRegistation from "./driver/DriveRegistation";

import Hist from "./passenger/Dash/Histry";
import Booking from "./passenger/Dash/Booking";
import Profile from "./passenger/Dash/PasengerProfile";

import DriverProfile from "./driver/Dash/DriverProfile";
// import DriverCallender from "./driver/Dash/DriveCalander";
import Reservation from "./driver/Dash/Reservation";
import Request from "./driver/Dash/Request";
import Ratings from "./driver/Dash/Ratings";

import { Route, Routes } from "react-router-dom";
import UpdateDDetails from "./driver/components/UpdateDDetails";
import UpdateVehicleDetails from "./driver/components/UpdateVehicleDetails";
import UpdatePDetails from "./passenger/componenets/UpdatePDetails";
import ProtectedRoute from "./Components/ProtectedRoute";
// import VehicleListComponent from './driver/components/VehicleListComponent';

export default function Rout() {
  return (
    <div>
      <Routes>
        {/* Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/passenger" element={<Passenger />} />
        <Route path="/drive" element={<Drive />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}

        {/* Button SingIn & Registation */}
        <Route path="/passenger/sign-in" element={<SignInToRide />} />
        <Route path="/drive/sign-in" element={<SignInToDrive />} />
        <Route
          path="/passenger/registation"
          element={<PassengerRegistation />}
        />
        <Route path="/driver/registation" element={<DriveRegistation />} />

        {/* Passenger Dashbords */}
        <Route
          path="/passenger/hist"
          element={
            <ProtectedRoute>
              <Hist />
            </ProtectedRoute>
          }
        />

        <Route
          path="/passenger/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
          }
        />
        <Route
          path="/updateUserDetails/:userName"
          element={
            <ProtectedRoute>
              <UpdatePDetails />
            </ProtectedRoute>
          }
        />

        {/* Driver Dashbords */}
        <Route
          path="/Driver/Profile"
          element={
            <ProtectedRoute>
              <DriverProfile />
            </ProtectedRoute>
          }
        />

        {/* <Route path="/Driver/Calender" element={<DriverCallender/>}/> */}
        <Route
          path="/Driver/Reservation"
          element={
            <ProtectedRoute>
              <Reservation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Drive/Request"
          element={
            <ProtectedRoute>
              <Request />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Drive/Ratings"
          element={
            <ProtectedRoute>
              <Ratings />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/Drive/VehicleRegistation"
          element={<VehicleRegistation />}
        /> */}
        <Route
          path="/updateDriverDetails/:userName"
          component={
            <ProtectedRoute>
              <UpdateDDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/updateVehicleDetails/:vehicleId"
          element={
            <ProtectedRoute>
              <UpdateVehicleDetails />
            </ProtectedRoute>
          }
        />
        {/* <Route path='/VehicleList/:id' component = {<VehicleListComponent/>}/> */}

        {/* <Route path="/Reservation/Map" element={<Map/>}/> */}
      </Routes>
    </div>
  );
}
