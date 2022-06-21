import Layout from "../components/Layout";

const _error = ({statusCode}) => {
    return (
       <Layout>
           {
               statusCode ? (
               <p className="text-center">Cant be loaded <h1>status code:{statusCode}</h1></p>
               ): ( <p>nada</p> )
           }
       </Layout>
    );
}

export default _error;