// React import
import { useState, useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

function Event() {
  const { id } = useParams();
  const url =
    `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/${id}`;
  const [event, setEvent] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setEvent(response.data);
    });
  }, [url]);

  //   console.log(event.record.fields);

  if (event) {
    return (
      <div>
        
      </div>
    );
  }

  return <div></div>;
}

export default Event;
