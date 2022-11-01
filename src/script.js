google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540]
    ]);

    var options = {
        title: 'Product Performance',
        titleTextStyle: { color: 'black', fontSize: '15' },
        curveType: 'function',
        legend: { position: 'bottom' },
        textStyle: { color: 'white' },
        // backgroundColor: {fill: '#1A1A1A', fillOpacity: 0.5}
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart2);


function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        title: 'My Daily Activities',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart3);


function drawChart3() {

    var data = google.visualization.arrayToDataTable([
        ['Effort', 'Amount given'],
        ['My all', 100],
    ]);

    var options = {
        pieHole: 0.5,
        pieSliceTextStyle: {
            color: 'black',
        },
        legend: 'none'
    };

    var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
    chart.draw(data, options);
}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart4);

function drawChart4() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

const cardProductA = document.getElementById('card-product-a');
const cardProductB = document.getElementById('card-product-b');
const cardProductC = document.getElementById('card-product-c');
const cardProductD = document.getElementById('card-product-d');
const curveChart = document.getElementById('curve_chart');
const pieChart3D = document.getElementById('piechart_3d');
const donutChart = document.getElementById('donut_single');
const pieChart = document.getElementById('piechart');

function animationCardA() {
    cardProductA.classList.toggle('animationCard');

    if (curveChart.style.display === 'block') {
        curveChart.style.display = 'none';
    } else {
        curveChart.style.display = 'block';
    }
};

function animationCardB() {
    cardProductB.classList.toggle('animationCard');

    if (pieChart3D.style.display === 'block') {
        pieChart3D.style.display = 'none';
    } else {
        pieChart3D.style.display = 'block';
    }
};

function animationCardC() {
    cardProductC.classList.toggle('animationCard');

    if (donutChart.style.display === 'block') {
        donutChart.style.display = 'none';
    } else {
        donutChart.style.display = 'block';
    }
};

function animationCardD() {
    cardProductD.classList.toggle('animationCard');

    if (pieChart.style.display === 'block') {
        pieChart.style.display = 'none';
    } else {
        pieChart.style.display = 'block';
    }
};

cardProductA.addEventListener('dblclick', () => {
    animationCardA();
});

cardProductB.addEventListener('dblclick', () => {
    animationCardB();
});

cardProductC.addEventListener('dblclick', () => {
    animationCardC();
});

cardProductD.addEventListener('dblclick', () => {
    animationCardD();
});