import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", income: 4000, expenses: 2400 },
  { month: "Feb", income: 3000, expenses: 1398 },
  { month: "Mar", income: 5000, expenses: 2800 },
  { month: "Apr", income: 5000, expenses: 2800 },
];

const FinanceChart = () => (
  <BarChart width={800} height={500} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="income" fill="#4ade80" />
    <Bar dataKey="expenses" fill="#f87171" />
  </BarChart>
);

export default FinanceChart;
