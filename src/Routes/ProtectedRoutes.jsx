import { useUser } from "@clerk/react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();

  // ⏳ Wait until Clerk loads
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // ❌ Not logged in
  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }

  // ✅ Logged in
  return children;
};

export default ProtectedRoute;