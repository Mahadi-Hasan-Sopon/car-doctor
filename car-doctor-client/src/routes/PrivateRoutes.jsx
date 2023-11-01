import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";
import LoadingSpinner from "../utils/LoadingSpinner/LoadingSpinner";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function PrivateRoutes({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <LoadingSpinner />;

  if (!user) return <Navigate to="/login" state={location.pathname} />;

  if (user) return children;
}

export default PrivateRoutes;
