import { useState, useEffect } from "react";
import HeartActive from "./heartActive";
import HeartNotActive from "./HeartNotActive";

const Favorite = ({ product }) => {
  const [wishlistArr, setWishlist] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const storedWishlist = localStorage.getItem("wishlist") || [];

  useEffect(() => {
    if (storedWishlist && storedWishlist.length !== 0) {
      setWishlist(JSON.parse(storedWishlist));
    }
    if (storedWishlist.includes(product.slug.current)) {
      setIsInWishlist(true);
    } else {
      setIsInWishlist(false);
    }
  }, []);

  useEffect(() => {
    if (storedWishlist.includes(product.slug.current)) {
      setIsInWishlist(true);
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
    <div onClick={handleWishlistBtn}>
      {isInWishlist ? (
        <div className="relative w-12 h-12 rounded-lg md:w-14 md:h-14 bg-func-50 opacity-95">
          <div className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 md:w-10 md:h-10 top-1/2 left-1/2">
            <HeartActive />
          </div>
        </div>
      ) : (
        <div className="relative w-12 h-12 rounded-lg md:w-14 md:h-14 bg-func-50 opacity-95">
          <div className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 md:w-10 md:h-10 top-1/2 left-1/2">
            <HeartNotActive />
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorite;
