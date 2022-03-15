// 日期处理
const MonthMap = new Map([
  [1, "Jan"],
  [2, "Feb"],
  [3, "Mar"],
  [4, "April"],
  [5, "May"],
  [6, "June"],
  [7, "July"],
  [8, "Aug"],
  [9, "Sept"],
  [10, "Oct"],
  [11, "Nov"],
  [12, "Dec"],
]);
export const handelDateRate = function (date) {
  if (!date) {
    return "";
  }
  let dateRage;
  const [startDate, endDate] = date.split("/");
  const startArr = startDate.split("-");
  const endArr = endDate.split("-");
  dateRage = `${MonthMap.get(Number(startArr[1]))} ${
    startArr[0]
  } - ${MonthMap.get(Number(endArr[1]))} ${endArr[0]}`;
  return dateRage;
};

// 深拷贝
export function deepClone(obj = {}, map = new Map()) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  if (map.get(obj)) {
    return map.get(obj);
  }
  let resault = {};
  if (
    obj instanceof Array ||
    Object.prototype.toString.call(obj) === "[object Array]"
  ) {
    resault = [];
  }
  map.set(obj, resault);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      resault[key] = deepClone(obj[key], map);
    }
  }
  return resault;
}

// 处理echat数据
export const handelProdTrendData = function (data) {
  if (data.length === 0) {
    return [];
  }
  let copyData = deepClone(data);
  for (let i = 0; i < copyData.length; i++) {
    let msv = [];
    for (let j = 0; j < copyData[i].search_msv.length; j++) {
      msv.push(copyData[i].search_msv[j].sv);
    }
    copyData[i].dateRage =
      data[i].search_msv[0].date +
      "/" +
      copyData[i].search_msv[copyData[i].search_msv.length - 1].date;
    copyData[i].dataChat = {
      series: [
        {
          name: "sv",
          data: msv,
        },
      ],
      options: {
        chart: {
          height: 100,
          type: "area",
          sparkline: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 1,
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          y: {
            title: "Ticket ",
          },
          marker: {
            show: false,
          },
        },
      },
    };
  }
  return copyData;
};
