import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
const EditJobPage = ({updateJob}) => {
  const job = useLoaderData();

  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [location, setLocation] = useState(job.location);
  const [description, setDescription] = useState(job.description);
  const [salary, setSalary] = useState(job.salary);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(job.company.description);
  const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
  const [contactPhone, setContactPhone] = useState(job.company.contactPhone);

 // Navigator
  const navigate = useNavigate();
  const updateJobClicked = (e) => {
    e.preventDefault();

   const updatedJob = {
     id : job.id,
     title, // A shortcut for title : title
     type,
     location,
     description,
     salary,
     company: {
      name: companyName,
      description : companyDescription,
      contactEmail,
      contactPhone,
     }
   }
  // Calling a function that will add it to db
  updateJob(updatedJob);
  toast.success("Job updated successfully");
  // Returning back to jobsPage
  return navigate("/jobs");
}
  return (
    <div className="container mx-auto my-auto py-24 px-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Edit Job Listing</h2>
      <form onSubmit={updateJobClicked} className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="jobTitle">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            placeholder="Enter job title"
            required
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            placeholder="Enter job location"
            required
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="jobType">
            Job Type
          </label>
          <select
            id="jobType"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            onChange={(e)=>setType(e.target.value)}
            value={type}
          >
            <option value="Full-time" >Full-Time</option>
            <option value="Part-time">Part-Time</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Job Description
          </label>
          <textarea
            id="description"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            rows="5"
            placeholder="Enter job description"
            required
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="salary">
            Salary
          </label>
          <input
            type="text"
            id="salary"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            placeholder="Enter salary"
            required
            value={salary}
            onChange={(e)=>setSalary(e.target.value)}
          />
        </div>
        {/** Company info  */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="companyName">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            placeholder="Enter company name"
            required
            value={companyName}
            onChange={(e)=>setCompanyName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="companyName">
            Company Description
          </label>
          <textarea
            id="company_description"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            rows="5"
            placeholder="Enter company description"
            required
            value={companyDescription}
            onChange={(e)=>setCompanyDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="companyName">
            Contact Email
          </label>
          <input
            type="text"
            id="contactEmail"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            placeholder="Enter contact email"
            required
            value={contactEmail}
            onChange={(e)=>setContactEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="companyName">
            Contact Phone
          </label>
          <input
            type="text"
            id="contactPhone"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            placeholder="Enter contact phone"
            required
            value={contactPhone}
            onChange={(e)=>setContactPhone(e.target.value)}
          />
        </div>
       
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditJobPage