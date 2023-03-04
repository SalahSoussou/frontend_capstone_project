import React from "react";
import "./BookingForm.sass";
function BookingForm() {
  const [availableTimes, setAvailableTimes] = React.useState([]);

  const selectTime = availableTimes.map((e) => {
    return <option key={e}>{e}</option>;
  });

  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  // const submitAPI = function (formData) {
  //   return true;
  // };
  React.useEffect(() => {
    const fetchAPI = function (date) {
      let result = [];
      let random = seededRandom(date.getDate());

      for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
          result.push(i + ":00");
        }
        if (random() > 0.5) {
          result.push(i + ":30");
        }
      }
      return result;
    };
    setAvailableTimes(fetchAPI(new Date()));
  }, []);

  const submitHandel = (e) => {
    e.preventDefault();
    console.log(document.getElementById("resTime").value);
  };

  return (
    <form className="booking-form" onSubmit={submitHandel}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" />
      <label htmlFor="resTime">Choose time</label>
      <select id="resTime">{selectTime}</select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make a reservation" />
    </form>
  );
}

export default BookingForm;
