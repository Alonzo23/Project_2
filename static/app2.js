function init() {
 var data = [{
   values: [1, 23,0,1, 59, 73],
   labels: ['American Indian or Alaska Native', 'Black or African American', 'Asian','Multiple', 'Unknown', 'White'],
   type: "pie"
 }];
 var layout = {
   height: 600,
   width: 800
 };
 Plotly.plot("pie", data, layout);
}
function updatePlotly(newdata) {
 var PIE = document.getElementById("pie");
 Plotly.restyle(PIE, "values", [newdata]);
}
function getData(dataset) {
 var data = [];
 switch (dataset) {
 case "dataset1":
   data = [1, 23,0,1, 59, 73];
   break;
 case "dataset2":
   data = [8, 6, 1, 1, 15,27];
   break;
 case "dataset3":
   data = [19, 886, 87, 309, 3176,3016];
   break;
 case "dataset4":
   data = [0, 156, 4, 31, 643,345];
   break;
 case "dataset5":
   data = [1, 32, 0, 3, 90,160];
   break;
 case "dataset6":
   data = [38, 315, 30, 47, 1066,1000];
   break;
 case "dataset7":
   data = [6, 112, 4, 16, 177,157];
   break;
 default:
       data = [0, 0, 0, 0];
 }
 updatePlotly(data);
}
init();