import axios from "axios";
interface Post {
  id: number;
  title: string;
  body: string;
}


async function fetchPosts(): Promise<Post[]> {
  try {
   
    const response = await axios.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
   
    return response.data;
  } catch (error) {
    
    console.error("Failed to fetch posts:", error);
   
    return []; 
  }
}


fetchPosts().then((posts) => {
 
  if (posts.length > 0) {
    
    console.log("Title of the first post:", posts[0].title);
    console.log("Body of the first post:", posts[0].body);
    
  } else {
    console.log("No posts fetched or an error occurred.");
  }
});