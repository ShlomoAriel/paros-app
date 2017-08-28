import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/home/HomePage';
import HomeComponent from './components/home/container/HomeComponent';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';
import ContactComponent from './components/contact/container/ContactComponent';
import PackageComponent from './components/package/container/PackageComponent';
import GalleryPage from './components/gallery/ImageGallery';
import Admin from './components/admin/container/AdminComponent';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeComponent} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactComponent} />
    <Route path="/gallery" component={GalleryPage} />
    <Route path="/package" component={PackageComponent} />
    <Route path="/admin" component={Admin} />
  </Route>
);
