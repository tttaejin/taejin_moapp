$(document).ready(function () {
  // Example: Handling an event when the user scrolls to a specific section
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 300) {
      // Add any jQuery functionality here when scrolling past 300px
      console.log("You've scrolled past 300px!");
    }
  });

  // Example: Smooth scroll to a section (if needed)
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(document).ready(function () {
  $("nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      // 애니메이션을 통해 해당 위치로 부드럽게 스크롤
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
  Highcharts.chart("chart-placeholder_01", {
    chart: {
      type: "column",
      backgroundColor: null,
    },
    title: {
      text: null,
    },
    exporting: {
      enabled: false, // 햄버거 바 제거
    },
    credits: {
      enabled: false, // 하단의 Highcharts.com 워터마크 제거
    },
    xAxis: {
      type: "category",
      labels: {
        autoRotation: [0, 0],
        style: {
          fontSize: "12px",
          fontFamily: "pretendard,",
        },
      },
    },
    yAxis: {
      min: 0,
      max: 4000,
      title: {
        text: null,
        fontFamily: "pretendard",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "걸음수 : <b>{point.y:.1f} 걸음</b>",
    },
    series: [
      {
        name: "걸음수",
        colors: ["#6C80A5"],
        colorByPoint: true,
        groupPadding: 0,
        data: [
          ["06", 0],
          ["07", 0],
          ["08", 0],
          ["09", 0],
          ["10", 0],
          ["11", 0],
          ["12", 1342],
          ["13", 446],
          ["14", 1982],
          ["15", 1583],
          ["16", 1161],
          ["17", 1860],
          ["18", 2403],
          ["19", 1520],
          ["20", 0],
          ["21", 28],
          ["22", 0],
          ["23", 0],
          ["00", 0],
        ],
      },
    ],
  });
  Highcharts.chart("chart-placeholder_02", {
    chart: {
      type: "column",
      backgroundColor: null,
    },
    title: {
      text: null,
    },
    exporting: {
      enabled: false, // 햄버거 바 제거
    },
    credits: {
      enabled: false, // 하단의 Highcharts.com 워터마크 제거
    },
    xAxis: {
      type: "category",
      labels: {
        autoRotation: [0, 0],
        style: {
          fontSize: "12px",
          fontFamily: "pretendard,",
        },
      },
    },
    yAxis: {
      min: 0,
      max: 4000,
      title: {
        text: null,
        fontFamily: "pretendard",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "걸음수 : <b>{point.y:.1f} 걸음</b>",
    },
    series: [
      {
        name: "걸음수",
        colors: ["#6C80A5"],
        colorByPoint: true,
        groupPadding: 0,
        data: [
          ["06", 0],
          ["07", 0],
          ["08", 0],
          ["09", 0],
          ["10", 1719],
          ["11", 1451],
          ["12", 1565],
          ["13", 2405],
          ["14", 2681],
          ["15", 1507],
          ["16", 1802],
          ["17", 3621],
          ["18", 265],
          ["19", 1146],
          ["20", 578],
          ["21", 14],
          ["22", 0],
          ["23", 0],
          ["00", 0],
        ],
      },
    ],
  });
  Highcharts.chart("chart-placeholder_03", {
    chart: {
      type: "column",
      backgroundColor: null,
    },
    title: {
      text: null,
    },
    exporting: {
      enabled: false, // 햄버거 바 제거
    },
    credits: {
      enabled: false, // 하단의 Highcharts.com 워터마크 제거
    },
    xAxis: {
      type: "category",
      labels: {
        autoRotation: [0, 0],
        style: {
          fontSize: "12px",
          fontFamily: "pretendard,",
        },
      },
    },
    yAxis: {
      min: 0,
      max: 4000,
      title: {
        text: null,
        fontFamily: "pretendard",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "걸음수 : <b>{point.y:.1f} 걸음</b>",
    },
    series: [
      {
        name: "걸음수",
        colors: ["#6C80A5"],
        colorByPoint: true,
        groupPadding: 0,
        data: [
          ["06", 0],
          ["07", 0],
          ["08", 0],
          ["09", 0],
          ["10", 565],
          ["11", 2094],
          ["12", 1276],
          ["13", 3419],
          ["14", 1444],
          ["15", 4062],
          ["16", 2228],
          ["17", 1186],
          ["18", 1405],
          ["19", 727],
          ["20", 766],
          ["21", 0],
          ["22", 0],
          ["23", 0],
          ["00", 0],
        ],
      },
    ],
  });
  Highcharts.chart("chart-placeholder_04", {
    chart: {
      type: "column",
      backgroundColor: null,
    },
    title: {
      text: null,
    },
    exporting: {
      enabled: false, // 햄버거 바 제거
    },
    credits: {
      enabled: false, // 하단의 Highcharts.com 워터마크 제거
    },
    xAxis: {
      type: "category",
      labels: {
        autoRotation: [0, 0],
        style: {
          fontSize: "12px",
          fontFamily: "pretendard,",
        },
      },
    },
    yAxis: {
      min: 0,
      max: 4000,
      title: {
        text: null,
        fontFamily: "pretendard",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "걸음수 : <b>{point.y:.1f} 걸음</b>",
    },
    series: [
      {
        name: "걸음수",
        colors: ["#6C80A5"],
        colorByPoint: true,
        groupPadding: 0,
        data: [
          ["06", 0],
          ["07", 0],
          ["08", 0],
          ["09", 0],
          ["10", 1458],
          ["11", 0],
          ["12", 8],
          ["13", 12],
          ["14", 701],
          ["15", 2447],
          ["16", 1552],
          ["17", 3155],
          ["18", 1474],
          ["19", 1179],
          ["20", 235],
          ["21", 546],
          ["22", 0],
          ["23", 0],
          ["00", 0],
        ],
      },
    ],
  });
  Highcharts.chart("chart-placeholder_05", {
    chart: {
      type: "column",
      backgroundColor: null,
    },
    title: {
      text: null,
    },
    exporting: {
      enabled: false, // 햄버거 바 제거
    },
    credits: {
      enabled: false, // 하단의 Highcharts.com 워터마크 제거
    },
    xAxis: {
      type: "category",
      labels: {
        autoRotation: [0, 0],
        style: {
          fontSize: "12px",
          fontFamily: "pretendard,",
        },
      },
    },
    yAxis: {
      min: 0,
      max: 4000,
      title: {
        text: null,
        fontFamily: "pretendard",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "걸음수 : <b>{point.y:.1f} 걸음</b>",
    },
    series: [
      {
        name: "걸음수",
        colors: ["#6C80A5"],
        colorByPoint: true,
        groupPadding: 0,
        data: [
          ["06", 0],
          ["07", 0],
          ["08", 0],
          ["09", 2116],
          ["10", 653],
          ["11", 537],
          ["12", 3091],
          ["13", 1582],
          ["14", 3311],
          ["15", 1929],
          ["16", 2035],
          ["17", 1796],
          ["18", 933],
          ["19", 1],
          ["20", 1593],
          ["21", 836],
          ["22", 171],
          ["23", 0],
          ["00", 0],
        ],
      },
    ],
  });
  Highcharts.chart("chart-placeholder_06", {
    chart: {
      type: "column",
      backgroundColor: null,
    },
    title: {
      text: null,
    },
    exporting: {
      enabled: false, // 햄버거 바 제거
    },
    credits: {
      enabled: false, // 하단의 Highcharts.com 워터마크 제거
    },
    xAxis: {
      type: "category",
      labels: {
        autoRotation: [0, 0],
        style: {
          fontSize: "12px",
          fontFamily: "pretendard,",
        },
      },
    },
    yAxis: {
      min: 0,
      max: 4000,
      title: {
        text: null,
        fontFamily: "pretendard",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "걸음수 : <b>{point.y:.1f} 걸음</b>",
    },
    series: [
      {
        name: "걸음수",
        colors: ["#6C80A5"],
        colorByPoint: true,
        groupPadding: 0,
        data: [
          ["06", 0],
          ["07", 0],
          ["08", 0],
          ["09", 0],
          ["10", 7],
          ["11", 3150],
          ["12", 1034],
          ["13", 2908],
          ["14", 1677],
          ["15", 2380],
          ["16", 899],
          ["17", 1580],
          ["18", 2158],
          ["19", 474],
          ["20", 24],
          ["21", 646],
          ["22", 729],
          ["23", 0],
          ["00", 0],
        ],
      },
    ],
  });
  Highcharts.chart("chart-placeholder_07", {
    chart: {
      type: "column",
      backgroundColor: null,
    },
    title: {
      text: null,
    },
    exporting: {
      enabled: false, // 햄버거 바 제거
    },
    credits: {
      enabled: false, // 하단의 Highcharts.com 워터마크 제거
    },
    xAxis: {
      type: "category",
      labels: {
        autoRotation: [0, 0],
        style: {
          fontSize: "12px",
          fontFamily: "pretendard,",
        },
      },
    },
    yAxis: {
      min: 0,
      max: 4000,
      title: {
        text: null,
        fontFamily: "pretendard",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "걸음수 : <b>{point.y:.1f} 걸음</b>",
    },
    series: [
      {
        name: "걸음수",
        colors: ["#6C80A5"],
        colorByPoint: true,
        groupPadding: 0,
        data: [
          ["06", 0],
          ["07", 0],
          ["08", 0],
          ["09", 16],
          ["10", 1032],
          ["11", 0],
          ["12", 0],
          ["13", 973],
          ["14", 3214],
          ["15", 1029],
          ["16", 83],
          ["17", 1220],
          ["18", 1013],
          ["19", 1295],
          ["20", 467],
          ["21", 0],
          ["22", 0],
          ["23", 0],
          ["00", 0],
        ],
      },
    ],
  });
  Highcharts.chart("chart-placeholder_08", {
    chart: {
      type: "column",
      backgroundColor: null,
    },
    title: {
      text: null,
    },
    exporting: {
      enabled: false, // 햄버거 바 제거
    },
    credits: {
      enabled: false, // 하단의 Highcharts.com 워터마크 제거
    },
    xAxis: {
      type: "category",
      labels: {
        autoRotation: [0, 0],
        style: {
          fontSize: "12px",
          fontFamily: "pretendard,",
        },
      },
    },
    yAxis: {
      min: 0,
      max: 4000,
      title: {
        text: null,
        fontFamily: "pretendard",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "걸음수 : <b>{point.y:.1f} 걸음</b>",
    },
    series: [
      {
        name: "걸음수",
        colors: ["#6C80A5"],
        colorByPoint: true,
        groupPadding: 0,
        data: [
          ["06", 0],
          ["07", 0],
          ["08", 1274],
          ["09", 930],
          ["10", 334],
          ["11", 462],
          ["12", 94],
          ["13", 360],
          ["14", 1295],
          ["15", 987],
          ["16", 493],
          ["17", 3132],
          ["18", 3472],
          ["19", 1334],
          ["20", 0],
          ["21", 33],
          ["22", 0],
          ["23", 0],
          ["00", 0],
        ],
      },
    ],
  });
  Highcharts.chart("chart-placeholder_09", {
    chart: {
      type: "column",
      backgroundColor: null,
    },
    title: {
      text: null,
    },
    exporting: {
      enabled: false, // 햄버거 바 제거
    },
    credits: {
      enabled: false, // 하단의 Highcharts.com 워터마크 제거
    },
    xAxis: {
      type: "category",
      labels: {
        autoRotation: [0, 0],
        style: {
          fontSize: "12px",
          fontFamily: "pretendard,",
        },
      },
    },
    yAxis: {
      min: 0,
      max: 4000,
      title: {
        text: null,
        fontFamily: "pretendard",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "걸음수 : <b>{point.y:.1f} 걸음</b>",
    },
    series: [
      {
        name: "걸음수",
        colors: ["#6C80A5"],
        colorByPoint: true,
        groupPadding: 0,
        data: [
          ["06", 0],
          ["07", 0],
          ["08", 0],
          ["09", 2551],
          ["10", 2086],
          ["11", 4261],
          ["12", 2713],
          ["13", 294],
          ["14", 1128],
          ["15", 1294],
          ["16", 1006],
          ["17", 0],
          ["18", 48],
          ["19", 105],
          ["20", 166],
          ["21", 23],
          ["22", 25],
          ["23", 32],
          ["00", 0],
        ],
      },
    ],
  });
  Highcharts.chart("chart-placeholder_10", {
    chart: {
      type: "column",
      backgroundColor: null,
    },
    title: {
      text: null,
    },
    exporting: {
      enabled: false, // 햄버거 바 제거
    },
    credits: {
      enabled: false, // 하단의 Highcharts.com 워터마크 제거
    },
    xAxis: {
      type: "category",
      labels: {
        autoRotation: [0, 0],
        style: {
          fontSize: "12px",
          fontFamily: "pretendard,",
        },
      },
    },
    yAxis: {
      min: 0,
      max: 4000,
      title: {
        text: null,
        fontFamily: "pretendard",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "걸음수 : <b>{point.y:.1f} 걸음</b>",
    },
    series: [
      {
        name: "걸음수",
        colors: ["#6C80A5"],
        colorByPoint: true,
        groupPadding: 0,
        data: [
          ["06", 0],
          ["07", 16],
          ["08", 70],
          ["09", 107],
          ["10", 868],
          ["11", 892],
          ["12", 1825],
          ["13", 1069],
          ["14", 2508],
          ["15", 734],
          ["16", 3510],
          ["17", 796],
          ["18", 681],
          ["19", 4],
          ["20", 12],
          ["21", 67],
          ["22", 0],
          ["23", 0],
          ["00", 0],
        ],
      },
    ],
  });
  Highcharts.chart("chart-placeholder_11", {
    chart: {
      type: "column",
      backgroundColor: null,
    },
    title: {
      text: null,
    },
    exporting: {
      enabled: false, // 햄버거 바 제거
    },
    credits: {
      enabled: false, // 하단의 Highcharts.com 워터마크 제거
    },
    xAxis: {
      type: "category",
      labels: {
        autoRotation: [0, 0],
        style: {
          fontSize: "12px",
          fontFamily: "pretendard,",
        },
      },
    },
    yAxis: {
      min: 0,
      max: 4000,
      title: {
        text: null,
        fontFamily: "pretendard",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "걸음수 : <b>{point.y:.1f} 걸음</b>",
    },
    series: [
      {
        name: "걸음수",
        colors: ["#6C80A5"],
        colorByPoint: true,
        groupPadding: 0,
        data: [
          ["06", 0],
          ["07", 0],
          ["08", 59],
          ["09", 627],
          ["10", 283],
          ["11", 1858],
          ["12", 550],
          ["13", 3774],
          ["14", 1366],
          ["15", 2054],
          ["16", 1554],
          ["17", 1462],
          ["18", 2460],
          ["19", 1840],
          ["20", 0],
          ["21", 0],
          ["22", 95],
          ["23", 0],
          ["00", 0],
        ],
      },
    ],
  });
  // Highcharts.chart("chart-placeholder_12", {
  //   chart: {
  //     type: "column",
  //   },
  //   title: {
  //     text: null,
  //   },
  //   exporting: {
  //     enabled: false, // 햄버거 바 제거
  //   },
  //   credits: {
  //     enabled: false, // 하단의 Highcharts.com 워터마크 제거
  //   },
  //   xAxis: {
  //     type: "category",
  //     labels: {
  //       autoRotation: [0, 0],
  //       style: {
  //         fontSize: "12px",
  //         fontFamily: "pretendard,",
  //       },
  //     },
  //   },
  //   yAxis: {
  //     min: 0,
  //     title: {
  //       text: null,
  //       fontFamily: "pretendard",
  //     },
  //   },
  //   legend: {
  //     enabled: false,
  //   },
  //   tooltip: {
  //     pointFormat: "걸음수 : <b>{point.y:.1f} 걸음</b>",
  //   },
  //   series: [
  //     {
  //       name: "걸음수",
  //       colors: ["#6C80A5"],
  //       colorByPoint: true,
  //       groupPadding: 0,
  //       data: [
  //         ["06", 0],
  //         ["07", 0],
  //         ["08", 0],
  //         ["09", 0],
  //         ["10", 0],
  //         ["11", 484],
  //         ["12", 791],
  //         ["13", 814],
  //         ["14", 2483],
  //         ["15", 283],
  //         ["16", 2622],
  //         ["17", 922],
  //         ["18", 815],
  //         ["19", 1425],
  //         ["20", 14],
  //         ["21", 29],
  //         ["22", 0],
  //         ["23", 20],
  //         ["00", 0],
  //       ],
  //     },
  //   ],
  // });
  Highcharts.chart("chart-placeholder_13", {
    chart: {
      type: "column",
      backgroundColor: null,
    },
    title: {
      text: null,
    },
    exporting: {
      enabled: false, // 햄버거 바 제거
    },
    credits: {
      enabled: false, // 하단의 Highcharts.com 워터마크 제거
    },
    xAxis: {
      type: "category",
      labels: {
        autoRotation: [0, 0],
        style: {
          fontSize: "12px",
          fontFamily: "pretendard,",
        },
      },
    },
    yAxis: {
      min: 0,
      max: 4000,
      title: {
        text: null,
        fontFamily: "pretendard",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "걸음수 : <b>{point.y:.1f} 걸음</b>",
    },
    series: [
      {
        name: "걸음수",
        colors: ["#6C80A5"],
        colorByPoint: true,
        groupPadding: 0,
        data: [
          ["06", 0],
          ["07", 0],
          ["08", 0],
          ["09", 551],
          ["10", 11],
          ["11", 345],
          ["12", 1101],
          ["13", 2692],
          ["14", 2786],
          ["15", 2847],
          ["16", 863],
          ["17", 2795],
          ["18", 3204],
          ["19", 726],
          ["20", 28],
          ["21", 0],
          ["22", 0],
          ["23", 22],
          ["00", 0],
        ],
      },
    ],
  });
  // Highcharts.chart("chart-placeholder_14", {
  //   chart: {
  //     type: "column",
  //     backgroundColor: null,
  //   },
  //   title: {
  //     text: null,
  //   },
  //   exporting: {
  //     enabled: false, // 햄버거 바 제거
  //   },
  //   credits: {
  //     enabled: false, // 하단의 Highcharts.com 워터마크 제거
  //   },
  //   xAxis: {
  //     type: "category",
  //     labels: {
  //       autoRotation: [0, 0],
  //       style: {
  //         fontSize: "12px",
  //         fontFamily: "pretendard,",
  //       },
  //     },
  //   },
  //   yAxis: {
  //     min: 0,
  //     title: {
  //       text: null,
  //       fontFamily: "pretendard",
  //     },
  //   },
  //   legend: {
  //     enabled: false,
  //   },
  //   tooltip: {
  //     pointFormat: "걸음수 : <b>{point.y:.1f} 걸음</b>",
  //   },
  //   series: [
  //     {
  //       name: "걸음수",
  //       colors: ["#6C80A5"],
  //       colorByPoint: true,
  //       groupPadding: 0,
  //       data: [
  //         ["06", 0],
  //         ["07", 0],
  //         ["08", 0],
  //         ["09", 0],
  //         ["10", 9],
  //         ["11", 1477],
  //         ["12", 2658],
  //         ["13", 3998],
  //         ["14", 841],
  //         ["15", 1517],
  //         ["16", 1717],
  //         ["17", 0],
  //         ["18", 1204],
  //         ["19", 807],
  //         ["20", 1190],
  //         ["21", 0],
  //         ["22", 0],
  //         ["23", 0],
  //         ["00", 0],
  //       ],
  //     },
  //   ],
  // });
});

document.addEventListener("DOMContentLoaded", function () {
  // 투명도 전환을 위한 Result 요소 설정
  const resultElements = document.querySelectorAll(".Result, .Head");

  resultElements.forEach((resultElement) => {
    const resultObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            resultElement.style.opacity = 1; // Fade to full opacity
            resultElement.style.transition = "opacity 3s ease-in-out"; // Transition effect
            resultObserver.unobserve(entry.target); // 한번 실행 후 관찰 중지
          }
        });
      },
      { threshold: 0.1 } // 요소가 10% 보일 때 실행
    );

    // 각 요소에 대해 관찰 시작
    resultObserver.observe(resultElement);
  });
  // 차트 애니메이션을 위한 함수 정의
  function animateChart(chartId, chartOptions) {
    chartOptions.plotOptions.series.animation = { duration: 2000 }; // 애니메이션 지속 시간 설정
    Highcharts.chart(chartId, chartOptions);
  }

  // 차트 옵션 설정
  const chartOptions1 = {
    chart: {
      type: "line",
      backgroundColor: null,
    },
    title: null,
    exporting: {
      enabled: false, // 햄버거 바 제거
    },
    credits: {
      enabled: false, // 하단의 Highcharts.com 워터마크 제거
    },
    subtitle: {
      text: null,
    },
    xAxis: {
      categories: [
        "Day1",
        "Day2",
        "Day3",
        "Day4",
        "Day5",
        "Day6",
        "Day7",
        "Day8",
        "Day9",
        "Day10",
        "Day11",
        "Day12",
        "Day13",
        "Day14",
      ],
      lineWidth: 0,
    },
    yAxis: {
      min: 0,
      title: null,
      gridLineWidth: 1, // 가로선 제거
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
          y: -8,
          lineWidth: null,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "black",
            fontFamily: "Libre Caslon Text",
          },
        },
        enableMouseTracking: false,
      },
      series: {
        animation: { duration: 3000 }, // 차트 애니메이션 지속 시간
      },
    },
    series: [
      {
        name: "KM",
        color: "#6C80A5",
        lineWidth: 3,
        data: [
          9.16, 12.19, 11.5, 7.63, 13.6, 13.47, 6.82, 10.06, 9.64, 8.22, 11.33,
          6.52, 10.95, 10.76,
        ],
      },
    ],
  };
  const chartOptions2 = {
    chart: {
      type: "column",
      backgroundColor: null,
    },
    title: null,
    exporting: {
      enabled: false, // 햄버거 바 제거
    },
    credits: {
      enabled: false, // 하단의 Highcharts.com 워터마크 제거
    },
    subtitle: {
      text: null,
    },
    xAxis: {
      categories: [
        "Day1",
        "Day2",
        "Day3",
        "Day4",
        "Day5",
        "Day6",
        "Day7",
        "Day8",
        "Day9",
        "Day10",
        "Day11",
        "Day12",
        "Day13",
        "Day14",
      ],
      lineWidth: 0,
    },
    yAxis: {
      min: 0,
      title: null,
      gridLineWidth: 1, // 가로선 제거
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
          lineWidth: null,
        },
        style: {
          color: "white", // 텍스트 색상을 흰색으로 설정
          fontSize: "12px", // 원하는 폰트 크기로 조정 가능
          fontWeight: "bold", // 원하는 텍스트 두께 설정
        },
        enableMouseTracking: false,
      },
      series: {
        animation: { duration: 3000 }, // 차트 애니메이션 지속 시간
      },
    },
    series: [
      {
        name: "걸음",
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, // 왼쪽에서 오른쪽으로 그라데이션
          stops: [
            [0, "#6C80A5"], // 시작 색상
            [1, "#3F5479"], // 끝 색상
          ],
        },
        lineWidth: 3,
        data: [
          15169, 18754, 19172, 12767, 20959, 20959, 10342, 14411, 16449, 13159,
          17985, 10702, 17971, 15889,
        ],
      },
    ],
  };

  // 차트 컨테이너에 대한 관찰 설정
  const chartContainer1 = document.getElementById("result-placeholder");

  const chartObserver1 = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateChart("result-placeholder", chartOptions1); // 첫 번째 차트 렌더링
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  chartObserver1.observe(chartContainer1);

  // 두 번째 차트 컨테이너에 대한 관찰 설정
  const chartContainer2 = document.getElementById("result-placeholder-2");

  const chartObserver2 = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateChart("result-placeholder-2", chartOptions2); // 두 번째 차트 렌더링
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  chartObserver2.observe(chartContainer2);
});

document.addEventListener("DOMContentLoaded", function () {
  const allSection = document.querySelector(".all-section");
  const targetElement = document.getElementById("day1"); // 이동할 대상 요소

  allSection.addEventListener("mousemove", function (event) {
    // 마우스 위치가 상단 100px 내에 있는지 확인
    if (event.clientY <= allSection.getBoundingClientRect().top + 100) {
      allSection.classList.add("all-section-hovered");
    } else {
      allSection.classList.remove("all-section-hovered");
    }
  });

  // 마우스가 전체 영역에서 벗어나면 효과 제거
  allSection.addEventListener("mouseleave", function () {
    allSection.classList.remove("all-section-hovered");
  });

  // 상단 100px 영역에서 클릭 시 이동
  allSection.addEventListener("click", function (event) {
    if (event.clientY <= allSection.getBoundingClientRect().top + 100) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // 부드럽게 이동
    }
  });
});
