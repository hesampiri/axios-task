import Variants from "../Skeleton";
import BasicCard from "../BasicCard";

function Section({ posts, loading }) {

  return (
    <>
    <div className="flex flex-wrap justify-center py-4 gap-4 bg-blue-600">
      {posts.map((post) => {
        return loading ? <Variants/> : <BasicCard key={post.id} infos={post}/>
      })}
    </div>
    </>
  );
}

export default Section;
