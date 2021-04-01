import React,{useState} from 'react'
import TinderCard from 'react-tinder-card';
import "./ProfileCards.css"

function ProfileCards() {
    const [people,setPeople] = useState([
        {
            name : "Alan Walker",
            url : "https://i.pinimg.com/originals/d4/a4/e5/d4a4e53ef5082b6c912b8c8cc859f703.jpg",
        },
        {
            name : "Nobita",
            url : "https://i.pinimg.com/474x/e9/36/ab/e936ab240156c33be7974c2c36188bdf.jpg",
        },
    ]);

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
                         <div style={{backgroundImage: "url(" + person.url +")"}} 
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
