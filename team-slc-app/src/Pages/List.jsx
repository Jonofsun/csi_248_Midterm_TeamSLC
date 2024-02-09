import { Link } from "react-router-dom";
import { useContext } from "react";
import { MembersContext } from "../App";

function List() {
  const { membersList } = useContext(MembersContext);
  return (
    <>
      <h2>Members List</h2>
      {membersList.map((member) => {
        return (
          <div>
            <Link to={`/members/${member.id}`}>{member.name}</Link>
          </div>
        );
      })}
    </>
  );
}

export default List;
