import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
const JobListings = ({ isHomePage = true }) => {
    // State Hook for loading spinner start it initially
    const [loading, setLoading] = useState(true);
    // State Hook for jobs
    const [jobs, setJobs] = useState([]);

    // Side Effect Hook
    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHomePage ? "http://localhost:8000/jobs?_limit=3" : "http://localhost:8000/jobs";
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setJobs(data);

            }
            catch (error) {
                console.log("Error fetching jobs", error);
            }
            finally {
                // Stop the loading spinner
                setLoading(false);
            }
        }

        // Calling the above function
        fetchJobs();
    }, []);


    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHomePage ? "Recent Jobs" : "All Jobs"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {loading ?
                        <Spinner loading={loading} />
                        :
                        jobs.map((job) => <JobListing key={job.id} job={job} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default JobListings