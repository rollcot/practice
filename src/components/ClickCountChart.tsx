import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

type ClickCountChartProps = {
  clickCounts: number[]
}

function ClickCountChart(props: ClickCountChartProps) {
  const myChartRef = useRef(null);

  useEffect(() => {
    const myChart = myChartRef?.current;
    if (!myChart) return;
    const drawnChart = 
      new Chart(myChart, {
        type: "bar",
        data: {
          labels: props.clickCounts,
          datasets: [{
            label: "# of Votes",
            data: props.clickCounts,
            borderWidth: 1,
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          animation: false,
        },
      });
    return () => drawnChart.destroy();
  }, [props.clickCounts]);
  return(
    <>
      <canvas ref={myChartRef}></canvas>
    </>        
  );
}

export default ClickCountChart;