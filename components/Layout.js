import Navbar from "./Navbar";
import { useRouter } from "next/router";
import Footer from "./Footer";
import { useEffect } from "react";
import NProgress from "nprogress";

const Layout = (props, footer = true) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouterChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouterChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouterChange);
    };
  }, []);

  return (
    <div className="d-flex flex-column h-100">
      <Navbar />
      <main className="container">{props.children}</main>

      {footer && (
        <footer className="footer ml-auto bg-dark text-light text-center">
          <div className="container p-4">
            <h4>Ciru ciruelo</h4>
            <p>2013 - {new Date().getFullYear()}</p>
          </div>
          
        </footer>
      )}
    </div>
  );
};

export default Layout;
