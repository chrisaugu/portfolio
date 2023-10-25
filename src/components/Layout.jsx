import React, {useEffect, useState} from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from 'swr';

import Seo from "./Seo"
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({title, children}) => {
    const router = useRouter();
    
    const useMousePosition = () => {
        const [mousePosition, setMousePosition] = useState({ x: null, y: null });
        const [scrollPos, setScrollPos] = useState({ x: null });

        const updateMousePosition = ev => {
            setMousePosition({ x: ev.pageX, y: ev.pageY });
        };

        const updateScrollPos = ev => {
            setScrollPos({ x: scrollY });
        };

        useEffect(() => {
            window.addEventListener("mousemove", updateMousePosition);

            return () => window.removeEventListener("mousemove", updateMousePosition);
        }, []);

        useEffect(() => {
            window.addEventListener("scroll", updateScrollPos);

            return () => window.removeEventListener("scroll", updateScrollPos);
        }, []);

        // window.addEventListener('mousemove', (e) => {
        //     cursor.style.left = e.pageX + 'px';
        //     cursor.style.top = e.pageY + 'px';
        //     cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY));
        //     // console.log(e)
        //   });
        //   window.addEventListener('scroll', () => {
        //     const fromTop = cursor.getAttribute('data-fromTop');
        //     cursor.style.top = scrollY + parseInt(fromTop) + 'px';
        //     console.log(scrollY);
        //   });
        //   window.addEventListener('click', () => {
        //     if (cursor.classList.contains('click')) {
        //       cursor.classList.remove("click");
        //       void cursor.offsetWidth; // trigger a DOM reflow
        //       cursor.classList.add("click");
        //     } else {
        //       cursor.classList.add("click");
        //     }
        //   });

        //   const [x, setX] = useState(null)
        //   const [y, setY] = useState(null)

        //   // We do not expose a way to update mouseX and mouseY
        //   // This will be handled within the hook itself
        //   return { mouseX: x, mouseY: y }

        return mousePosition;
    };

    const useMove = () => {
        const [state, setState] = useState({x: 0, y: 0})

        const handleMouseMove = e => {
            e.persist()
            setState(state => ({...state, x: e.clientX, y: e.clientY}))
        }
        return {
            x: state.x,
            y: state.y,
            handleMouseMove,
        }
    }

    const Hook = () => {
        const {x, y, handleMouseMove} = useMove();

        return (
            <div className="mouseArea" onMouseMove={handleMouseMove}>
                Hook
                <div className="mouseInfo">
                    The current mouse position is ({x}, {y})
                </div>
            </div>
        )
    }

    const CustomCursor = () => {
        const { x, y } = useMousePosition();
        const hasMovedCursor = typeof x === "number" && typeof y === "number";

        // const domRef = React.createRef();
        // const el = findDOMNode(domRef);

        return (
            <div className={`cursor`} style={{left: x, top: y}}>
                {/*{hasMovedCursor
                  ? `Your cursor is at ${x}, ${y}.`
                  : "Move your mouse around."}*/}
            </div>
        )
    }

    // const fetcher = (url) => fetch(url).then(res => res.json());
    // const { data, error } = useSWR('/api/navigation', fetcher)

    // if (error) return <div>Failed to load</div>
    // if (!data) return <div>Loading...</div>

    return (
        <>
            {/* <CustomCursor/>*/}

            {/*<Hook/>*/}

            <Seo title={title}/>

            <Header/>

            <main className="bg-white dark:bg-gray-800 w-full overflow-hidden">
                <div className="container mx-auto">
                    {children}
                </div>
                <div className={`xl:max-w-[1280px] w-full`}>
                    {/*<Testimonials />*/}
                </div>
            </main>

            <Footer />
        </>
    );
}
export default Layout;