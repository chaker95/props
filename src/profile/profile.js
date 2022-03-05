import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

function Profile(props) {
    const handleClick = () => {
        alert(props.fullName);
    };

    return (
        <>
            <div style={{ width:"200px", display:"block"}}>
               {props.children}
              <button onClick={handleClick}>button</button>
            </div>
            <div style={{ marginTop:"200px", display:"flex",justifyContent:"space-around"}}>
              <h2>Hello {props.fullName}</h2>
              <h2>Bio: {props.Bio}</h2>
              <h2>Profession: {props.Profession}</h2>
            </div>
        </>
    );
}
Profile.defaultProps = {
    fullName: "undefined",
    bio: "undefined",
    Profession: "undeffined",
};
Profile.prototype={
    fullName: propTypes.string ,
    Bio: propTypes.string ,
    Profession: propTypes.string ,
   
}
export default Profile;
