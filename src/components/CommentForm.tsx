import { useForm } from "react-hook-form";

type CommentFormProps = {
  onAddComment: (name: string, text: string) => void;
};

type CommentFormData = {
  name: string;
  email: string;
  comment: string;
};

function CommentForm({ onAddComment }: CommentFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentFormData>();

  function onSubmit(data: CommentFormData) {
    onAddComment(data.name.trim(), data.comment.trim());
    reset();
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Leave a Comment</h3>

      <div>
        <label htmlFor="comment-name">Name</label>
        <input
          id="comment-name"
          type="text"
          placeholder="Enter your name"
          {...register("name", {
            required: "Name is required.",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters.",
            },
          })}
        />

        {errors.name && (
          <p className="form-error">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="comment-email">Email</label>
        <input
          id="comment-email"
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address.",
            },
          })}
        />

        {errors.email && (
          <p className="form-error">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="comment-text">Comment</label>
        <textarea
          id="comment-text"
          placeholder="Write your comment"
          {...register("comment", {
            required: "Comment is required.",
            minLength: {
              value: 10,
              message: "Comment must be at least 10 characters.",
            },
            maxLength: {
              value: 500,
              message: "Comment must be 500 characters or less.",
            },
          })}
        />

        {errors.comment && (
          <p className="form-error">{errors.comment.message}</p>
        )}
      </div>

      <button type="submit">Submit Comment</button>
    </form>
  );
}

export default CommentForm;