var xValues = ["Jun", "Jul", "Aug", "Sep", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
var yValues = [55, 49, 44, 24, 15, 50, 60, 40, 20, 60, 43, 67];
var barColors = ["blue", "blue","blue","blue","blue","blue", "blue","blue","blue","blue", "blue", "blue"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});