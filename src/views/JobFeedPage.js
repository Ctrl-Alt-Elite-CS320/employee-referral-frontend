import '../styles/Feed.css';
import JobItem from '../components/JobItem.js';
import Logo from '../components/Logo.js';
import Filters from '../components/Filters';
import ReferCandidate from '../components/ReferCandidate';
import ProfileIcon from '../components/ProfileIcon';

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
            <div>
              <input className="search" type="search" placeholder="Search listings" />
              <form>
                <select className="list-sort">
                  <option value="all">All Listings</option>
                  <option value="mine">Only My Lisitngs</option>
                  <option value="others">Other Listings</option>
                </select>
              </form>
            </div>
            <br /><br />

            <div className="scroll-gradient"></div>

            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

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