import { Pie } from "react-chartjs-2";

const PieChart = ({ data }) => {
  /* 
    data: An Array of two numbers 
    [no. of people vaccinated, no. of people not vaccinated]
  */
  const options = {
    labels: ["Vaccinated", "Not Vaccinated"],
    datasets: [
      {
        label: "My First Dataset",
        data: data,
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4
      }
    ],
    height: "100%"
  };
  return <div style={{ width: '100px', height: '100px' }}>
     <Pie data={options} />
     </div>;
};

export default PieChart;