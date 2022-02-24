import { AboutContainer } from './style'
import { Container, Header, ContainerRow, Card, Content } from "./style";

export default function About() {
  return (
    <Container>
      <Header>
        <h1>About Us</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </Header>
      <h2>Our Team</h2>
      <Content>
        <ContainerRow>
          <section>
            <article>
              <img src="assets/team1.jpg" alt="Jane" />
              <Card>
                <h2>Jane Doe</h2>
                <p className="title">President</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </Card>
            </article>
          </section>
        </ContainerRow>

        <ContainerRow>
          <section>
            <article>
              <img src="assets/team2.jpg" alt="Jane" />
              <Card>
                <h2>John Doe</h2>
                <p className="title">Vice President</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </Card>
            </article>
          </section>
        </ContainerRow>
        <ContainerRow>
          <section>
            <article>
              <img src="assets/team3.jpg" alt="Jane" />
              <Card>
                <h2>Arvin Doe</h2>
                <p className="title">CEO and Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </Card>
            </article>
          </section>
        </ContainerRow>
      </Content>
    </Container>
  );
}
