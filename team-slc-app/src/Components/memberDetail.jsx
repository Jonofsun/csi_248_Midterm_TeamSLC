function MemberDetail({ member }) {
  return (
    <>
      <div>
        <h2>{member.name}</h2>
        <p>{member.description}</p>
      </div>
    </>
  );
}

export default MemberDetail;
