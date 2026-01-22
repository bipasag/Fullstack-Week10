import React from "react";

function Random({min,max})
{
    const randomValue = Math.floor(Math.random()* (max-min+1) + min);
    return(
        <div>
            <p>
                Random number between {min} and {max}:</p>       
                <h2>
                    {randomValue}</h2> </div>

    );
}
export default Random;