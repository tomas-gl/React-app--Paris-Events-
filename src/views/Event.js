// React import
import { useState, useEffect } from "react";

import axios from "axios";

function Event() {
  const url =
    "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/08de0bed488e150320eeef8e86b3e5502e33cd2b";
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
        <h1>{event.record.fields.title}</h1>
        <h1>un event</h1>
      </div>
    );
  }

  return <div></div>;
}

export default Event;
