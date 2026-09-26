import { useState } from "react";

type CommentFormProps = {
  onAddComment: (name: string, text: string) => void;
};

function CommentForm({ onAddComment }: CommentFormProps) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validation
    if (name.trim() === "" || text.trim() === "") {
      setError("Please enter your name and comment.");
      return;
    }

    if (text.trim().length < 5) {
      setError("Comment must be at least 5 characters.");
      return;
    }

    // Send comment to parent component
    onAddComment(name.trim(), text.trim());

    // Clear form after successful submission
    setName("");
    setText("");
    setError("");
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <h3>Leave a Comment</h3>

      <div>
        <label htmlFor="comment-name">Name</label>
        <input
          id="comment-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label htmlFor="comment-text">Comment</label>
        <textarea
          id="comment-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your comment"
        />
      </div>

      {error && <p className="form-error">{error}</p>}

      <button type="submit">Submit Comment</button>
    </form>
  );
}

export default CommentForm;