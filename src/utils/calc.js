// finding alchoal classess
export const classesFetch = (data) => {
    let list = [];
    for (let i of data) {
      if (!list.includes(i["Alcohol"])) {
        list.push(i["Alcohol"]);
      }
    }
    return list;
  };
  
  // finding index
  export const findIndex = (result, obj) => {
    return result.findIndex((item) => item["Alcohol"] === obj["Alcohol"]);
  };
  
  // finding mean
  export const findMean = (data, key) => {
    let result = [];
    for (let obj of data) {
      let index = findIndex(result, obj);
      if (index >= 0) {
        result[index][key] += 1 * obj[key];
        result[index].count += 1;
      } else {
        let tempData = {};
        tempData["Alcohol"] = obj["Alcohol"];
        tempData[key] = obj[key];
        tempData["count"] = 1;
        result.push(tempData);
      }
    }
  
    result = result.map((item) => ({
      ...item,
      mean: Math.round((item[key] / item?.count) * 1000) / 1000,
    }));
    return result;
  };
  
  // finding nested class and classes counts
  export const recusrsive = (classes, data, res) => {
    if (classes === 0) return res;
    if (classes === 1) return (res += data[classes - 1].count);
    return recusrsive(classes - 1, data, (res += data[classes-1].count));
  };
  
  // finding median
  export const medianFind = (data, allData, key) => {
    let medianList = data.map((item) => {
      let nthIndex = recusrsive(item.Alcohol - 1, data, 0);
      if (item.count % 2) {
        // odd
        nthIndex += parseInt((item.count + 1) / 2);
        return { ...item, median: allData[nthIndex-1][key] };
      } else {
        //even
        nthIndex += parseInt([(item.count / 2) + ((item.count / 2) + 1)] / 2);
        return { ...item, median: allData[nthIndex-1][key] };
      }
    });
    return medianList;
  };
  
  // finding mode
  export const modeFind = (mean, median) => {
    // As we know truth, 2 * Mean + Mode = 3 * Median => Mode = 3 * Median - 2 * Mean

    let modeList = median.map((item, index) => {
      return {
        ...mean[index],
        mode:
          Math.round((3 * item?.median - 2 * mean[index]?.mean) * 1000) / 1000,
      };
    });
    return modeList;
  };
  
  // finding gama value
  export const gamaFind = (data) => {
    let gamaList = data?.map((item, index) => {
      let gama = (item?.Ash * item?.Hue) / item?.Magnesium;
      return { ...item, gama: Math.round(gama * 1000) / 1000 };
    });
    return gamaList;
  };
  