import {Container} from "./style"

export default function About() {
  return (
    <Container>
      <section>
        <h1>About Us</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </section>
      <h2>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="assets/team1.jpg" alt="Jane" />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">President</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="card">
            <img src="assets/team2.jpg" alt="Jane" />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Vice President</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="card">
            <img src="assets/team3.jpg" alt="Jane" />
            <div className="container">
              <h2>Arvin Doe</h2>
              <p className="title">CEO and Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </Container>
  );
}
