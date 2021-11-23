import '../styles/EmployeeProfile.css';
import '../styles/Feed.css';

function EmployeeProfile() {
    return (
    <div className="JobFeedPage">
        <div className="main-content">
            <div className="feed-header">
                <div>
                    <h1>Employee Name</h1>
                </div>
            </div>
            <div className="divider"></div>
            <div className="Employee Profile">
                <div className="big-rect">
                    <div className="rect1"></div>
                    <div className="email">Email</div>
                    <div className="rect2"></div>
                    <div className="employee-id">Employee ID</div>
                    <div className="rect3"></div>
                    <div className="change-password">Change password</div>
                    <div className="rect4"></div>
                    <div className="department">Department</div>
                    <div className="rect5"></div>
                    <div className="manager">Manager/s</div>
                    <div className="rect6"></div>
                    <div className="years">Years with the company</div>
                    <div className="rect7"></div>
                    <div className="referrals-made">Referrals made</div>
                </div>
            </div>
        </div>
    </div>
   );
 }

export default EmployeeProfile;