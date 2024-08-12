import PropTypes from 'prop-types';
function User(props){
    return (
        <div className="card">
            <span className="status">Online</span>
            <img src={props.image}  className="image" alt="user" />
            <h1>{props.name}</h1>
            <h3>{props.native}</h3>
            <p>{props.role}</p>
            <div className="buttons">
                <button>Message</button>
                <button>Follow</button>
            </div>
            <div className="foot">
                <h2>Skills</h2>
                <ul>
                    {
                    props.skills.map((skill,index)=>
                    (
                        <li key={index}>{skill}</li>
                    )
                    )}
                </ul>
            </div>

        </div>
    );
}
export const Card = () => {
    return (
        <User 
            name="Gokul" 
            native="Krishnagiri" 
            role="web Developer"
            image="photo.jpeg"
            skills={["Java", "HTML", "CSS", "JavaScript", "GIT", "Data structures", "MySQL"]} 
        />
       
    );
};
export const Card2 = () => {
    return (
        <User 
            name="Rahul" 
            native="chennai" 
            role="data analyst"
            image="Rahul.png"
            skills={["DBMS", "Spring boot", "Excel", "JavaScript", "GIT", "Data structures", "MySQL"]} 
        />
       
    );
};
