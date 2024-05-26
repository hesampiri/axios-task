import Comment from "../Details/comment";

function ComntSection({ comments }) {
  return (
    <>
      <div className="flex flex-col py-4h-full">
        {comments.map((item) => {
          return <Comment key={item.id} info={item} />;
        })}
      </div>
    </>
  );
}

export default ComntSection;
