import { Navigate } from "react-router";

import useSpreadContext from "../customHooks/useSpreadContext";

interface Props {
  children: JSX.Element;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  const { userToken } = useSpreadContext();

  if (userToken) return <Navigate to="/" />;

  return children;
};

export default PublicRoute;
