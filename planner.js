const stationFrom = document.querySelector(".from");
const stationTo = document.querySelector(".to");
const allDay = document.querySelector("#allDay");
const sortByTime = document.querySelector("#sortByTime");
const results = document.querySelector(".results");

const stations = [
  "Artex", // 0
  "Bedřiška", // 1
  "Bytovky-Bedřichov", // 2
  "Centrum-Lomnice", // 3
  "Harmony-Bobová dráha", // 4
  "Horal", // 5
  "Jánošík", // 6
  "Labská-Nico", // 7
  "Martin", // 8
  "Montana", // 9
  "Olympie", // 10
  "Parkoviště 1- přehrada", // 11
  "Parkoviště P2-Hromovka , Sv.Petr", // 12
  "Parkoviště P3-Medvědín", // 13
  "Pod hotelem Zátiší", // 14
  "Skiareál Svatý Petr", // 15
  "Stoh", // 16
  "Svatý Petr-otáčka", // 17
  "Zotavovna Grand", // 18
  "Zvon", // 19
];

const routes = [
  [
    { s: 12, t: [ 750,  855, 1000, 1105, 1210, 1315, 1445, 1550, 1655] },
    { s: 9,  t: [ 752,  857, 1002, 1107, 1212, 1317, 1447, 1552, 1657] },
    { s: 4,  t: [ 754,  859, 1004, 1109, 1214, 1319, 1449, 1554, 1659] },
    { s: 1,  t: [ 756,  901, 1006, 1111, 1216, 1321, 1451, 1556, 1701] },
    { s: 2,  t: [ 800,  905, 1011, 1115, 1220, 1325, 1455, 1600, 1705] },
    { s: 0,  t: [ 802,  907, 1013, 1117, 1222, 1327, 1457, 1602, 1707] },
    { s: 6,  t: [ 804,  909, 1015, 1119, 1224, 1329, 1459, 1604, 1709] },
    { s: 12, t: [ 806,  911, 1016, 1121, 1226, 1331, 1501, 1606, 1711] },
    { s: 3,  t: [ 809,  914, 1019,    0, 1229, 1334, 1504, 1609, 1714] },
    { s: 15, t: [ 813,  918, 1023,    0, 1233, 1338, 1507, 1613, 1718] },
    { s: 3,  t: [ 815,  920, 1025,    0, 1235, 1340, 1509, 1615, 1720] },
    { s: 18, t: [ 817,  922, 1027,    0, 1237, 1342, 1511, 1617, 1722] },
    { s: 13, t: [ 819,  924, 1029,    0, 1239, 1344, 1513, 1619, 1724] },
    { s: 13, t: [ 821,  926, 1031,    0, 1241, 1346, 1516, 1621, 1726] },
    { s: 18, t: [ 823,  928, 1033,    0, 1243, 1348, 1518, 1623, 1728] },
    { s: 3,  t: [ 825,  930, 1035,    0, 1245, 1350, 1520, 1625, 1730] },
    { s: 15, t: [ 829,  934, 1039,    0, 1249, 1354, 1524, 1629, 1734] },
    { s: 3,  t: [ 831,  936, 1041,    0, 1251, 1356, 1526, 1631, 1736] },
    { s: 12, t: [ 834,  939, 1044,    0, 1254, 1359, 1529, 1634, 1739] },
    { s: 6,  t: [ 836,  941, 1046,    0, 1256, 1401, 1531, 1636, 1741] },
    { s: 0,  t: [ 838,  943, 1048,    0, 1258, 1403, 1533, 1638, 1743] },
    { s: 2,  t: [ 840,  945, 1050,    0, 1300, 1405, 1535, 1640, 1745] },
    { s: 1,  t: [ 844,  949, 1054,    0, 1304, 1409, 1539, 1644, 1749] },
    { s: 4,  t: [ 846,  951, 1056,    0, 1306, 1411, 1541, 1646, 1751] },
    { s: 9,  t: [ 848,  953, 1058,    0, 1308, 1413, 1543, 1648, 1753] },
    { s: 12, t: [ 850,  955, 1100,    0, 1310, 1415, 1545, 1650, 1755] },
  ],
  [
    { s: 13, t: [   0,  850,  955, 1100, 1250, 1435, 1550,    0] },
    { s: 18, t: [   0,  852,  957, 1102, 1252, 1437, 1552,    0] },
    { s: 3,  t: [ 740,  854,  959, 1104, 1254, 1439, 1554,    0] },
    { s: 15, t: [ 743,  857, 1002, 1107, 1257, 1442, 1557, 1645] },
    { s: 19, t: [ 746,  900, 1005, 1110, 1300, 1445, 1600, 1648] },
    { s: 10, t: [ 748,  902, 1007, 1112, 1302, 1447, 1602, 1649] },
    { s: 17, t: [ 750,  904, 1009, 1114, 1304, 1449, 1604, 1651] },
    { s: 16, t: [ 752,  906, 1011, 1116, 1306, 1451, 1606, 1653] },
    { s: 8,  t: [ 754,  908, 1013, 1118, 1308, 1453, 1608, 1655] },
    { s: 14, t: [ 755,  909, 1014, 1119, 1309, 1454, 1609, 1656] },
    { s: 15, t: [ 758,  912, 1017, 1122, 1312, 1457, 1612, 1659] },
    { s: 3,  t: [ 801,  915, 1020, 1125, 1315, 1500, 1615, 1702] },
    { s: 18, t: [ 803,  917, 1022, 1127, 1317, 1502, 1617,    0] },
    { s: 13, t: [ 805,  919, 1024, 1130, 1319, 1504, 1619,    0] },
  ],
  [
    { s: 13, t: [ 810,  925, 1030, 1220, 1400, 1515, 1625] },
    { s: 18, t: [ 812,  927, 1032, 1222, 1402, 1517, 1627] },
    { s: 3,  t: [ 814,  929, 1034, 1224, 1404, 1519, 1629] },
    { s: 15, t: [ 817,  932, 1037, 1227, 1407, 1522, 1632] },
    { s: 19, t: [ 820,  935, 1040, 1230, 1410, 1525, 1635] },
    { s: 5,  t: [ 822,  937, 1042, 1232, 1412, 1527, 1637] },
    { s: 5,  t: [ 825,  940, 1045, 1235, 1415, 1530, 1640] },
    { s: 19, t: [ 827,  942, 1047, 1237, 1417, 1532, 1642] },
    { s: 15, t: [ 829,  944, 1050, 1240, 1420, 1535, 1645] },
    { s: 3,  t: [ 832,  947, 1053, 1243, 1423, 1538,    0] },
    { s: 18, t: [ 834,  949, 1055, 1245, 1425, 1540,    0] },
    { s: 13, t: [ 836,  951, 1057, 1247, 1427, 1542,    0] },
  ],
  [
    { s: 7,  t: [ 800,  845,  935, 1030, 1115, 1255, 1345, 1435, 1525, 1615] },
    { s: 11, t: [ 803,  848,  938, 1033, 1118, 1258, 1348, 1438, 1528, 1618] },
    { s: 6,  t: [ 804,  849,  939, 1034, 1119, 1259, 1349, 1439, 1529, 1619] },
    { s: 12, t: [ 806,  851,  941, 1036, 1121, 1301, 1351, 1441, 1531, 1621] },
    { s: 18, t: [ 809,  854,  944, 1039, 1124, 1304, 1354, 1444, 1534, 1624] },
    { s: 13, t: [ 813,  858,  948, 1043, 1128, 1308, 1358, 1448, 1538, 1628] },
    { s: 18, t: [ 815,  900,  950, 1045, 1130, 1310, 1400, 1450, 1540, 1630] },
    { s: 3,  t: [ 817,  902,  952, 1047, 1132, 1312, 1402, 1452, 1542, 1632] },
    { s: 15, t: [ 820,  905,  955, 1050, 1135, 1315, 1405, 1455, 1545, 1635] },
    { s: 15, t: [ 821,  906,  956, 1051, 1136, 1316, 1406, 1456, 1546, 1636] },
    { s: 3,  t: [ 823,  908,  958, 1053, 1138, 1318, 1408, 1458, 1548, 1638] },
    { s: 18, t: [ 825,  910, 1000, 1055, 1140, 1320, 1410, 1500, 1550, 1640] },
    { s: 13, t: [ 829,  914, 1004, 1059, 1144, 1324, 1414, 1504, 1554, 1644] },
    { s: 18, t: [ 831,  916, 1006, 1101, 1146, 1336, 1416, 1506, 1556, 1646] },
    { s: 12, t: [ 834,  919, 1009, 1104, 1149, 1339, 1419, 1509, 1559, 1649] },
    { s: 6,  t: [ 836,  921, 1011, 1106, 1151, 1341, 1421, 1511, 1601, 1621] },
    { s: 11, t: [ 837,  922, 1012, 1107, 1152, 1342, 1422, 1512, 1602, 1622] },
    { s: 7,  t: [ 840,  925, 1015, 1110, 1155, 1335, 1425, 1515, 1605, 1655] },
  ]
];

function initSelect() {
  for (let station of stations) {
    stationFrom.add(new Option(station));
    stationTo.add(new Option(station));
  }
}

function findPath(id, route, start, end) {
  let paths = [];
  
  if (start == end) {
    return paths;
  }
  
  for (let i = 0; i < route.length; i++) {
    if (route[i].s == start) {
      for (let j = i+1; j < route.length; j++) {
        if (route[j].s == end) {
          paths.push({ route: id, start: i, end: j });
          break;
        }
      }
    }
  }
  
  return paths;
}

function makeTimes(paths) {
  let date = new Date();
  let currentTime = date.getHours()*100 + date.getMinutes();
  
  let times = [];
  
  for (let path of paths) {
    let start = routes[path.route][path.start];
    let end = routes[path.route][path.end];
    
    for (let i = 0; i < start.t.length; i++) {
      if (!allDay.checked && start.t[i] < currentTime) {
        continue;
      }
      
      if (start.t[i] == 0 || end.t[i] == 0) {
        continue;
      }
      
      times.push({ route: path.route, extraStops: path.end - path.start - 1, timeStart: start.t[i], timeEnd: end.t[i] });
    }
  }
  
  if (sortByTime.checked) {
    times.sort((a, b) => a.timeStart - b.timeStart);
  } else {
    times.sort((a, b) => (a.timeStart + a.extraStops*10000) - (b.timeStart + b.extraStops*10000));
  }
  
  return times;
}

function toRealTime(time) {
  return `${Math.floor(time/100)}:${(time%100).toString().padStart(2, "0")}`;
}

function updateResults() {
  results.replaceChildren();
  
  let paths = [];
  
  for (let i = 0; i < routes.length; i++) {
    let path = findPath(i, routes[i], stationFrom.selectedIndex, stationTo.selectedIndex)
    
    if (path) {
      paths.push(...path);
    }
  }
  
  let times = makeTimes(paths);
  
  for (let arrival of times) {
    let tr = document.createElement("tr");
    
    let route = document.createElement("td");
    route.innerText = arrival.route + 1;
    route.classList.add("round");
    route.classList.add(`route-${arrival.route}`);
    tr.appendChild(route);
    
    let timeStart = document.createElement("td");
    timeStart.innerText = toRealTime(arrival.timeStart);
    tr.appendChild(timeStart);
    
    if (arrival.extraStops > 0) {
      let arrow1 = document.createElement("td");
      let arrowImg1 = new Image();
      arrowImg1.src = "right.svg";
      arrow1.appendChild(arrowImg1);
      tr.appendChild(arrow1);
      
      let extraStops = document.createElement("td");
      extraStops.innerText = arrival.extraStops;
      extraStops.classList.add("round");
      tr.appendChild(extraStops);
      
      let arrow2 = document.createElement("td");
      let arrowImg2 = new Image();
      arrowImg2.src = "right.svg";
      arrow2.appendChild(arrowImg2);
      tr.appendChild(arrow2);
    } else {
      let gap1 = document.createElement("td");
      tr.appendChild(gap1);
      
      let arrow = document.createElement("td");
      let arrowImg = new Image();
      arrowImg.src = "right.svg";
      arrow.appendChild(arrowImg);
      tr.appendChild(arrow);
      
      let gap2 = document.createElement("td");
      tr.appendChild(gap2);
    }
    
    let timeEnd = document.createElement("td");
    timeEnd.innerText = toRealTime(arrival.timeEnd);
    tr.appendChild(timeEnd);
    
    results.appendChild(tr);
  }
}

initSelect();

stationFrom.addEventListener("change", updateResults);
stationTo.addEventListener("change", updateResults);
allDay.addEventListener("change", updateResults);
sortByTime.addEventListener("change", updateResults);
