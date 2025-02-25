import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">🔑 Login Page</h1>
      <p>Click below to simulate login:</p>
      <button
        onClick={login}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
