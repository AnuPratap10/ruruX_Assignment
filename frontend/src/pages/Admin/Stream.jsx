import React, {useState, useEffect} from "react";

import axios from "axios";

export const Stream = () => {
  const [stream, setStream] = useState();
  const [newStreamData, setNewStreamData] = useState("");

  const fetchSteamData = async () => {
    try {
      const res = await axios.get(
        "https://rurux-assignment.onrender.com/api/streams"
      );
      setStream(res.data);
    } catch (err) {
      console.log("Error in Fatching streams", err);
    }
  };
  useEffect(() => {
    fetchSteamData();
  }, []);

  console.log(stream)
  return (<>
  <div></div>
  </>);
};
