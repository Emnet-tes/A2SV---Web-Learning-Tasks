'use client';
import React from 'react'
import JobPostings from '../components/JobPostings';
import { Provider } from 'react-redux';
import store from '../lib/store';

function Home  ()  {
 
  return (
<Provider store={store}>
    <JobPostings/>
   </Provider>
  )
}
export default Home;