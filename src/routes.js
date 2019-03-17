import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomeComponent from './components/home/container/HomeComponent';
import AboutPageComponent from './components/about/container/AboutPageComponent';
import ParosPageComponent from './components/paros/container/ParosPageComponent';
import YogaPageComponent from './components/yoga/container/YogaPageComponent';
import FoodPageComponent from './components/food/container/FoodPageComponent';
import MorePageComponent from './components/more/container/MorePageComponent';
import AccommodationPageComponent from './components/accommodation2/container/AccommodationPageComponent';
import ContactComponent from './components/contact/container/ContactComponent';
import CalendarComponent from './components/calendar/container/CalendarComponent';
import PackageOverviewComponent from './components/package/container/PackageOverviewComponent';
import PackageItemComponent from './components/package/container/PackageItemComponent';
import PackageFormComponent from './components/package/container/PackageFormComponent';
import AccommodationOverviewComponent from './components/accommodation/container/AccommodationOverviewComponent';
import AccommodationItemComponent from './components/accommodation/container/AccommodationItemComponent';
import AccommodationFormComponent from './components/accommodation/container/AccommodationFormComponent';
import GalleryPage from './components/gallery/ImageGallery';
import LoginComponent from './components/Login/container/LoginComponent';
import Admin from './components/admin/container/AdminComponent';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeComponent} />
    <Route path="/login" component={LoginComponent} />
    <Route path="/about" component={AboutPageComponent} />
    <Route path="/paros" component={ParosPageComponent} />
    <Route path="/yoga" component={YogaPageComponent} />
    <Route path="/food" component={FoodPageComponent} />
    <Route path="/more" component={MorePageComponent} />
    <Route path="/accommodation2" component={AccommodationPageComponent} />
    <Route path="/contact" component={ContactComponent} />
    <Route path="/gallery" component={GalleryPage} />
    <Route path="/calendar" component={CalendarComponent} />
    <Route path="/package" component={PackageOverviewComponent} />
    <Route path="/package/:id" component={PackageItemComponent} />
    <Route path="/packageForm" component={PackageFormComponent} />
    <Route path="/packageForm/:id" component={PackageFormComponent} />
    <Route path="/accommodation" component={AccommodationOverviewComponent} />
    <Route path="/accommodation/:id" component={AccommodationItemComponent} />
    <Route path="/accommodationForm" component={AccommodationFormComponent} />
    <Route path="/accommodationForm/:id" component={AccommodationFormComponent} />
    <Route path="/admin" component={Admin} />
  </Route>
);
