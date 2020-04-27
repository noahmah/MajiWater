import React from "react";
import CleansePage from "../pages/CleansePage/index";
import DishPage from "../pages/DishPage";
import HomePage from "../pages/HomePage";
import LaundryPage from "../pages/LaundryPage";
import ResultPage from "../pages/ResultsPage";
import AboutPage from "../pages/AboutPage";
import LaundryLoadsPage from "../pages/LaundryLoadsPage";
import ShowerLengthPage from "../pages/ShowerLengthPage";
import TubVolumePage from "../pages/TubVolumePage";
import TutorialPage from "../pages/TutorialPage";

export default {
    title: "Pages",
    component: CleansePage,
};

export const CustomCleansePage = () => <CleansePage />;
export const CustomDishPage = () => <DishPage />;
export const CustomHomePage = () => <HomePage />;
export const CustomLaundryPage = () => <LaundryPage />;
export const CustomResultPage = () => <ResultPage />;
export const CustomAboutPage = () => <AboutPage />;
export const CustomLaundryLoadPage = () => <LaundryLoadsPage />;
export const CustomShowerLengthPage = () => <ShowerLengthPage />;
export const CustomTubVolumePage = () => <TubVolumePage />;
export const CustomTutorialPage = () => <TutorialPage />;