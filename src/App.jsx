import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product_Management from './pages/Product_Management';
import Home from './pages/Home';
import Asset_Management from "./pages/Asset_Management";
import Resource_Management from "./pages/Resource_Management";
import Knowledge_Management from "./pages/Knowledge_Management";
import AI_Machine from "./pages/AI_Machine";
import Blockchain_BigData from "./pages/Blockchain";
import Cloud_Computing from "./pages/Cloud";
import Digital_Marketing from "./pages/DigitalMarketing";
import Graphics_Design from "./pages/GraphicsDesign";
import Iot_Connected from "./pages/Iot";
import Mobile_Wearables from "./pages/Mobile";
import Programming_Tech from "./pages/Programming";
import UI_UX from "./pages/UIUX";
import ProductManagement_Beginners from "./pages/ProductManagement_Beginners";
import ProductManagementBeginners from "./pages/ProductManagementBeginners.jsx";
import ResourceManagementDigitalEra from "./pages/ResourceManagementDigitalEra.jsx";
import Login from "./Components/Login";
// import About from "./pages/About.jsx";
import OurStory from "./pages/OurStory.jsx";
import OurDifference from "./pages/OurDifference.jsx";
import Career from "./Components/Career.jsx";
// import OurServices from "./Components/OurServices";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions/product-management" element={<Product_Management />} />
        <Route path="/solutions/Asset" element={<Asset_Management />} />
        <Route path="/solutions/Resource" element={<Resource_Management />} />
        <Route path="/solutions/Knowledge" element={<Knowledge_Management />} />
        {/* service */}
        <Route path="/services/AI" element={<AI_Machine />} />
        <Route path="/services/Blockchain" element={<Blockchain_BigData />} />
        <Route path="/services/Cloud" element={<Cloud_Computing />} />
        <Route path="/services/DigitalMarketing" element={<Digital_Marketing />} />
        <Route path="/services/GraphicsDesign" element={<Graphics_Design />} />
        <Route path="/services/Iot" element={<Iot_Connected />} />
        <Route path="/services/Mobile" element={<Mobile_Wearables />} />
        <Route path="/services/Programming" element={<Programming_Tech />} />
        <Route path="/services/UIUX" element={<UI_UX />} />
        <Route path="/ProductManagementBeginners" element={<ProductManagement_Beginners/>}/>
        <Route path="/ProductManagementBeginners1" element={<ProductManagementBeginners/>}/>
        <Route path="/ResourceManagementDigitalEra" element={<ResourceManagementDigitalEra/>}/>
        {/* <Route path="/services" element={<OurServices />} />
        <Route path="/services/:slug" element={<OurServices />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/about/our-story" element={<OurStory />} />
        <Route path="/about/our-difference" element={<OurDifference />} />
        <Route path="/career" element={<Career />} />


      </Routes>
      
    </BrowserRouter>
   
  )
}

export default App
