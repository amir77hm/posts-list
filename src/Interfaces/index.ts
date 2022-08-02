interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  email: string;
  body: string;
  name: string;
}

export { Post, Comment };
