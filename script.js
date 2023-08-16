document.addEventListener("DOMContentLoaded", function() {
    // Sample data for the Bar Chart and Line Graph
    const barChartCanvas = document.getElementById("barChart").getContext("2d");
    const barChart = new Chart(barChartCanvas, {
        type: "bar",
        data: {
            labels: ["A", "B", "C", "D", "E"],
            datasets: [{
                label: "Bar Chart Data",
                data: [30, 45, 22, 60, 12],
                backgroundColor: "#3498db",
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const lineGraphCanvas = document.getElementById("lineGraph").getContext("2d");
    const lineGraph = new Chart(lineGraphCanvas, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
            datasets: [{
                label: "Line Graph Data",
                data: [10, 25, 18, 40, 32],
                borderColor: "#e74c3c",
                fill: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
