import { useState, useEffect } from "react";
import HeartActive from "./Favorite/heartActive";
import HeartNotActive from "./Favorite/HeartNotActive";

export default function ProductScreen(props) {
  const { children, product } = props;
  const [wishlistArr, setWishlist] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist") || [];
    if (storedWishlist.length >= 1) {
      setWishlist(JSON.parse(storedWishlist));
    }
    if (storedWishlist.length !== 0) {
      if (storedWishlist.includes(product.slug.current)) {
        setIsInWishlist(true);
      }
    } else {
      setIsInWishlist(false);
    }
  }, []);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist") || [];
    if (storedWishlist.length !== 0) {
      if (storedWishlist.includes(product.slug.current)) {
        setIsInWishlist(true);
      }
    } else {
      setIsInWishlist(false);
    }
  }, [wishlistArr]);

  const handleWishlistBtn = () => {
    if (!wishlistArr.includes(product.slug.current)) {
      const updatedWishlist = [...wishlistArr, product.slug.current];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setIsInWishlist(true);
    } else {
      const updatedWishlist = wishlistArr.filter(
        (item) => item !== product.slug.current
      );
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setIsInWishlist(false);
    }
  };

  return (
    <>
      {children}
      <div onClick={handleWishlistBtn}>
        {isInWishlist ? (
          <div className="relative w-12 h-12 rounded-lg bg-func-50 opacity-95">
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <HeartActive />
            </div>
          </div>
        ) : (
          <div className="relative w-12 h-12 rounded-lg bg-func-50 opacity-95">
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <HeartNotActive />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// export async function getStaticPaths() {
//   const games = [
//     "/product/world-of-tanks",
//     "/product/warcraft-iii-the-frozen-throne",
//     "/product/total-war-warhammer-iii",
//     "/product/starcraft-ii-wings-of-liberty",
//     "/product/crusader-kings-iii",
//     "/product/civilization-vi",
//     "/product/ufc-4",
//     "/product/nhl-23",
//     "/product/nba-2k23",
//     "/product/fifa-23",
//     "/product/f1-23",
//     "/product/stray",
//     "/product/l-a-noire",
//     "/product/goat-simulator-3",
//     "/product/football-manager-2023",
//     "/product/trackmania-2020",
//     "/product/the-crew-2",
//     "/product/need-for-speed-unbound",
//     "/product/forza-horizon-5",
//     "/product/burnout-paradise-remastered",
//     "/product/doom-eternal",
//     "/product/call-of-duty-warzone",
//     "/product/the-witcher-3-wild-hunt",
//     "/product/sekiro-shadows-die-twice",
//     "/product/elden-ring",
//   ];

//   return {
//     paths: games,
//     fallback: false, //Means anything else will 404
//   };
// }

// export function getStaticProps(context) {
//   return {
//     props: { slug: context.params.slug },
//   };
// }
