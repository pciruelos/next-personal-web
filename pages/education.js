import Layout from "../components/Layout";
import Error from "./_error";
import Link from "next/link";
import { education } from "../profile";

const Education = ({ user, statusCode }) => {

  if(statusCode) {
    return <Error statusCode={statusCode} />
  }
  return (
    <Layout>
      <div className="col-md-8 offset-md-2 my-3">
          <div className="card bh-light">
            <div className="card-body">
              <h4>Education:</h4>
              <ul>
                {education.map((e, i) => (
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
                      {e.description}
                      <br />
                      <Link href={e.link}>
                        <a><div className="pt-1">Link of interest</div></a>
                      </Link>
                    </p>
                  </li>
                ))}
              </ul><div className="text-center">
                
              <Link href="/">
                
                <a className="btn btn-sm btn-primary">Back to CV</a>

              </Link>
              
              </div>
            </div>
          </div>
        </div>

    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/pciruelos");
  const data = await res.json();
  const statusCode = res.status > 200 ? res.status : false;

  console.log(data);
  return {
    props: {
      user: data,
    },
  };
}

export default Education;
