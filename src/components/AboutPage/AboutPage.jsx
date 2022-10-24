import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about_container">
          <div className="about_photos">
              <img src="/Images/About_Page/headshot.jpeg" className="headshot"/>
              <div className="about_name">
                <h1 className="sarah_p">SARAH PRESTON</h1>
                <h2 className="she_her">(she/her)</h2>
              </div>
              <div className="linked_in_section">
              <img src="/Images/About_Page/linked_in_logo.png" className="linked_in_photo"/>
              <img src="/Images/About_Page/linked_in.png" className="linked_in_qr"/>
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
                    <li>Axios</li>
                    <li>Passport</li>
                    <li>React Scroll Paralax</li>
                    <li>SweetAlerts</li>
                    <li>Accuweather API</li>
                  </ul>
                <div className="technologies_icons">
                  <img className="tech_icons" src="/Images/About_Page/Accuweather.png"/>
                  <img className="tech_icons" src="/Images/About_page/node.png"/>
                  <img className="tech_icons" src="/Images/About_Page/pgsql.png"/>
                  <img className="tech_icons" src="/Images/About_Page/react.png"/>
                  <img className="tech_icons" src="/Images/About_page/redux.png"/>
                </div>
          </div>
      </div>
    </div>
  );
}

export default AboutPage;
