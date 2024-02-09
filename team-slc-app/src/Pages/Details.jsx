import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MembersContext } from "../App";
import Comments from "../Components/comments";
function Detail() {
  const { membersList } = useContext(MembersContext);
  const { id } = useParams();

  const member = membersList.find((member) => member.id === Number(id));
  return (
    <>
      <div className="card">
        <h2>{member.name}</h2>
        <p>{member.description}</p>
        <p>{member.role}</p>
        <img src={member.avatar} alt={`${member.name}'s avatar`}></img>
      </div>
      <br></br>
      <Comments />
    </>
  );
}

export default Detail;
