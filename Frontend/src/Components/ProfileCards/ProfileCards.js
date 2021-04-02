import React,{useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import "./ProfileCards.css"
import axios from "./axios"    //imp here we are importing the axios file not the module

function ProfileCards() {
    const [people,setPeople] = useState([]);

    useEffect(() => {
        
        async function fetchData()
        {
            const req = await axios.get('/NewFriends/card');
            setPeople(req.data);
        }
        fetchData();
    }, [])

    const swiped = (direction,nameToDelete) => {
        console.log("removing" + nameToDelete);
    };
    
    const outOfFrame = (name) => {
        console.log(name + "left the screen!");
    };
    
    return (
        <div className="profileCards">
            <div className="profileCards__cardContainer">
                {people.map(
                    (person) => 
                     <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir) => swiped(dir,person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                     >
                         <div style={{backgroundImage: "url(" + person.imgUrl +")"}} 
                              className="card">
                            <h3>{person.name}</h3>
                         </div>
                     </TinderCard>

                    
                    
                )}
            </div>
        </div>
    )
}

export default ProfileCards;
