import React, { useEffect, useState } from "react";
import '../styles/Feed.css';
import Logo from '../components/Logo.js';
import Filters from '../components/Filters';
import ReferCandidate from '../components/ReferCandidate';
import ProfileIcon from '../components/ProfileIcon';
import Search from '../components/search/Search';
import jobListings from '../data/jobListings';
import JobItem from "../components/search/JobItem";
import FilterCheckbox from "../components/search/FilterCheckbox";

function JobFeedPage() {
  const [JobList, setJobList] = useState([]);
  const [Filters, setFilters] = useState({
    types: [],

  });

  useEffect(() => {
    setJobList(jobListings);
  }, []);

  const getList = (variables) => {
    setJobList(jobListings);
  }

  const renderCards = JobList.map((jobList, index) => {
    return (
      <JobItem listing={jobList} />
    );
  });

  const showFilterResults = (filters) => {
    const variables = {
      filters: filters
    }

    getList(variables);
  }

  const handleFilters = (filters, type) => {
    const newFilters = { ...Filters }
    
    newFilters[type] = filters;
    
    console.log(newFilters);

    showFilterResults(newFilters);
    setFilters(newFilters);
  }

  return (
    <div className="JobFeedPage">
      <div className="main-content">
        <div className="feed-header">
          <Logo />
          <div className="feed-header-text col-80">
            <h1>Job Feed</h1>
            <h3>Manager</h3>
          </div>
          <div className="col-20">
            <ProfileIcon />
          </div>
        </div>
        <div className="divider">

        </div>
        <div className="feed-container">
          <div className="filter-container col-20">

            {/*<Search details={jobListings}/>*/}
            {/* Search */}
            <Search details={JobList} />

            {/* Filter */}
            <FilterCheckbox
              handleFilters={filters => handleFilters(filters, "type")}
            />
          </div>
          <div className="jobs-list col-40">

            {JobList.length === 0 ?
              < div >
                <h2>No post yet...</h2>
              </div> :
              <div>
                {renderCards}
              </div>
            }
          </div>
          <div className="job-details-container col-40">
            <ReferCandidate />
          </div>

        </div>
        <div className="add-button">
          <h1>+</h1>
        </div>
      </div>

    </div >
  );
}

export default JobFeedPage;