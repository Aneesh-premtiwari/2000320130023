import React from "react";

const Train = ({ trains }) => {
  return trains.map((val, ind) => {
    return (
      <div className="border border-black w-96 h-96 justify-content-center">
        <h1 className=" font-bold">TrainName {trainName} </h1>
        <h1 className=" font-bold">TrainNo {trainNumber} </h1>
        <h1 className=" font-bold">Seat available AC {seatsAvailable.AC} </h1>
        <h1 className=" font-bold">Price of AC {price.sleeper} </h1>
        <h1 className=" font-bold">
          Seat available Sleeper {seatsAvailable.sleeper}{" "}
        </h1>
        <h1 className=" font-bold">Price of Sleeper {price.sleeper} </h1>
      </div>
    );
  });
};

export default Train;
