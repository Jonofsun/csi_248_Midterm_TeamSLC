import MemberDetail from "./memberDetail";

function MembersList({ members }) {
  return (
    <>
      <div>
        {members.map((member) => (
          <memberDetail key={member.id} member={member} />
        ))}
        ;
      </div>
    </>
  );
}

export default MembersList;
