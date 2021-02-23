import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

interface DeviceProps {
  name?: string[];
}

interface TableData {
  Date: string;
  Latitude: number;
  Longitude: number;
  Voltage: number;
}

export default function Device(props: DeviceProps) {
  const [tableData, setTableData] = useState<TableData[]>([]);
  let deviceId = "";

  const get2020RecordsFromAPI = (): any => {
    let myHeaders = new Headers();

    let data = {
      commandstring: "get_reports_single_device",
      token: "d1b95a4c22f546faa851a8961e0d20f9",
      identifier: deviceId,
      datetime_start: "01/01/2020 00:00:00",
      datetime_end: "12/31/2020 00:00:00",
      coredataonly: true,
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

  const handleChange = (event: any) => {
    deviceId = event.target.value;
  };

  const get2020sReports = () => {
    if (deviceId != "") {
      get2020RecordsFromAPI()
        .then((retVal: any) => {
          let tempData: TableData[] = [];
          retVal.data.forEach((element: any) => {
            tempData.push({
              Date: element.receivedDate,
              Latitude: element.latitude,
              Longitude: element.longitude,
              Voltage: element.voltage1,
            });
          });
          setTableData(tempData);
        })
        .catch((err: any) => {
          console.log(err);
        });
    } else {
      alert("Please Select Device....!");
      setTableData([]);
    }
  };

  if (props.name?.length == 0) {
    return <div></div>;
  } else {
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <select
              className="form-control"
              onChange={handleChange}
              defaultValue={"default"}
            >
              <option value="default" disabled>
                --Select Device--
              </option>
              {props.name?.map((item, i) => {
                return (
                  <option key={i} value={item}>
                    Device#{item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-primary" onClick={get2020sReports}>
              Load 2020 GPS Reports for
            </button>
          </div>
        </div>
        <hr></hr>

        {tableData.length != 0 ? (
          <div className="row">
            <table className="table  table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>Date</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                  <th>Voltage</th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item.Date}</td>
                      <td>{item.Latitude}</td>
                      <td>{item.Longitude}</td>
                      <td>{item.Voltage / 1000}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
