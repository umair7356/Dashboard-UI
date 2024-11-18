
import Header from "./comp/Header.jsx";
import Stats from "./comp/Stats.jsx";


const Dashboard = () => {
  return (
      <div className="flex">
        <img  className=""/>
        <div className="flex-1 bg-gray-100 ">
          <Header />
          <div className="p-6 mt-5">
            <h2 className="text-2xl font-bold mb-4">Today</h2>
            <Stats />
          </div>
          <div className="p-6 mt-10">
            <h2 className="text-2xl font-bold mb-4">Weekly</h2>
            <Stats />
          </div>
          <div className="p-6 mt-9 pb-16">
            <h2 className="text-2xl font-bold mb-4">Monthly</h2>
            <Stats />
          </div>    
               </div>
      </div>
  );
};

export default Dashboard;
