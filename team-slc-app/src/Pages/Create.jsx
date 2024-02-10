import { useContext } from "react";
import { MembersContext } from "../App";
function Create() {
  const { createNewMember } = useContext(MembersContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let newMember = {
      name: formData.get("name"),
      description: formData.get("description"),
      role: "New Member",
      avatar: "",
    };
    createNewMember(newMember);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Join Server</h2>
      <div className="form-input">
        <label htmlFor="name">Your Name</label>
        <input name="name" placeholder="user name or alias" />
      </div>

      <div className="form-input">
        <label htmlFor="description">Description</label>
        <input name="description" placeholder="description" />
      </div>
      <button type="submit">Join Server</button>
    </form>
  );
}

export default Create;
