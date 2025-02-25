import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">📊 Dashboard</h1>
      <p>Only Potterheads can see this! 🪄</p>
      <button
        onClick={logout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
