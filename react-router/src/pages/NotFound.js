import { Helmet } from "react-helmet";

export default function PageNotFound() {
  return (
    <section>
      <Helmet>
        <title>404 Page Not Found - ro.com</title>
      </Helmet>
      <h1>404</h1>
      <p>Page Not Found</p>
    </section>
  );
}
