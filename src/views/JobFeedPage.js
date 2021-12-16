import '../styles/Feed.css';
import JobItem from '../components/JobItem.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from '../components/Logo.js';
import Filters from '../components/Filters';
import Loading from '../components/Loading';
import ReferCandidate from '../components/ReferCandidate';
import ReferralItem from '../components/ReferralItem';
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import '../styles/ProfileIcon.css';
function JobFeedPage({ setToken }) {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(0);
  const [loading, setLoading] = useState(false);
  const [referrals, setReferrals] = useState([]);
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    companyid: -1,
    employeeid: -1,
    email: '',
    ismanager: 0,
    positiontitle: '',
    startdate: ''
  });

  useEffect(function () {

    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('JWT')}`;
    axios.get('/users/me').then(res => {
      if (res.status == 200) {
        console.log("GOT ME:");
        console.log(res.data);
        setUser(res.data);
      }
      return res.data;
    }).then((u) => {
      return axios.get('/positions/all', { params: { compId: u.companyid } })
    }).then(res => {
      if (res.status == 200) {
        setJobs(res.data);
        setSelectedJob(res.data[0].id);
      }
    }).catch(err => {
      console.log(err.message);
    });
  }, []);
  useEffect(function () {
    if (user.ismanager) {

      axios.get(`/positions/${selectedJob}/applications/all`).then(res => {
        if (res.status == 200) {
          console.log("Got referrals");
          console.log(res.data);
          setReferrals(res.data);
        }
      })
    }
  }, [user, selectedJob]);
  // useEffect(function () {

  // }, selectedJob);
  const logout = () => {
    localStorage.setItem('JWT', null);
    axios.defaults.headers.common.Authorization = null;
    setToken(null);
  };

  let rightComponent;
  if (user.ismanager) {
    rightComponent = (
      <div style={{
        backgroundColor: "#111111"
      }}>
        <br></br>
        <h2 style={{ padding: 20, fontSize: 30, color: "#ED2553" }}>Referrals for Selected Job</h2>
        <div style={{
          maxHeight: '84vh',
          overflowY: 'scroll'
        }}>
          {referrals.map((x, i) => <ReferralItem data={x} key={i} />)}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  } else {
    rightComponent = <ReferCandidate job={jobs.find(j => j.id === selectedJob)} setLoading={setLoading} />
  }



  return (
    <div className="JobFeedPage">
      <div className="feed-header">
        <div className="col-200px">
          <Logo />
        </div>
        <div className="col-200px">
          <h1>Job Feed</h1>
          <h3>{user.ismanager ? "Manager" : "Employee"}</h3>
        </div>
        <div className="col-60 searchHeader">
          <input className="search" type="search" placeholder="Search listings" />
          <form>
            <select className="list-sort">
              <option value="all">All Listings</option>
              <option value="mine">Only My Lisitngs</option>
              <option value="others">Other Listings</option>
            </select>
          </form>
        </div>
        <div className="col-20">
          <Button onClick={logout}>Logout</Button>
          <button className="circle" onClick={() => { }
          }>
            {user.firstname[0] + user.lastname[0]}
          </button>
        </div>
      </div>
      <div className="filter-container">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Filters />
      </div>
      <div className="main-content">

        {/* <div className="divider">

        </div> */}
        <div className="feed-container">
          <div className="jobs-list col-50">

            <br /><br />

            <div className="scroll-gradient"></div>


            <div className="scroll-gradient"></div>
            {
              jobs.map((x) => <JobItem data={x} key={x.id} select={setSelectedJob} selected={selectedJob == x.id} generate={setReferrals} setLoading={setLoading} />)
            }
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

          </div>

          <div className="job-details-container col-50">
            {rightComponent}

          </div>

        </div>


        <Link to="/newlisting">
          <div className="add-button">
            <h1>+</h1>
          </div>
        </Link>
      </div>
      <Loading isLoading={loading} />
    </div>

  );
}

export default JobFeedPage;
