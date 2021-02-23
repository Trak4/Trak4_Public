import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Device from "./Device";
import loading from "./loading.gif";

function App() {
  let deviceList: string[] = [];
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
<<<<<<< Updated upstream
  const fetchData = () => {
    setLoading(true);
    axios
      .post<any>("https://gps.trak-4.com/api/v2/", {
        commandstring: "get_devices",
        token: "d1b95a4c22f546faa851a8961e0d20f9",
      })
      .then((resp) => {
        resp.data.data.forEach((element: any) => {
          a.push(element.deviceId);
        });
        setData(a);
        setLoading(false);
=======

  const fetchData = () => {
    setLoading(true);
    getAllTrak4Devices()
      .then((retVal: any) => {
        let assetArray = retVal.data;
        assetArray.forEach((element: any) => {
          deviceList.push(element.deviceId);
        });
        setData(deviceList);
        setLoading(false);
      })
      .catch((err: any) => {
        console.log(err);
>>>>>>> Stashed changes
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-2">
          <button className="btn btn-primary " onClick={fetchData}>
            Load Devices
          </button>
        </div>
        <div className="col-sm-10">
          {isLoading ? (
            <img
              src={loading}
              style={{ marginLeft: "15%" }}
              width="100"
              height="100"
            />
          ) : (
            <Device name={data} />
          )}
        </div>
      </div>
    </div>
  );
}

<<<<<<< Updated upstream
=======
const getAllTrak4Devices = (): any => {
  let myHeaders = new Headers();

  let data = {
    commandstring: "get_devices",
    token: "d1b95a4c22f546faa851a8961e0d20f9",
  };

  myHeaders.append("Content-Type", "text/plain");
  myHeaders.append("Accept", "*/*");
  myHeaders.append("Connection", "keep-alive");

  const myInit = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
  };

  return new Promise((resolve) => {
    fetch("https://gps.trak-4.com/api/v2/", myInit)
      .then((res) => {
        switch (res.status) {
          default:
            res.json().then((data: any) => {
              resolve(data);
            });
        }
      })
      .catch((err) => alert(err));
  });
};

>>>>>>> Stashed changes
export default App;
