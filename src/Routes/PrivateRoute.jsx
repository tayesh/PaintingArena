import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate ,useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div>
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
            </div>
        )
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.object,
}

export default PrivateRoute;