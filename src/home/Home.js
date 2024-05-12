import axios from "axios";
import { useEffect, useState } from "react";
import Section from "../Section/Section";
import PaginationRounded from "../Pagination/Pagination";
import CircularIndeterminate from "../Progress";

function Home() {
  const [posts, setposts] = useState([]);
  const [isloading, setisloading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage] = useState(25);

  const URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    setisloading(true);
    axios.get(URL)
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

  const paginate = (pagenumebr)=>{setcurrentPage(pagenumebr)}


  return (
    <>
      <h2 className="text-center text-lg font-bold p-4 flex justify-center">Home Page</h2>
      {/* <Section posts={currentposts} loading={isloading} pagenumebr={paginate} /> */}
      {isloading ? <CircularIndeterminate/> : <Section posts={currentposts} loading={isloading} pagenumebr={paginate} /> }
      <PaginationRounded paginate={paginate} />
    </>
  );
}

export default Home;
