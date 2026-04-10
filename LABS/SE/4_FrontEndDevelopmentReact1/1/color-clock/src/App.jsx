import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'

function App() {
  // Declare state variable to capture current time 
  const [time, setTime] = useState(new Date());

  // Create a timer to update the seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Declare variables for 12 hour time and date display
  const day = format(time, "eeee");
  const fullDate = format(time, "MMMM do, yyyy");
  const timeString = format(time, 'hh:mm:ss');
  const amPm = format(time, "aa");

  return (
    <>
      <div className="counter">
        <p> It is now {day}, {fullDate} at {timeString} {amPm}</p>
      </div>
    </>
  )
}

export default App
