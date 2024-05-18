import { useEffect, useState } from "react";
import Section from "../Section/Section";
import PaginationRounded from "../Pagination/Pagination";
import CircularIndeterminate from "../Progress";
import { ApiCaller } from "../ApiCaller";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setposts] = useState([]);
  const [isloading, setisloading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage] = useState(25);

  useEffect(() => {
    setisloading(true);
    ApiCaller('/posts')
      .then((res) => {
        setposts([...res.data]);
        setisloading(false);
      })
      .catch((error) => {
        window.alert(
          error);
      });
  }, []);


  const indexOfLastpost = currentPage * postPerPage ; 
  const indexOfFirstpost = indexOfLastpost - postPerPage ; 
  const currentposts = posts.slice(indexOfFirstpost , indexOfLastpost);
  const pages = posts.length / postPerPage ;

  const paginate = (pagenumebr)=>{setcurrentPage(pagenumebr)}


  return (
    <>
      <h2 className="text-center text-lg font-bold p-4 flex justify-center">Home Page</h2>
      <div className="bg-pink-400 text-center p-3">
        <Link to={'/comments'}>
          <button className="bg-pink-600 p-1 rounded font-bold text-white">Go to Comments Page</button>
        </Link>
      </div>
      {isloading ? <CircularIndeterminate/> : <Section posts={currentposts} loading={isloading} pagenumebr={paginate} /> }
      <PaginationRounded paginate={paginate} number={Math.round(pages)}  />
    </>
  );
}

export default Home;
