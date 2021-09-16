import React, {useEffect, useState } from 'react';
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import axios from './axios'


function TinderCards() {

   const [people, setPeople] = useState([
      
         {
            name:"Elon Musk",
            url:"https://i.gadgets360cdn.com/large/elon_musk_reuters_1610084738222.jpg"
      },
      {
         name:"Jeff Bezos",
         url:"https://media.wired.com/photos/6019cab23453f789506008d0/1:1/w_1600,h_1600,c_limit/Sec_Bezos_1036084400.jpg"
      },
      
   ]);
   useEffect(() => {
      async function fetchData() {
         const req = await axios.get('/tender/card');
         setPeople(req.data)
      }

      fetchData();
   }, [])

   const swiped = (direction, nameToDelete) => {
      console.log("removing:" + nameToDelete);
      // setLastDirection(direction);
   };
   const outOfFrame = (name) => {
      console.log(name + "Left the screen")
   }


   return (
      <div className="tinderCards">
         <div className="tinderCards__cardContainer">

         {people.map((person) => (
            <TinderCard className="swipe"
               key={person.name}
               preventSwipe={["up", "do"]}
               onSwipe={(dir) => swiped(dir, person.name)}
               onCardLeftScreen={()=> outOfFrame(person.name)}
            >
               <div style={{backgroundImage:`url(${person.url})`}} className="card">
               <h3> {person.name} </h3>
               </div>
            </TinderCard>
         ))}
            
         </div>
       

      </div>
   );
}

export default TinderCards;