function createTriangle(number) {
    d3.select("#triangle-container").selectAll("svg").remove();
    const size = 80;
    // 30 * 30 svg size
    // outer center is placed at 15,30
    // Initially the polygon is: 0,30 15,15 30,30
    const pointLeft = [0, size];
    const pointTop = [size/2, size/2];
    const pointRight = [size, size];

    for (let i = 0; i < number; i++) {
        const adjustRange = 3 * i;
        const points = `${pointLeft[0] + adjustRange},${pointLeft[1]} 
                        ${pointTop[0]},${pointTop[1] + adjustRange} 
                        ${pointRight[0] - adjustRange},${pointRight[1]}`;
        
        const defaultX = 30;
        const defaultY = 50;
        const adjustX = -size * i;
        const adjustHeight = (11 - 0.1 * i) * i;

        d3.select("#triangle-container")
            .append("svg")
                .attr("width", size)
                .attr("height", size)
                .attr("position", "absolute")
                .attr("transform", `translate(${defaultX + adjustX}, ${defaultY - adjustHeight})`)
            .append("polygon")
                .attr("points", points)
                .attr("fill", "green")
                .attr("stroke", "green")
                .attr("stroke-linejoin", "round");
    }
}

function funny(number) {
    if (number == "0") document.getElementById("message").textContent = "禿頭!";
    else document.getElementById("message").textContent = "";
}

function updateTriangles() {
    const number = d3.select("#triangle-slider").property("value");
    d3.select("#triangle-count").text(number);
    funny(number);
    createTriangle(number);
}

d3.select("#triangle-slider").on("input", updateTriangles);

updateTriangles();