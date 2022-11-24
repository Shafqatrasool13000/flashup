import { Navigate } from "react-router-dom";
import { useNetwork } from "wagmi";
import { ProtectedRouteProps } from "../../utils/types";
import { toast } from "react-toastify";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isMetamaskConnect,
  children,
}) => {
  const { chain } = useNetwork();
  if (!isMetamaskConnect) {
    (() => toast("Plz Connect Wallet"))();
    return <Navigate to="/" />;
  } else if (chain?.id !== 1 && chain?.id !== 5) {
    (() => toast("Unsupported Chain"))();
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
