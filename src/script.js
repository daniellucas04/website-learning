google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540]
    ]);

    var options = {
        title: 'Product Performance',
        titleTextStyle: { color: 'black', fontSize: '15'},
        curveType: 'function',
        legend: { position: 'bottom' },
        textStyle: { color: 'white'},
        // backgroundColor: {fill: '#1A1A1A', fillOpacity: 0.5}
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}

const cardProductA = document.getElementById('card-product-a');
const chart = document.getElementById('curve_chart');

function animationCard(){
    cardProductA.classList.toggle('animationCard');
    if(chart.style.display === 'block'){
        chart.style.display = 'none';
    }else{
        chart.style.display = 'block';
    }
};

cardProductA.addEventListener('dblclick', ()=>{
    animationCard();
});