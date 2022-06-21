import Layout from "../components/Layout";
import Link from "next/link";
import { skills, experience, projects } from "../profile";

const Index = () => {
  return (
    <Layout>
      {/**Header Card */}
      <header className="row py-1">
        <div className="col-md-12">
          <div className="card card-body bg-primary">
            <div className="row">
              <div className="col-md-4">
                <img src="1.jpg" alt="Pablo Ciruelos" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1 className="text-center mb-3">Pablo Nicolas Ciruelos</h1>
                <h3 className="underlinetitle">Front End Developer</h3>
                <p>
               Hi! im Developer based in Copenhagen passionate about building web applications. I started my carrer in Argentina and now I am working in Denmark, therefore I have strong communication skills in Spanish and English.
                
                <br /><br />My strenght is my excellent capability of maintaining code and fixing bugs as well as conducting to final testing and development. I have five years of practical experience in designing, developing web, OOP, SPA, POS, Ecommerce, CMS and mobile applications. In my spare time I climb, draw and play drums.
                </p>
                <Link href="https://www.linkedin.com/in/pablociruelos/">
                <a>Contact me</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/** Second Section */}

      <div className="row py-2">
        <div className="col-md-4 mb-2">
          <div className="card bh-light">
            <div className="card-body style=">
              <h4 className="text-center">Skills</h4>

              {skills.map((s, i) => (
                <div className="py-1" key={i}>
                  <h6>{s.skill}</h6>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${s.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bh-light">
            <div className="card-body">
              <h4>Experience </h4>
              <ul>
                {experience.map((e, i) => (
                  <li key={i}>
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="pe-2">
                        <h5 className="underlinetitle">{e.title}</h5>
                      </div>
                      <div className="text-muted">
                        <h6>
                          ({e.from}-{e.to})
                        </h6>
                      </div>
                    </div>
                    <p>
                      {e.description} <br /><br />
                      <h6 className="d-inline-flex pe-1 mb-0">Used Skills</h6>{e.tags}<br />
                      {/* <Link href={e.link}>
                        <a><div className="pt-1">Link of interest</div></a>
                      </Link> */}
                    </p>
                  </li>
                ))}
              </ul><div className="text-center">
                
              <Link href="https://www.linkedin.com/in/pablociruelos/">
                
                <a className="btn btn-sm btn-primary">Know more!</a>

              </Link>
              <Link href="/education">
                <a className="btn btn-sm btn-primary ms-2">Education</a>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** Portfolio */}
      <div id="portfolio" className="row py-2">
        <div className="col-md-12">
          <div className="">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light ">Portfolio</h1>
              </div>
              {projects.map((e, i) => (
                <div className="col-md-4 p-2" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img
                        src={`/${e.image}`}
                        alt=""
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body">
                      <h4>{e.name}</h4>
                      <p>{e.descripcion}</p>
                      <a href={e.link} target="_blank">know more</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="https://www.behance.net/elchicoprodigio">
              <a className="d-grid gap-2 btn btn-outline-light">
                More projects
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/** Portfolio */}

      
    </Layout>
  );
};

export default Index;
