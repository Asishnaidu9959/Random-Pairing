type CommentItemProps = {
  name: string;
  text: string;
};

function CommentItem({ name, text }: CommentItemProps) {
  return (
    <div className="comment-item">
      <strong>{name}</strong>
      <p>{text}</p>
    </div>
  );
}

export default CommentItem;