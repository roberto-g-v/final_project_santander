// from data.js
var tableData = data;

// YOUR CODE HERE!
var filterButton=d3.select("#filter-btn");

filterButton.on("click",function(){
    var hourInput=document.getElementById("hour").value;
    console.log(hourInput);
    
    var dataFiltered=tableData.filter(record => (record.VISIBILITY == visibilityInput || visibilityInput == "") && (record.LIGHT == lightInput || lightInput == "")
    && (record.RDSFCOND == conditionInput || conditionInput == "") && (record.HOUR == hourInput || hourInput == "") && (record.ROAD_CLASS == roadInput || roadInput=="") 
    && (record.TRAFFCTL == trafficInput || trafficInput == ""));
    console.log(dataFiltered);

    var tbody=d3.select("tbody");
    tbody.html("");       
    dataFiltered.forEach(element => {
        var row=tbody.append("tr");
        row.append("td").text(element.HOUR);
    })
})
