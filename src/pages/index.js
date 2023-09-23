"use client"
import EmblaCarousel from "../components/Carousel/EmblaCarousel";
import TopCreators from '../components/TopCreators/TopCreators';
import React, {useEffect, useState} from "react";
import {client} from "../../sanity/lib/client";
import {urlForImage, urlFor} from "../../sanity/lib/image";
import Contact from "@/components/Contact";
import Privacy from "@/components/Privacy";
import ProductScreen from "@/components/ProductScreen";
import GameCreator from "../components/GameCreator";
import GamepadIcon from "@/components/GamepadIcon";
import SearchIcon from "@/components/SearchIcon";
import SettingsIcon from "@/components/SettingsIcon";
import LinkArrow from "@/components/LinkArrow";
import Favorite from "@/components/Favorite/Favorite";
import Cross from "@/components/Cross";
import {Preloader} from "@/components/Preloader";
import {gsap} from "gsap";
import Quiz from "../components/Quiz/Quiz";
import Like from "../components/Like";
import Comment from "../components/Comment";
import useEmblaCarousel from "embla-carousel-react";

export default function Home({products, promoted}) {
    const [emblaRef] = useEmblaCarousel()
    const [isLoading, setIsLoading] = useState(true);

    const datecreat = [
        {
            slug: '1',
            img: 'https://3mkstore.com/mk_content/uploads/2022/03/QFRCPgIcZiifzDoJMfjgo3R5xfFmFnpKIHrwJ0gQudE_350x200_1x-0.jpeg',
            name: 'Henrik Fåhraeus',
            imgname: 'https://images.teamtailor-cdn.com/images/s3/teamtailor-production/square_340-v4/image_uploads/45485daa-49c1-4189-93b8-41c65a7cb5d2/original.jpg?outputFormat=webp',
            desc: 'Henrik Fåhraeus served as the Game Director for "Crusader Kings III." He played a crucial role in shaping the game\'s design and direction.',
            games: [
                {
                    img: 'https://3mkstore.com/mk_content/uploads/2022/03/QFRCPgIcZiifzDoJMfjgo3R5xfFmFnpKIHrwJ0gQudE_350x200_1x-0.jpeg',
                    gamename: 'Crusader Kings III.'
                },
                {
                    img: 'https://image.ceneostatic.pl/data/products/24653498/i-europa-universalis-iv-digital-extreme-edition-digital.jpg',
                    gamename: 'Europa Universalis IV'
                },
                {
                    img: 'https://cdn.cdkeys.com/500x706/media/catalog/product/v/i/victoria_2_cover_image__1.jpg',
                    gamename: 'Victoria II'
                },
            ]
        },
        {
            slug: '2',
            img: 'https://gamerspotstorage01.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/05/23134358/GTAV.jpg',
            name: 'Daniel Houser',
            imgname: 'https://st.overclockers.ru/images/soft/2020/02/05/dh.jpg',
            desc: 'Served as the Game Director for "Crusader Kings III." He played a crucial role in shaping the game\'s design and direction.',
            games: [
                {
                    img: 'https://upload.wikimedia.org/wikipedia/ru/0/03/Red_Dead_Redemption_2_coverart.jpg',
                    gamename: 'Red Dead Redemption 2'
                },
                {
                    img: 'https://upload.wikimedia.org/wikipedia/ru/0/0f/Max_Payne_3.jpg',
                    gamename: 'Max Payne 3'
                },
                {
                    img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a8/L.A._Noire.jpg/548px-L.A._Noire.jpg',
                    gamename: 'L.A. Noire'
                },
            ]
        },
        {
            slug: '3',
            img: 'https://upload.wikimedia.org/wikipedia/ru/3/38/Crusader_Kings_3_-_cover.jpg',
            name: 'Andreas Waldetoft',
            imgname: 'https://pbs.twimg.com/profile_images/1151220098922897409/-9NSGbjI_400x400.jpg',
            desc: 'Served as the Game Director for "Crusader Kings III." He played a crucial role in shaping the game\'s design and direction.',
            games: [
                {
                    img: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Hearts_of_Iron_IV_packshot.jpg',
                    gamename: 'Hearts of Iron IV'
                },
                {
                    img: 'https://upload.wikimedia.org/wikipedia/ru/4/47/Europa_Universalis_IV.jpg',
                    gamename: 'Europa Universalis IV'
                },
                {
                    img: 'https://upload.wikimedia.org/wikipedia/ru/8/84/Europa_Universalis_Box.jpg',
                    gamename: 'Europa Universalis III'
                },
            ]
        },
        {
            slug: '4',
            img: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
            name: 'Marcin Przybyłowicz',
            imgname: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Marcin_Przyby%C5%82owicz.jpg',
            desc: 'Served as the Game Director for "Crusader Kings III." He played a crucial role in shaping the game\'s design and direction.',
            games: [
                {
                    img: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Thronebreaker_The_Witcher_Tales_cover_art.png',
                    gamename: 'Thronebreaker: The Witcher Tales'
                },
                {
                    img: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
                    gamename: 'Cyberpunk 2077'
                },
                {
                    img: 'https://upload.wikimedia.org/wikipedia/en/7/7e/SevenTheDaysLongGone.jpg',
                    gamename: 'Seven: The Days Long Gone'
                },
            ]
        },
        {
            slug: '5',
            img: 'https://upload.wikimedia.org/wikipedia/ru/a/a8/Sekiro_Shadows_Die_Twice.jpg',
            name: 'Hidetaka Miyazaki',
            imgname: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Hidetaka_Miyazaki%2C_The_Game_Awards_2022_%28cropped%29.png',
            desc: 'Served as the Game Director for "Crusader Kings III." He played a crucial role in shaping the game\'s design and direction.',
            games: [
                {
                    img: 'https://upload.wikimedia.org/wikipedia/ru/7/7c/Elden_Ring_-_cover.jpg',
                    gamename: 'Elden Ring'
                },
                {
                    img: 'https://upload.wikimedia.org/wikipedia/ru/b/bb/Dark_souls_3_cover_art.jpg',
                    gamename: 'Dark Souls III'
                },
                {
                    img: 'https://upload.wikimedia.org/wikipedia/ru/a/a8/Sekiro_Shadows_Die_Twice.jpg',
                    gamename: 'Sekiro: Shadows Die Twice'
                },
            ]
        },
        {
            slug: '6',
            img: 'https://upload.wikimedia.org/wikipedia/en/7/75/Aperture_desk_job_logo.jpg',
            name: 'Erik Wolpaw',
            imgname: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Erik_Wolpaw_at_GDC_2012.jpg',
            desc: 'Served as the Game Director for "Crusader Kings III." He played a crucial role in shaping the game\'s design and direction.',
            games: [
                {
                    img: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Portal2cover.jpg',
                    gamename: 'Portal 2'
                },
                {
                    img: 'https://upload.wikimedia.org/wikipedia/en/7/75/Aperture_desk_job_logo.jpg',
                    gamename: 'Aperture Desk Job'
                },
                {
                    img: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Left4Dead_Windows_cover.jpg',
                    gamename: 'Left 4 Dead'
                },
            ]
        },
    ]

    useEffect(() => {
        var tl = gsap.timeline({repeat: 0, repeatDelay: 1});
        tl.to(".progressCurrent", {x: "100%", duration: 2, ease: "power.out"});
        tl.to(".goUp", {
            y: "-100%",
            duration: 0.5,
            onComplete: closePreloader,
        });
    }, []);

    function closePreloader() {
        setIsLoading(false);
    }

    const [substrValue, setSubstrValue] = useState(22);

    useEffect(() => {
        const handleResize = () => {
            const newSubstrValue = window.innerWidth >= 768 ? 22 : 14;
            setSubstrValue(newSubstrValue);
        };

        handleResize();

        window.addEventListener("resize", handleResize);
    }, []);

    const [searchText, setSearchText] = useState("");
    const [searchResults, setsearchRes] = useState();

    useEffect(
        (props) => {
            const timeout = setTimeout(() => {
                if (searchText.trim().length >= 3) {
                    const filteredObjects = products.filter((obj) => {
                        return Object.values(obj).some((value) =>
                            new RegExp(`\\b${searchText}\\b`, "i").test(value.toString())
                        );
                    });
                    setsearchRes(filteredObjects);
                }
            }, 1000);
            return () => clearTimeout(timeout);
        },
        [searchText]
    );

    const menuItems = [
        {
            name: "Privacy policy",
            link: "privacy",
        },
        {
            name: "Contact us",
            link: "contact",
        },
    ];

    const [visibleComponent, setVisibleComponent] = useState("quizGame");
    const [prevVisibleComponent, setPrevVisibleComponent] = useState("quizGame");

    const [navigationColors, setNavigationColors] = useState({
        topGames: "#00FF0C",
        search: "#FFFFFF",
        settings: "#FFFFFF",
        quizGame: '#FFFFFF',
    });

    useEffect(() => {
        setNavigationColors((prevColors) => ({
            ...prevColors,
            quizGame: visibleComponent === 'quizGame',
            topGames: visibleComponent === "topGames" ? "#00FF0C" : "#FFFFFF",
            search: visibleComponent === "search" ? "#00FF0C" : "#FFFFFF",
            settings: visibleComponent === "settings" ? "#00FF0C" : "#FFFFFF",
        }));
    }, [visibleComponent]);

    const handleVision = (componentName) => {
        setPrevVisibleComponent(visibleComponent);
        setVisibleComponent(componentName);
    };
    const backBtn = () => {
        setVisibleComponent(prevVisibleComponent);
    };

    const [gamePage, setgamePage] = useState({
        item: null,
        renderPage: false,
    });
    const [gameCreatorPage, setGameCreatorPage] = useState({
        item: null,
        renderPage: false,
    });

    const [wishlist, setWishlistItems] = useState({
        wishlistItems: null,
        renderPage: false,
    });

    const openWishlist = (products) => {
        const wishlistItems = [];
        const data = localStorage.getItem("wishlist") || [];

        if (data.length !== 0) {
            const slugsArray = JSON.parse(data);
            for (const slug of slugsArray) {
                const wishlistItem = products.find((obj) => {
                    return obj.slug.current === slug;
                });
                if (wishlistItem) {
                    wishlistItems.push(wishlistItem);
                }
            }
        }

        setWishlistItems({wishlistItems, renderWishlist: true});
        handleVision("wishlist");
    };

    const openCreatorGamePage = (query, {props}) => {
        const found = datecreat.find((obj) => {
            return obj.slug === query;
        });
        setGameCreatorPage({found, renderPage: true});
        handleVision("gameCreator");
    };

    const openGamePage = (query, {props}) => {
        const found = products.find((obj) => {
            return obj.slug.current === query;
        });
        setgamePage({found, renderPage: true});
        handleVision("productScreen");
    };

    return (
        <>
            {isLoading && <Preloader/>}
            {!isLoading && visibleComponent === 'quizGame' && (
                <Quiz handleVision={handleVision}/>
            )

            }
            {visibleComponent === "topGames" && (
                <div className="top-games max-w-sm px-4 mx-auto mb-24 md:max-w-2xl mt-14">
                    <h1 className="mb-8 text-4xl font-bold text-white font-inter">
                        Top games
                    </h1>
                    <h2 className="mb-6 text-2xl font-bold text-white font-inter">
                        {promoted[0].sliderName}
                    </h2>
                    <EmblaCarousel images={promoted[0].products}>
                        {promoted[0].products.map((slide, index) => (
                            <div
                                onClick={() => openGamePage(slide.slug.current, products)}
                                className="relative md:w-[652px] w-[360px] h-[483px] rounded-2xl"
                                key={index}
                            >
                                <div className="relative md:w-[652px] w-[360px] h-[483px] overflow-hidden rounded-2xl">
                                    <img
                                        src={urlFor(slide.image).url()}
                                        alt="game photo"
                                        className="absolute -translate-x-1/2 h-[483px] min-w-min left-1/2 object-contain"
                                    />
                                </div>

                                <div className="absolute bottom-0 w-full p-5 rounded-b-2xl bg-func-50 opacity-95 h-fit">
                                    <div className="text-2xl text-white font-inria">
                                        {slide.name}
                                    </div>
                                    <div className="text-base font-normal text-white uppercase font-inria opacity-40">
                                        {slide.genre}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </EmblaCarousel>
                    <TopCreators data={datecreat} fun={openCreatorGamePage}>
                    </TopCreators>
                    <h2 className="mb-6 text-2xl font-bold text-white font-inter">
                        All games
                    </h2>
                    <div className="flex flex-wrap justify-between max-w-sm md:max-w-2xl gap-x-3 gap-y-5">
                        {products.map((product) => (
                            <div
                                onClick={() => openGamePage(product.slug.current, products)}
                                key={product.slug.current}
                                data-slug={product.slug.current}
                            >
                                <div
                                    className="relative md:h-[483px] md:w-[310px] w-[166px] h-64 overflow-hidden rounded-2xl">
                                    <img
                                        src={urlForImage(product.image)}
                                        alt={product.name}
                                        className="absolute h-64 md:h-[483px] -translate-x-1/2 min-w-min left-1/2 object-contain"
                                    />
                                    <div className="absolute bottom-0 w-full p-2 md:p-5 bg-func-50 opacity-95 h-fit">
                                        <div className="text-xl text-white md:text-2xl font-inria">
                                            {product.name.length > substrValue
                                                ? `${product.name.substring(0, substrValue)}...`
                                                : product.name}
                                        </div>
                                        <div
                                            className="text-sm font-normal text-white uppercase md:text-lg font-inria opacity-40">
                                            {product.genre}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {visibleComponent === "gameCreator" && (
                <GameCreator>
                    <img className='absolute top-0 w-full md:static z-[-1]' src={gameCreatorPage.found.img} alt=""/>
                    <div
                        className="relative bg-card-50 md:rounded-none md:mt-0 rounded-t-[40px] mt-[60%] px-5 pt-14 pb-28">
                        <img
                            className='w-[80px] h-[80px] object-cover rounded-full border-[2px] border-white absolute top-[-40px]'
                            src={gameCreatorPage.found.imgname}
                            alt=""/>
                        <h1 className='text-[24px] font-bold mb-[8px]'>{gameCreatorPage.found.name}</h1>
                        <p className='text-[#3d3d3d] mb-[24px]'>{gameCreatorPage.found.games.length} games</p>
                        <h1 className='text-[24px] font-bold mb-[8px]'>Short Description</h1>
                        <p className='mb-[24px]'>{gameCreatorPage.found.desc}</p>
                        <h1 className='text-[24px] font-bold mb-[12px]'>Creator's games</h1>
                        <div className='embla' ref={emblaRef}>
                            <div className="embla__container">
                                {gameCreatorPage.found.games.map((item) => (
                                    <div className="embla__slider bg-func-50">
                                        <img className='embla__slider__img h-[80%] object-cover'
                                             src={item.img}
                                             alt=""/>
                                        <div className="embla__slider__bottom">
                                            <h1>{item.gamename}</h1>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </GameCreator>

            )}

            {visibleComponent === "productScreen" && (
                <ProductScreen product={gamePage.found}>
                    <div
                        className="h-screen overflow-y-scroll text-white"
                        title={gamePage.found?.slug}
                    >
                        <>
                            <img
                                src={urlForImage(gamePage.found.image)}
                                alt={gamePage.found.name}
                                className="absolute top-0 w-full md:static -z-50"
                            />
                            <div
                                className="bg-card-50 md:rounded-none md:mt-0 rounded-t-[40px] mt-[40%] px-5 pt-14 pb-28">
                                <div className="sticky top-0 z-10 max-w-sm mx-auto md:max-w-2xl md:static ">
                                    <div className="flex items-start justify-between mb-8">
                                        <h1 className="text-4xl font-bold text-white md:text-5xl">
                                            {gamePage.found.name}
                                        </h1>
                                        <div
                                            className="w-6 h-6 mt-3 font-bold text-white md:w-8 md:h-8"
                                            onClick={backBtn}
                                        >
                                            <Cross/>
                                        </div>
                                    </div>

                                    <EmblaCarousel images={gamePage.found.slides}>
                                        {gamePage.found.slides.map((slide, index) => (
                                            <div className="md:w-[672px] w-[384px]" key={index}>
                                                <div
                                                    className="relative flex slider-crop h-[216px] md:h-[378px] overflow-hidden rounded-2xl">
                                                    <img
                                                        src={urlFor(slide).url()}
                                                        alt="game photo"
                                                        className="absolute -translate-x-1/2 flex md:w-[672px] w-[384px] left-1/2 object-contain"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </EmblaCarousel>
                                    <Like/>
                                    <div className="grid justify-between grid-cols-2 my-6 gap-y-2">
                                        <div className="text-2xl font-bold text-white md:text-4xl font-inter">
                                            Released:
                                        </div>
                                        <div className="text-lg text-right text-white md:text-2xl">
                                            {gamePage.found.releaseDate}
                                        </div>
                                        <div className="text-2xl font-bold text-white md:text-4xl font-inter">
                                            Genre:
                                        </div>
                                        <div className="text-lg text-right text-white md:text-2xl">
                                            {gamePage.found.genre}
                                        </div>
                                    </div>
                                    <div className="mb-4 text-2xl font-bold text-white md:text-4xl font-inter">
                                        Description:
                                    </div>
                                    <div className="mb-6 text-lg text-white md:text-2xl">
                                        {gamePage.found.description}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <a
                                            target="_blank"
                                            href={gamePage.found.trailerUrl}
                                            className="flex items-center gap-4 px-4 py-2 text-xl text-white uppercase border border-white border-solid md:text-2xl w-fit font-inria rounded-2xl"
                                        >
                                            Watch trailer
                                            <div className="w-4">
                                                <LinkArrow/>
                                            </div>
                                        </a>
                                        <Favorite
                                            key={gamePage.found.slug}
                                            product={gamePage.found}
                                        />
                                    </div>
                                    <Comment/>
                                </div>
                            </div>
                        </>
                    </div>
                </ProductScreen>
            )}

            {visibleComponent === "search" && (
                <div className="max-w-sm px-4 mx-auto mb-24 md:max-w-2xl mt-14">
                    <h1 className="mb-3 text-4xl font-bold text-white font-inter">
                        Search
                    </h1>
                    <div className="flex items-center gap-2 p-2 mb-8 bg-opacity-25 bg-input-50 rounded-xl">
                        <div className="w-4 h-4">
                            <SearchIcon/>
                        </div>
                        <input
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="w-full text-base text-white bg-transparent outline-none font-inter bg-func-50"
                            type="search"
                            placeholder="Search"
                        />
                    </div>
                    {searchResults ? (
                        searchResults.length !== 0 ? (
                            <>
                                <h2 className="mb-6 text-2xl font-bold text-white font-inter">
                                    Search results for {searchText}
                                </h2>
                                <div className="flex flex-wrap justify-between gap-x-3 gap-y-5">
                                    {searchResults.map((searchResult) => (
                                        <div
                                            onClick={() =>
                                                openGamePage(searchResult.slug.current, products)
                                            }
                                            key={searchResult.slug.current}
                                            href={`/product/${searchResult.slug.current}`}
                                        >
                                            <div
                                                className="relative md:h-[483px] md:w-[310px] w-[166px] h-64 overflow-hidden rounded-2xl"
                                                key={searchResult.slug}
                                            >
                                                <img
                                                    src={urlForImage(searchResult.image)}
                                                    alt={searchResult.name}
                                                    className="absolute h-64 md:h-[483px] -translate-x-1/2 min-w-min left-1/2 object-contain"
                                                />
                                                <div
                                                    className="absolute bottom-0 w-full p-2 md:p-5 bg-func-50 opacity-95 h-fit">
                                                    <div className="text-xl text-white md:text-2xl font-inria">
                                                        {searchResult.name.length > substrValue
                                                            ? `${searchResult.name.substring(
                                                                0,
                                                                substrValue
                                                            )}...`
                                                            : searchResult.name}
                                                    </div>
                                                    <div
                                                        className="text-sm font-normal text-white uppercase md:text-lg font-inria opacity-40">
                                                        {searchResult.genre}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div
                                className="absolute text-xl text-center text-white -translate-x-1/2 -translate-y-1/2 md:text-2xl top-1/2 left-1/2 font-inria">
                                Nothing found
                            </div>
                        )
                    ) : (
                        <></>
                    )}
                </div>
            )}

            {visibleComponent === "wishlist" && (
                <div className="max-w-sm px-4 mx-auto mb-24 md:max-w-2xl mt-14">
                    <h1 className="mb-8 text-4xl font-bold text-white">Wishlist</h1>
                    <div className="flex flex-wrap justify-between gap-x-3 gap-y-5">
                        {wishlist.renderWishlist ? (
                            wishlist.wishlistItems.map((item) => (
                                <div
                                    onClick={() => openGamePage(item.slug.current, products)}
                                    key={item.slug.current}
                                >
                                    <div className="relative h-[483px] w-[310px] overflow-hidden rounded-2xl">
                                        <img
                                            src={urlForImage(item.image)}
                                            alt={item.name}
                                            className="absolute h-[483px] -translate-x-1/2 min-w-min left-1/2 object-contain"
                                        />
                                        <div className="absolute bottom-0 w-full p-2 bg-func-50 opacity-95 h-fit">
                                            <div className="text-xl text-white font-inria">
                                                {item.name.length > substrValue
                                                    ? `${item.name.substring(0, substrValue)}...`
                                                    : item.name}
                                            </div>
                                            <div
                                                className="text-sm font-normal text-white uppercase font-inria opacity-40">
                                                {item.genre}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <>
                                <div
                                    className="absolute text-xl text-center text-white -translate-x-1/2 -translate-y-1/2 md:text-2xl top-1/2 left-1/2 font-inria">
                                    Nothing added yet
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}

            {visibleComponent === "settings" && (
                <div className="max-w-sm px-4 mx-auto md:max-w-2xl my-14">
                    <h1 className="mb-8 text-4xl font-bold text-white font-inter">
                        Settings
                    </h1>
                    <div
                        onClick={() => openWishlist(products)}
                        className="flex items-center gap-4 px-4 py-2 mb-4 text-xl text-white uppercase border border-white border-solid w-fit font-inria rounded-2xl"
                    >
                        Wishlist
                        <div className="w-4">
                            <LinkArrow/>
                        </div>
                    </div>
                    {menuItems.map((menuItems, i) => (
                        <div
                            onClick={() => handleVision(menuItems.link)}
                            key={i}
                            className="flex items-center gap-4 px-4 py-2 mb-4 text-xl text-white uppercase border border-white border-solid w-fit font-inria rounded-2xl"
                        >
                            {menuItems.name}
                            <div className="w-4">
                                <LinkArrow/>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {visibleComponent === "contact" && <Contact/>}

            {visibleComponent === "privacy" && <Privacy/>}

            <div
                className=" menu fixed bottom-0 z-50 flex items-center justify-center w-full h-20 mx-auto -translate-x-1/2 left-1/2 bg-func-50/95 backdrop-opacity-75 backdrop-blur-xl">
                <div className="flex gap-20 px-4 pb-2 mx-auto mt-4 md:gap-40">
                    <div onClick={() => handleVision("topGames")}>
                        <div className="w-12">
                            <div className="w-6 h-6 mx-auto mb-1">
                                <GamepadIcon
                                    color={
                                        visibleComponent === "topGames" ? "#00FF0C" : "#323232"
                                    }
                                />
                            </div>
                            <div
                                style={{color: navigationColors.topGames}}
                                className="text-sm text-center font-inria text-opacity-40"
                            >
                                Top
                            </div>
                        </div>
                    </div>
                    <div onClick={() => handleVision("search")}>
                        <div className="w-12">
                            <div className="w-6 h-6 mx-auto mb-1">
                                <SearchIcon
                                    color={visibleComponent === "search" ? "#00FF0C" : "#323232"}
                                />
                            </div>
                            <div
                                style={{color: navigationColors.search}}
                                className="text-sm text-center font-inria text-opacity-40"
                            >
                                Search
                            </div>
                        </div>
                    </div>
                    <div onClick={() => handleVision("settings")}>
                        <div className="w-12">
                            <div className="w-6 h-6 mx-auto mb-1">
                                <SettingsIcon
                                    color={
                                        visibleComponent === "settings" ? "#00FF0C" : "#323232"
                                    }
                                />
                            </div>
                            <div
                                style={{color: navigationColors.settings}}
                                className="text-sm text-center font-inria text-opacity-40"
                            >
                                Settings
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const products = await client.fetch(`*[_type == "product"]`);

    const query = `*[_type == "mainSlider"]{
    "sliderName": sliderName,
    "products": products[]->{
      name,
      image,
      slug,
      genre,
    }
  }`;

    const promoted = await client.fetch(query);

    return {
        props: {
            products,
            promoted,
        },
    };
}
