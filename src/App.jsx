import { useState, useEffect } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      const responseJSON = await response.json();
      // console.log(responseJSON);
      setItems(responseJSON);
    };

    fetchResourceTypes();
  }, [resourceType]);

  useEffect(() => {
    //componentDidMount
    console.log("componentDidMount");

    return () => {
      //componentWillUnmount
      console.log("componentWillUnmount");
    };
  }, []);

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType);
  };
  return (
    <div>
      <h1>{resourceType}</h1>
      <div style={{ display: "flex", alignContent: "center" }}>
        <button onClick={() => changeResourceType("posts")}>Posts</button>
        <button onClick={() => changeResourceType("comments")}>Coments</button>
        <button onClick={() => changeResourceType("todos")}>Todos</button>
      </div>
      {items.map((item, index) => (
        <p key={index}>{item.id}</p>
      ))}
    </div>
  );
}

export default App;
