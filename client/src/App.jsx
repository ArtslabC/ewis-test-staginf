import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AboutUs,
  CareersTraining,
  ColomboLimited,
  EwisPeripherals,
  EwisSolution,
  GlobalServices,
  ToppanForms,
} from "./views/about";
import MainFooter from "./components/footer/MainFooter";
import CSRPage from "./views/csr/CSRPage";
import {
  BankingFinanceAndInsurance,
  EwisEducation,
  Healthcare,
  Manufacturing,
  Public,
  Retail,
  Telecommunication,
} from "./views/industries";

import NotFound from "./views/home/NotFound";
import {
  AdminLog,
  BlogsPageAdmin,
  CreateJob,
  CreateNews,
  CreatePost,
  CreateUser,
  Dashboard,
  ForgotPassword,
  JobsPageAdmin,
  MediaManager,
  NewsPageAdmin,
  ResetPassword,
  UpdateJobs,
  UpdateNews,
  UpdatePost,
  Users,
} from "./views/admin";
import SinglePost from "./views/press/SinglePost";
import SingleJob from "./views/more/SingleJob";
import CustomHomePage from "./views/home/CustomHomepage";
import { Blog, News } from "./views/press";
import ContactUs from "./views/contactus/ContactUs";
import { Careers, Partnership } from "./views/more";
import PublicLayout from "./components/auth/PublicLayout";
import AdminLayout from "./components/auth/AdminLayout";
import HomePage from "./views/home/HomePage";
import LandingPage from "./views/landing/LandingPage";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import SuperAdminLayout from "./components/auth/SuperAdminLayout";
import Tuor from "./views/home/tuor/Tuor";
import Tuor2 from "./views/home/tuor/Tuor2";
import SingleNews from "./views/press/SingleNews";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<PublicLayout />}>
          {/* ABOUT US  */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/colombo-limited" element={<ColomboLimited />} />
          <Route path="/global-services" element={<GlobalServices />} />
          <Route path="/ewis-solutions" element={<EwisSolution />} />
          <Route
            path="/career-training-solutions"
            element={<CareersTraining />}
          />
          <Route path="/peripheral" element={<EwisPeripherals />} />
          <Route path="/toppan-forms" element={<ToppanForms />} />

          {/* INDUSTRIE  */}

          <Route
            path="/banking-finance-and-insurance"
            element={<BankingFinanceAndInsurance />}
          />
          <Route path="/education" element={<EwisEducation />} />

          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/public" element={<Public />} />
          <Route path="/telecommunication" element={<Telecommunication />} />

          {/* CSR Routes */}
          <Route path="/csr-page" element={<CSRPage />} />

          {/* Press Routes */}
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<Blog />} />

          {/* More */}
          <Route path="/partners" element={<Partnership />} />

          <Route path="/careers" element={<Careers />} />

          {/* Contact US */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/job/:id" element={<SingleJob />} />
          <Route path="/post/:slug" element={<SinglePost />} />
          <Route path="/news/:slug" element={<SingleNews />} />
        </Route>
        <Route path="/ewis-tour" element={<Tuor2 />} />

        {/* ADMIN ROUTES  */}
        <Route path="/admin-login" element={<AdminLog />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/show-user" element={<Users />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/blog-edit-page" element={<BlogsPageAdmin />} />
          <Route path="/update-post/:id" element={<UpdatePost />} />
          <Route path="/show-news" element={<NewsPageAdmin />} />
          <Route path="/create-news" element={<CreateNews />} />
          <Route path="/update-news/:id" element={<UpdateNews />} />
          <Route path="/create-job" element={<CreateJob />} />
          <Route path="/show-jobs" element={<JobsPageAdmin />} />
          {/* <Route path="/job/:id" element={<SingleJob />} /> */}
          <Route path="/update-job/:id" element={<UpdateJobs />} />
          <Route path="/media-manager" element={<MediaManager />} />
          {/* </Route> */}
        </Route>
        <Route element={<SuperAdminLayout />}>
          <Route path="/create-user" element={<CreateUser />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
