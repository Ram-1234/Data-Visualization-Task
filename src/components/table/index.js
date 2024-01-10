import jsonData from "../../wine-data.json";
import {
  classesFetch,
  findMean,
  medianFind,
  modeFind,
  gamaFind,
} from "../calc/calc";
import CustomTable from "./custom-table";

const Home = () => {
  const allclass = classesFetch(jsonData);
  const meanList = findMean(jsonData, "Flavanoids");
  const medianList = medianFind(meanList, jsonData, "Flavanoids");
  const modeList = modeFind(meanList, medianList);
  const gamaList = gamaFind(jsonData);
  const gamaMeanList = findMean(gamaList, "gama");
  const gamaMedianList = medianFind(gamaMeanList, gamaList, "gama");
  const gamaModeList = modeFind(gamaMeanList, gamaMedianList);

  return (
    <div className="container" style={styles.container}>
      <CustomTable
        title="Flavanoids"
        allclass={allclass}
        meanList={meanList}
        medianList={medianList}
        modeList={modeList}
      />

      <CustomTable
        title="Gamma"
        allclass={allclass}
        meanList={gamaMeanList}
        medianList={gamaMedianList}
        modeList={gamaModeList}
      />
    </div>
  );
};

export default Home;

const styles = {
  container: {
    width: "fit-content",
    margin: "auto",
    marginTop: "50px",
  },
};
