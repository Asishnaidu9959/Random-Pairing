import CommentItem from "./CommentItem";
import type { Comment } from "../types";


type CommentListProps = {
  comments: Comment[];
};

function CommentList({ comments }: CommentListProps) {
  return (
    <section className="comment-list">
      <h3>Comments</h3>

      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            name={comment.name}
            text={comment.text}
          />
        ))
      )}
    </section>
  );
}

export default CommentList;