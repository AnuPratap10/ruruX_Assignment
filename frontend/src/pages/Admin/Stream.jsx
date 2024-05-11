import React, {useState, useEffect} from "react";

import axios from "axios";

export const Stream = () => {
  const [streams, setStream] = useState();
  const [newStreamData, setNewStreamData] = useState("");
  const [editStreamId, setEditStreamId] = useState("");

  const fetchStreamData = async () => {
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
    fetchStreamData();
  }, []);

  const editStream = async () => {
    try {
      await axios.put(
        `https://rurux-assignment.onrender.com/api/streams/${editStreamId.id}`,
        {name: editStreamId.name}
      );
      fetchStreamData();
      setEditStreamId({id: "", name: ""});
    } catch (err) {
      console.log("Error in editing stream", err);
    }
  };

  const handleEditClick = (stream) => {
    setEditStreamId({id: stream._id, name: stream.name});
  };

  const handleEditInputChange = (e) => {
    setEditStreamId({...editStreamId, name: e.target.value});
  };

  const addStream = async () => {
    try {
      await axios.post("https://rurux-assignment.onrender.com/api/streams", {
        name: newStreamData,
      });
      fetchStreamData();
      setNewStreamData("");
    } catch (err) {
      console.log("Error in adding stream", err);
    }
  };

  const deleteStream = async (id) => {
    try {
      await axios.delete(
        `https://rurux-assignment.onrender.com/api/streams/${id}`
      );
      fetchStreamData();
    } catch (err) {
      console.log("Error in deleting stream", err);
    }
  };

  return (
    <>
      <>
        <div>
          <h2>Streams</h2>
          <div>
            <input
              type="text"
              value={newStreamData}
              onChange={(e) => setNewStreamData(e.target.value)}
              placeholder="Enter stream name"
            />
            <button onClick={addStream}>Add Stream</button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {streams?.map((stream) => (
                <tr key={stream._id}>
                  <td>
                    {editStreamId.id === stream._id ? (
                      <input
                        type="text"
                        value={editStreamId.name}
                        onChange={handleEditInputChange}
                      />
                    ) : (
                      stream.name
                    )}
                  </td>
                  <td>
                    {editStreamId.id === stream._id ? (
                      <button onClick={editStream}>Save</button>
                    ) : (
                      <>
                        <button onClick={() => handleEditClick(stream)}>
                          Edit
                        </button>
                        <button onClick={() => deleteStream(stream._id)}>
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    </>
  );
};
