export type Post = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with React",
    date: "September 20, 2026",
    excerpt: "Learn the basics of React and how components help us build modern web applications.",
    content:
      "React is a JavaScript library for building user interfaces. One of its main ideas is dividing an application into reusable components. Components make our code easier to organize, maintain, and reuse.",
    category: "React",
    imageUrl: "/images/post1.jpg",
  },
  {
    id: 2,
    title: "Why Use TypeScript?",
    date: "September 21, 2026",
    excerpt: "Discover how TypeScript can help developers catch errors before an application runs.",
    content:
      "TypeScript extends JavaScript by adding static type checking. This allows developers to identify many common errors while writing code instead of discovering them when the application is running.",
    category: "TypeScript",
    imageUrl: "/images/post2.jpg",
  },
  {
    id: 3,
    title: "Understanding React Components",
    date: "September 22, 2026",
    excerpt: "A simple introduction to parent components, child components, and props in React.",
    content:
      "React applications are built from components. A parent component can pass information to a child component using props. This creates a clear structure and makes larger applications easier to manage.",
    category: "React",
    imageUrl: "/images/post3.jpg",
  },
  {
    id: 4,
    title: "Learning Web Development",
    date: "September 23, 2026",
    excerpt: "Some simple ideas for making the web development learning process more manageable.",
    content:
      "Learning web development takes practice. Building small projects is a useful way to understand HTML, CSS, JavaScript, TypeScript, and frameworks such as React while gradually developing problem-solving skills.",
    category: "Web Development",
    imageUrl: "/images/post4.jpg",
  },
];