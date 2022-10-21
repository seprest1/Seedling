import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about_container">
          <div className="about_photos">
              <img src="/Images/headshot.jpeg" className="headshot"/>
              <div className="about_name">
                <h1 className="sarah_p">SARAH PRESTON</h1>
                <h2 className="she_her">(she/her)</h2>
              </div>
              <div className="linked_in_section">
              <img src="/Images/linked_in_logo.png" className="linked_in_photo"/>
              <img src="/Images/linked_in.png" className="linked_in_qr"/>
              </div>
          </div>
          <div className="about_text">
              <div className="special_thanks">
                <h2 className="about_h2">SPECIAL THANKS:</h2>
                <p>My fellow Lengellians for their support and collaboration, the instructors and support staff at Prime Digital Academy (especially Matt and Bethany) and of course, my mom.</p>
              </div>
              <div className="technologies">
              <h2 className="about_h2">TECHNOLOGIES:</h2>
              <ul className="about_list">
                <li>React.js</li>
                <li>Redux/Saga</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Moment.js</li>
                <li>CSS+</li>
                <li>MUI</li>
                <li>SweetAlerts</li>
              </ul> 
          </div>
      </div>
    </div>
  );
}

export default AboutPage;
