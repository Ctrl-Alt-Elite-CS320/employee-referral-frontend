import '../styles/Feed.css';
import Logo from '../components/Logo.js';
import Filters from '../components/Filters';
import ReferCandidate from '../components/ReferCandidate';
import ProfileIcon from '../components/ProfileIcon';
import Search from '../components/search/Search';
import jobListings from '../data/jobListings';

function JobFeedPage() {
  return (
    <div className="JobFeedPage">
      <div className="filter-container">
        <Logo />
        <Filters />
      </div>
      <div className="main-content">
        <div className="feed-header">
          <div className="col-80">
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
          <div className="jobs-list col-50">
            <Search details={jobListings}/>
          </div>
          <div className="job-details-container col-50">
            <ReferCandidate />
          </div>

        </div>
        <div className="add-button">
          <h1>+</h1>
        </div>
      </div>

    </div>
  );
}

export default JobFeedPage;