import React from "react";
import { useEffect, useState } from "react";
import SimpleMap from "./SimpleMap";
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
 
  const API =
    "https://api.metrocloudalliance.com/v2/realtime/vehiclelocations?api_key=demo&realtime_source_id=2";
  useEffect(() => {
    // Fetch data from your API
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "-------------Data");
        if (data && data.results) {
          setData(data.results);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const handelButtonClick = (item) => {
    navigate("/map",{state:item})
  };

  return (
    <div>
      <h2>Data Table</h2>
        <table>
          <thead>
            <tr>
              <th>Vehicle Number</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0
              ? data.map((item) => (
                  <tr key={item.vehicle_id}>
                    <td>
                      <button onClick={() => handelButtonClick(item)}>
                        {item.vehicle_id}
                      </button>
                    </td>
                  </tr>
                ))
              : "No data"}
          </tbody>
        </table>
       
    </div>
  );
}
