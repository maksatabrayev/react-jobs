import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, { jobLoader } from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'



const App = () => {
  // Add  new job
  const addJob = async (newJob) =>{
    const response = await fetch("http://localhost:8000/jobs", 
      {
        method: "POST",
        headers : {
          'Content-Type' : 'application-json'
        },
        body: JSON.stringify(newJob),
      }
    );

    return;
  }

  // Delete a job
  const deleteJob = async (id) => {
    const response = await fetch(`http://localhost:8000/jobs/${id}`, {
      method: "DELETE",
    });

    return;
  };

  // Update a job
  const updateJob = async (job) => {
    const response = await fetch(`http://localhost:8000/jobs/${job.id}`, 
      {
        method: "PUT",
        headers : {
          'Content-Type' : 'application-json'
        },
        body: JSON.stringify(job),
      }
    );

    return;
  }


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index={true} element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader}/>
        <Route path='/add-job' element={<AddJobPage addJob={addJob} />} />
        <Route path= 'edit-job/:id' element={<EditJobPage updateJob={updateJob}/>} loader={jobLoader}/>
        <Route path='/*' element={<NotFoundPage />} />
      </Route>

    )
  );
  return (
    <RouterProvider router={router} />
  )
}

export default App 