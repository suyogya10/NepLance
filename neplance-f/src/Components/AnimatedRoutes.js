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
import AccountingFinance from "./Collections/AccountingFinance"
import Administrative from "./Collections/Administrative"
import ComputerIT from "./Collections/ComputerIT"
import CustomerService from "./Collections/CustomerService"
import DesignEditing from "./Collections/DesignEditing"
import EducationTraining from "./Collections/EducationTraining"
import HrRecruit from "./Collections/HrRecruit";
import MeidcalHealth from "./Collections/MedicalHealth";
import Writing from "./Collections/Writing";
import Product from "./Product";
import Test from "./Test";
import SearchComponent from "./SearchComponent";
import Chat from "./Chat";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/login" element={<Login />} />
          <Route path="/test/:id" element={<Test/>} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="*" element={<Errorpage/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/addproduct" element={<Protected Cmp={AddProduct} />} />
          <Route
            path="/updateproduct/:id"
            element={<Protected Cmp={UpdateProduct} />}
          />
          <Route path="/user" element={<Protected Cmp={UserProfile} />} />
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/accounting-finance" element={<AccountingFinance/>} />
          <Route path="/administrative" element={<Administrative/>} />
          <Route path="/computer-it" element={<ComputerIT/>} />
          <Route path="/customer-service" element={<CustomerService/>} />
          <Route path="/design-editing" element={<DesignEditing/>} />
          <Route path="/education-training" element={<EducationTraining/>} />
          <Route path="/hr-recruit" element={<HrRecruit/>} />
          <Route path="/medical-health" element={<MeidcalHealth/>} />
          <Route path="/writing" element={<Writing/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/search" element={<SearchComponent/>} />
          <Route path="/chat/:to_userid" element={<Chat/>} />
          
          
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedRoutes;
