import React from 'react';
import home from './assets/house1.jpg';
import './App.css';

function App(props) {

  // const [mydays,setDays] = useState();

  var broke_ground_date = new Date("12/17/2017");
  var today = new Date()

  var difference = today.getTime() - broke_ground_date.getTime();

  var days = Math.floor(difference / (1000 * 3600 * 24));

//   useEffect(() => {
//     setDays(days)
//     console.log(mydays);
    
// });


  return (
    <div className="Home">
     <img src={home} className='image_style' alt="oops" height="700" width="100%"/>
     <div className="sign_text" width="auto">
      {/* <p>18 Ridge View Rd <br></br> {days} days <br></br>by Cornerstone Homes </p> */}
      <p id='street_address'>18 Ridge View Rd</p>
      <p id='time_text'>{days} days</p>
      <p id='corner_homes'>by Cornerstone Homes</p>
      
     </div>
    </div>
  );
}

export default App;
