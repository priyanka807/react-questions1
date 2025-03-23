import React, { useState } from "react";

const cities = [
  {
    name: "Chennai",
    states: ["Tamil Nadu", "Andhra Pradesh", "Karnataka", "Kerala", "Telangana", "Maharashtra", "Goa", "Puducherry", "Odisha", "West Bengal"],
  },
  {
    name: "Bangalore",
    states: ["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh", "Telangana", "Goa", "Maharashtra", "Odisha", "West Bengal", "Chhattisgarh"],
  },
  {
    name: "Delhi",
    states: ["Delhi", "Haryana", "Uttar Pradesh", "Rajasthan", "Punjab", "Madhya Pradesh", "Bihar", "Uttarakhand", "Himachal Pradesh", "Chandigarh"],
  },
  {
    name: "Mumbai",
    states: ["Maharashtra", "Goa", "Gujarat", "Madhya Pradesh", "Rajasthan", "Karnataka", "Tamil Nadu", "Telangana", "Chhattisgarh", "West Bengal"],
  },
  {
    name: "Kolkata",
    states: ["West Bengal", "Odisha", "Bihar", "Jharkhand", "Chhattisgarh", "Assam", "Tripura", "Manipur", "Nagaland", "Sikkim"],
  },
  {
    name: "Hyderabad",
    states: ["Telangana", "Andhra Pradesh", "Karnataka", "Tamil Nadu", "Maharashtra", "Goa", "Odisha", "Chhattisgarh", "Madhya Pradesh", "West Bengal"],
  },
  {
    name: "Pune",
    states: ["Maharashtra", "Goa", "Karnataka", "Tamil Nadu", "Telangana", "Andhra Pradesh", "Gujarat", "Madhya Pradesh", "Chhattisgarh", "Rajasthan"],
  },
  {
    name: "Ahmedabad",
    states: ["Gujarat", "Maharashtra", "Rajasthan", "Madhya Pradesh", "Goa", "Delhi", "Haryana", "Punjab", "Chhattisgarh", "Uttar Pradesh"],
  },
  {
    name: "Jaipur",
    states: ["Rajasthan", "Gujarat", "Madhya Pradesh", "Uttar Pradesh", "Haryana", "Punjab", "Delhi", "Chhattisgarh", "Maharashtra", "Bihar"],
  },
  {
    name: "Lucknow",
    states: ["Uttar Pradesh", "Delhi", "Haryana", "Punjab", "Bihar", "Jharkhand", "Madhya Pradesh", "Chhattisgarh", "West Bengal", "Rajasthan"],
  },
];

export default function CitiesList() {
  const [hoveredCity, setHoveredCity] = useState(null);

  const selectedCity = cities.find((city) => city.name === hoveredCity);

  return (
    <div className="flex flex-col items-center mt-10" >
      
      <ul className="" 
 style={{display:'flex',justifyContent:'space-between',listStyle:'none',padding:'20px 60px'}}>
        {cities.map((city) => (
            <>
            <div >
          <li style={{}}
            key={city.name}
            className="p-2 cursor-pointer text-lg font-medium text-gray-700 hover:text-blue-500"
            onMouseEnter={() => setHoveredCity(city.name)}
            onMouseLeave={() => setHoveredCity(null)}
          >
            {city.name}

          </li>
                
        {selectedCity && hoveredCity===city.name&& (
                        <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
                          {selectedCity.states.map((state, index) => (
                            <h6 key={index} className="text-gray-600">{state}</h6>
                          ))}
                        </div>
                      )}
                </div>
                </>
        ))}

     
      </ul>  

    </div>
  );
}
