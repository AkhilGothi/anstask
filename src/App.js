import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [dataList, setDataList] = useState([]);
  const [selectedData, setSelectedData] = useState({})
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(
      data => setDataList(data)
    )
  }, [])
  return (
    <div>
      <div className='firstDiv'></div>
      <div className='flexItem'>
        <div className='width40 leftDiv'>
          {dataList.map((user, i) => (
            <div key={i} className="singleBox" onClick={() => setSelectedData(user)}>
              <div>{user.name}</div>
              <div>{user.email}</div>
            </div>
          ))}
        </div>
        <div className='width60 padding20'>
          <div>
            <div>Name: &nbsp;&nbsp;&nbsp;{selectedData.name}</div>
            <div>Email: &nbsp;&nbsp;&nbsp;{selectedData.email}</div>
            <div>City: &nbsp;&nbsp;&nbsp;{selectedData?.address?.city}</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
