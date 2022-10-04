import React from "react";
import { directors } from "../data";

function Directors() {
  const directorList= directors.map((dir)=>{
    //console.log('math ' + Math.floor(Math.random()  * (1000 - 100)) + 100)
    // .map populates new array the results showing the called function in the calling array
    // math.floor => rounds off to the nearest integer
    // math.random =>  returns a random number that's greater than or equal to 0 and less than 1
    // const moviesList = (dir.movies).map((mov)=><li key={Math.floor(Math.random()  * (1000 - 100)) + 100}>{mov}</li>)
      return (
        <div key={dir.name}>
           <h1>{dir.name}</h1>
           <ul>
           {(dir.movies).map((mov)=><li key={Math.floor(Math.random()  * (1000 - 100)) + 100}>{mov}</li>)};
           </ul>
        </div>)                                 
  })

  return (
      <div>
        <h1>Directors Page</h1>
        {directorList}
      </div>
  )
}

export default Directors;