import Layout from "../components/Layout";
import Error from "./_error";

const Github = ({ user, statusCode }) => {

  if(statusCode) {
    return <Error statusCode={statusCode} />
  }
  return (
    <Layout>
      <div className="row">
        <div className="col-md-4 offset-md-4 py-4">
          <div className="card card-body text-center">
            <h1>{user.login}</h1>
            <img src={user.avatar_url} alt="" />
            <p className="pt-2">Hi! im a Front End Developer!</p>
            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-outline-success"
            >
              Go check my Github page
            </a>
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

export default Github;
