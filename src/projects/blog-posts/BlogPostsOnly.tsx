// BlogPosts.server.tsx

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogPostsProps {
  posts: Post[];
}

function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <div className="grid-container">
      {posts.map((post) => (
        <div key={post.id} className="grid-item">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogPosts;
