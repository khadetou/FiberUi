import Meta from "./Meta";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
