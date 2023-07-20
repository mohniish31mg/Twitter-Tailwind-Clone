import { SparklesIcon } from "@heroicons/react/outline";
import TweetInput from "./TweetInput";
import Post from "./Post";

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Mohniish Gurnani",
      username: "mohniish_mg31",
      userImage: "https://media.licdn.com/dms/image/C4E03AQH7bUdLgMLbjw/profile-displayphoto-shrink_800_800/0/1647166686344?e=1695254400&v=beta&t=7j-QOvwIlzrx98SW-1sTnAGhUjBYlDXL_xRMKzgMJrA",
      postImage:
        "https://images.unsplash.com/photo-1688730640164-3e610d4b3c48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRocmVhZHMlMjBhcHB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      text: "Threads.... Fastest to 100million.....in just 5 days😮😮. Seems Zuck is gonna control everybody's social life... One more Social Media App after WA, Insta and FB😶😶.",
    },
    {
      id: "2",
      name: "Mohniish Gurnani",
      username: "mohniish_mg31",
      userImage: "https://media.licdn.com/dms/image/C4E03AQH7bUdLgMLbjw/profile-displayphoto-shrink_800_800/0/1647166686344?e=1695254400&v=beta&t=7j-QOvwIlzrx98SW-1sTnAGhUjBYlDXL_xRMKzgMJrA",
      postImage:
        "https://images.unsplash.com/photo-1684493735679-359868df0e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hhdCUyMEdQVHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "After failing India's most challenging exam, UPSC OpenAI's chatbot failed another competitive exam. The chatbot could only crack 11 questions in both the papers of JEE advanced 😗😗. Chalo Chat GPT se kahi to better hai ham...😅😂😂.",
    },
    {
      id: "3",
      name: "Mohniish Gurnani",
      username: "mohniish_mg31",
      userImage: "https://media.licdn.com/dms/image/C4E03AQH7bUdLgMLbjw/profile-displayphoto-shrink_800_800/0/1647166686344?e=1695254400&v=beta&t=7j-QOvwIlzrx98SW-1sTnAGhUjBYlDXL_xRMKzgMJrA",
      postImage:
        "https://media.licdn.com/dms/image/D4D12AQEIkbadBWpBdA/article-cover_image-shrink_720_1280/0/1663540839630?e=2147483647&v=beta&t=oTR8oFlrNIujK2B40q5mlRwRsXyeGn0X-Cj8SEji2XY",
      text: `…AI... a boon or a bane??😶😶 …. That day is not far where a robot says: "Ye mai kar leta hu , tum Dream11 par team bana lo... "😶🤥`,
    },
  ];
  return (
    <div className="xl:ml-[260px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50  bg-white justify-between items-center border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <TweetInput />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
export default Feed;
