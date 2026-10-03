export type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  userId: number;
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
};

export type Comment = {
  id: number;
  name: string;
  text: string;
};