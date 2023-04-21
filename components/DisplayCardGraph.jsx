import { Chart, registerables } from "chart.js";

const DisplayCardGraph = () => {
  Chart.register(...registerables);
  let ctx1 = document.getElementById("myChart").getContext("2d");

  var myChart = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  return myChart;
};

export default DisplayCardGraph;
