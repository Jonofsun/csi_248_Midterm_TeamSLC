import { useState } from "react";

function Comments({ initialComments = [] }) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setNewComment("");
  };

  return (
    <>
      <div className="comments-container">
        <div className="comments-header">Comments</div>
        <div className="comment-input-container">
          <input
            type="text"
            placeholder="Write a review!" // possibly add fuctionality for {member.id}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="comment-input"
          />
          <button onClick={handleAddComment} className="add-comment-btn">
            Add Comment
          </button>
        </div>
        {comments.length > 0 &&
          comments.map((comment, index) => (
            <div key={index} className="comment">
              <p>{comment}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Comments;
