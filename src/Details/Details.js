import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularIndeterminate from "../Progress";
import Infos from "../infos/Infos";
import { ApiCaller } from "../ApiCaller";
import Comment from "./comment";

function Details() {
  const [post, setpost] = useState({});
  const [isloading, setisloading] = useState({ post: false, comment: false });
  const [comment, setcomment] = useState([]);

  const userID = useParams().postID;

  useEffect(() => {
    setisloading({ ...isloading, post: true });
    ApiCaller("/posts", userID)
      .then((res) => {
        setpost({ ...res.data });
        setisloading({ ...isloading, post: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setisloading({ ...isloading, comment: true });
    ApiCaller("/posts", userID, "/comments")
      .then((res) => {
        setcomment(res.data);
        setisloading({ ...isloading, comment: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [post]);

  return (
    <>
      <div className="flex flex-col h-screen">
        {isloading.post ? <CircularIndeterminate /> : <Infos info={post} />}
        {isloading.comment ? (
          <p className="text-lg mx-auto mt-5">comment is loading...</p>
        ) : (
          comment.map((cmt) => {
            return <Comment key={cmt.id} info={cmt} />;
          })
        )}
      </div>
    </>
  );
}

export default Details;
