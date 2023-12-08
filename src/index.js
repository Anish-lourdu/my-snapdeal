import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header/header';
import Section from './section/section';
import SampleMain from './sample/sampleMain';
import Footer from './footer/footer';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    {/* header */}
    <Header/>
    {/* section */}
    {/* <Section/> */}
    {/* Sample */}
    {/* <SampleMain/> */}
    {/* footer */}
    {/* <Footer/> */}
  </React.StrictMode>
);

