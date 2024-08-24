import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
      <Hero title={"Awesome Job Platform"} subtitle={"by Maksat Abrayev"}/>
      <HomeCards/>
      <JobListings isHomePage={true}/>
      <ViewAllJobs/>
    </>
  )
}

export default HomePage