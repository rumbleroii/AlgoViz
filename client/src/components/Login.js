import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { useNavigate, redirect } from "react-router-dom";

const getToken = () => {
  const token = sessionStorage.getItem("sessionToken");
  return token;
};
const setToken = (res) => {
  console.log(res);
  sessionStorage.setItem("sessionToken", res.credential);
};

const Login = () => {
  const navigate = useNavigate();

  const onSuccess = async (res) => {
    try {
      setToken(res);
      navigate("/home");
    } catch (err) {
      redirect("/");
    }
  };

  const onError = (err) => console.log(err);

  return (
    <>
      <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Welcome To AlgoViz
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 pb-5">
              Login To Your Account
            </p>
            <div className="flex justify-center">
              <GoogleOAuthProvider clientId="686237414426-i403mqs4n53kj8n3e7m59nobp91dks41.apps.googleusercontent.com">
                <GoogleLogin onSuccess={onSuccess} onError={onError} />
              </GoogleOAuthProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
