import { useEffect, useState } from "react";
import axios from "axios";
/*
- useEffect(): Hook trong React
    + Side Effect: Khi 1 chương trình phần mềm có tác động dẫn đến dữ liệu bị thay đổi.
    + Cú pháp: useEffect(callback, [dependency])

        1. useEffect(callback)
          //  - component re-render thì callback bên trong useEffect() sẽ được gọi lại
        2. useEffect(callback, [])
        3. useEffect(callback, [dependency]) 
    + useEffect với callAPI
*/
const Mounted = () => {
  const [status, setStatus] = useState(false);
  const [title, setTitle] = useState();
  const [data, setData] = useState()

  useEffect(() => {
    document.title = title;
    console.log("re-render");
  }, []);
  const handleClick = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts",
    }).then(function (reponse) {
      setData(reponse.data);
    });
  },[]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
            <button onClick={() => setStatus(!status)}>Toogle Event</button>
            {status === true && <Child />}
            <input onChange={handleClick} />

            {data && data.map((item, index) => {
              return (
                <div key={index}>
                  <h1>{item.title}</h1>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mounted;

export const Child = () => {
  return <h1>Frontend 24</h1>;
};
