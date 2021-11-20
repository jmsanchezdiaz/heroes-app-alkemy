import { Navigate } from "react-router";

import useSpreadContext from "../customHooks/useSpreadContext";

const PrivateRoute: React.FC<any> = ({ children }) => {
  const { userToken } = useSpreadContext();

  if (!userToken) return <Navigate to="/login" />;

  return children;
};

export default PrivateRoute;
