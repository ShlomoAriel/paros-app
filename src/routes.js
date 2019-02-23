import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/home/HomePage';
import HomeComponent from './components/home/container/HomeComponent';
import AboutPageComponent from './components/about/container/AboutPageComponent';
import ParosPageComponent from './components/paros/container/ParosPageComponent';
import AccommodationPageComponent from './components/accommodation/container/AccommodationPageComponent';
import ContactComponent from './components/contact/container/ContactComponent';
import PackageOverviewComponent from './components/package/container/PackageOverviewComponent';
import CalendarComponent from './components/calendar/container/CalendarComponent';
import PackageItemComponent from './components/package/container/PackageItemComponent';
import PackageFormComponent from './components/package/container/PackageFormComponent';
import PackagePage from './components/package/PackagePage';
import GalleryPage from './components/gallery/ImageGallery';
import LoginComponent from './components/Login/container/LoginComponent';
import Admin from './components/admin/container/AdminComponent';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeComponent} />
    <Route path="/login" component={LoginComponent} />
    <Route path="/about" component={AboutPageComponent} />
    <Route path="/paros" component={ParosPageComponent} />
    <Route path="/accommodation" component={AccommodationPageComponent} />
    <Route path="/contact" component={ContactComponent} />
    <Route path="/gallery" component={GalleryPage} />
    <Route path="/package" component={PackageOverviewComponent} />
    <Route path="/calendar" component={CalendarComponent} />
    <Route path="/package/:id" component={PackageItemComponent} />
    <Route path="/packages/:id" component={PackagePage} />
    <Route path="/packageForm" component={PackageFormComponent} />
    <Route path="/packageForm/:id" component={PackageFormComponent} />
    <Route path="/admin" component={Admin} />
  </Route>
);
