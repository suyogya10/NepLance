import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Protected from "./Protected";
import UserProfile from "./UserProfile";
import Landing from "./Landing";
import Errorpage from "./Errorpage";
import { AnimatePresence } from "framer-motion";
import Explore from "./Collections/Explore";
import Product from "./Product";
import SearchComponent from "./SearchComponent";
import Chat from "./Chat";
import Checkout from "./Checkout";
import UpdateUser from "./UpdateUser";
import Adminlogin from "./Adminlogin";
import SidebarComponent from "../Components/Sidebar";
import Header from "../Components/Header";
import ViewUsers from "./ViewUsers";
import ViewReviews from "./ViewReviews";
import ViewServices from "./ViewServices";
import AdminUpdateProduct from "./AdminUpdateProduct";
import AdminProtected from "./AdminProtected";
import Adminhome from "./AdminHome";
import OTP from "./OTP";
import ViewProfile from "./ViewProfile";
import ViewRequests from "./ViewRequests";
import Test from "./Test";
import BecomeSeller from "./BecomeSeller";
import ViewCategory from "./Collections/ViewCategory";
import UserInterest from "./UserInterest";
import Chats from "./Chats";
import Jobs from "./ViewPostRequests";
import AboutUs from "./AboutUs";
import RecommendedPage from "./Collections/RecommendedPage";
import { io } from "socket.io-client";
import ForgotPassword from "./ForgotPassword";
import AdminUpdateUser from "./AdminUpdateUser";
import ViewReportedServices from "./ViewReportedServices";

import AdminFAQ from "./AdminFAQ";

const socket = io("http://localhost:3001");

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route element={<Header />}>
            <Route path="*" element={<Errorpage />} />
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/userinterest"
              element={<Protected Cmp={UserInterest} />}
            />
            <Route path="/user" element={<Protected Cmp={UserProfile} />} />
            <Route path="/updateuser/:id" element={<UpdateUser />} />
            <Route path="/viewprofile/:id" element={<ViewProfile />} />
            <Route path="/search" element={<SearchComponent />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route
              path="/addproduct"
              element={<Protected Cmp={AddProduct} />}
            />
            <Route path="/jobs" element={<Protected Cmp={Jobs} />} />
            <Route
              path="/updateproduct/:id"
              element={<Protected Cmp={UpdateProduct} />}
            />
            <Route
              path="/becomeseller"
              element={<Protected Cmp={BecomeSeller} />}
            />

            <Route path="/explore/:category" element={<ViewCategory />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/recommended" element={<RecommendedPage />} />

            <Route path="/chats/:id" element={<Chats />} />
            <Route path="/chat" element={<Chat />} />
          </Route>

          <Route
            path="/adminLogin"
            element={<AdminProtected Cmp={Adminlogin} />}
          />
          <Route element={<SidebarComponent />}>
            <Route
              path="/adminhome"
              element={<AdminProtected Cmp={Adminhome} />}
            />
            <Route
              path="/viewusers"
              element={<AdminProtected Cmp={ViewUsers} />}
            />
            <Route
              path="/viewreviews"
              element={<AdminProtected Cmp={ViewReviews} />}
            />
            <Route
              path="/viewservices"
              element={<AdminProtected Cmp={ViewServices} />}
            />
            <Route
              path="/viewrequests"
              element={<AdminProtected Cmp={ViewRequests} />}
            />
            <Route path="/faq" element={<AdminProtected Cmp={AdminFAQ} />} />
            <Route
              path="/adminupdateproduct/:id"
              element={<AdminProtected Cmp={AdminUpdateProduct} />}
            />
            <Route
              path="/admin/updateuser/:id"
              element={<AdminProtected Cmp={AdminUpdateUser} />}
            />
            <Route
              path="/viewreportedservices"
              element={<AdminProtected Cmp={ViewReportedServices} />}
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedRoutes;
