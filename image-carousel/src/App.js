import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [imageList, setImageList] = useState([]);
  const [imgIndex, SetImgIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const url = 'https://www.reddit.com/r/aww/top/.json?t=all';
    const response = await fetch(url);
    const data = await response.json();
    const result = data.data.children;
    const list = result.filter(
      (item) => item.data.url_overridden_by_dest.includes('.jpg')
    ).map((item) => item.data.url_overridden_by_dest);
    setImageList(list);
    setLoading(false);
  }

  // const handleRight = () => {
  //   SetImgIndex((prevIndex) => {
  //     if (prevIndex === imageList.length - 1) {
  //       return 0;
  //     } else {
  //       return prevIndex + 1;
  //     }
  //   });
  // };

  // const handleLeft = () => {
  //   SetImgIndex((prevIndex) => {
  //     if (prevIndex === 0) {
  //       return imageList.length - 1;
  //     } else {
  //       return prevIndex - 1;
  //     }
  //   });
  // };

  const handleClick = (direction) => {
    const lastIndex = imageList.length - 1;

    if (direction === 'left') {
      imgIndex === 0 ? SetImgIndex(lastIndex) : SetImgIndex(imgIndex - 1);
    } else if (direction === 'right') {
      imgIndex === lastIndex ? SetImgIndex(0) : SetImgIndex(id => id + 1);
    } else {
      console.log('Unexpected direction:', direction);
    }
  }

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      handleClick('right');
    }, 1000);
    return () => clearInterval(intervalId);
  }, [imgIndex]);






  return (
    <div className="App">
      <h1>Image Carousel</h1>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <button className="left" onClick={() => { handleClick('left') }}>{'<'}</button>
          {/* <button onClick={handleLeft}>{'<'}</button> */}
          <img src={imageList[imgIndex]} alt='item is not found' />
          {/* <button onClick={handleRight}>{'>'}</button> */}
          <button className='right' onClick={() => { handleClick('right') }}>{'>'}</button>
        </div>
      )}

    </div>
  );
}

export default App;
