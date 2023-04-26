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
import AccountingFinance from "./Collections/AccountingFinance";
import Administrative from "./Collections/Administrative";
import ComputerIT from "./Collections/ComputerIT";
import CustomerService from "./Collections/CustomerService";
import DesignEditing from "./Collections/DesignEditing";
import EducationTraining from "./Collections/EducationTraining";
import HrRecruit from "./Collections/HrRecruit";
import MeidcalHealth from "./Collections/MedicalHealth";
import Writing from "./Collections/Writing";
import Product from "./Product";
import SearchComponent from "./SearchComponent";
import Chat from "./Chat";
import Checkout from "./Checkout";
import UpdateUser from "./UpdateUser";
import Adminlogin from "./Adminlogin";
import SidebarComponent from "../Components/Sidebar";
import Headers from "../Components/Header";
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


function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          
  
          

        <Route element={<Headers/>}>
            <Route path="*" element={<Errorpage />} />
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<OTP/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/user" element={<Protected Cmp={UserProfile} />} />
            <Route path="/updateuser/:id" element={<UpdateUser />} />
            <Route path="/viewprofile/:id" element={<ViewProfile />} />
            <Route path="/search" element={<SearchComponent />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route path="/addproduct" element={<Protected Cmp={AddProduct} />} />
            <Route
              path="/updateproduct/:id"
              element={<Protected Cmp={UpdateProduct} />}
            />
            <Route path="/becomeseller" element={<Protected Cmp={BecomeSeller} />} />

            <Route path="/explore" element={<Explore />} />
            <Route path="/accounting-finance" element={<AccountingFinance />} />
            <Route path="/administrative" element={<Administrative />} />
            <Route path="/computer-it" element={<ComputerIT />} />
            <Route path="/customer-service" element={<CustomerService />} />
            <Route path="/design-editing" element={<DesignEditing />} />
            <Route path="/education-training" element={<EducationTraining />} />
            <Route path="/hr-recruit" element={<HrRecruit />} />
            <Route path="/medical-health" element={<MeidcalHealth />} />
            <Route path="/writing" element={<Writing />} />


            <Route path="/chat/:to_userid" element={<Chat />} />
            </Route>

          <Route path="/adminLogin" element={<AdminProtected Cmp={Adminlogin}/>} />
            <Route  element={<SidebarComponent/>} >
            <Route path="/adminhome" element={<AdminProtected Cmp={Adminhome}/>} />
            <Route path="/viewusers" element={<AdminProtected Cmp={ViewUsers}/>} />
            <Route path="/viewreviews" element={<AdminProtected Cmp={ViewReviews}/>} />
            <Route path="/viewservices" element={<AdminProtected Cmp={ViewServices}/>} />
            <Route path="/viewrequests" element={<AdminProtected Cmp={ViewRequests}/>} />
            <Route path="/adminupdateproduct/:id" element={<AdminProtected Cmp={AdminUpdateProduct}/>} />
          </Route>

        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedRoutes;
