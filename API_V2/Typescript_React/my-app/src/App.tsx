import React, { constructor, useState } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Device from "./Device";
import loading from "./loading.gif";

function App() {
  let a: string[] = [];
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
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

export default App;
