import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UseAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";
const SavedShow = () => {
  const { user } = UseAuth();
  const [movies, setMovies] = useState([]);

  const slideleft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideright = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    if (!user?.email) return;
    const unsubscribe = onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
      setMovies(doc.data()?.saveShows || []);
    });

    return () => unsubscribe();
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user.email}`);
  const deleteShow = async (passedId) => {
    try {
      const result = movies.filter((item) => item.id !== passedId);
      await updateDoc(movieRef, { saveShows: result });
    } catch (error) {
      console.error("Error deleting record: ", error);
    }
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">Saved Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideleft}
          className="bg-white absolute left-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />

        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer inline-block relative p-2"
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/original${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full ">
                  {item?.title}
                </p>

                <p
                  onClick={() => {
                    deleteShow(item.id);
                  }}
                  className="absolute top-4 right-4"
                >
                  <AiOutlineClose />
                </p>
              </div>
              <div />
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideright}
          className="bg-white right-0 absolute rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default SavedShow;
