import Card from "./Card";
import { TrendingUpIcon } from "@heroicons/react/solid";

const Stats = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-4 grid-flow-row  ">
      <Card
        title="Gross Revenue"
        value="$2,480"
        trend="2.15%"
        icon={<TrendingUpIcon className="w-6 h-6" />}
      />
      <Card
        title="Avg. Order Value"
        value="$56.12"
        trend="1.15%"
        icon={<TrendingUpIcon className="w-6 h-6" />}
      />
      <Card
        title="Total Orders"
        value="230"
        trend="3.25%"
        icon={<TrendingUpIcon className="w-6 h-6"
        />}
      />
      <Card
        title="Most order by User"
        value="230"
        trend="3.25%"
        icon={<TrendingUpIcon className="w-6 h-6"
         />}
      />
    </div>
  );
};

export default Stats;
