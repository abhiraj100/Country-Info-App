import { useContext, useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
// import { useOutletContext } from 'react-router-dom';
// import { ThemeContext } from '../contexts/ThemeContext';
import { useTheme } from '../hooks/useTheme';
// import { useWindowSize } from '../hooks/useWindowSize';


export default function Home() {
  const [query, setQuery] = useState('');
  // const [isDark] = useOutletContext();
  // const [isDark] = useContext(ThemeContext);
  const [isDark] = useTheme();

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});

  // useEffect( () => {
  //   window.addEventListener('resize', () => {
  //     // console.log("hiii");
  //     // console.log(window.innerHeight, window.innerWidth);
  //     // setWindowWidth(window.innerWidth);
  //     setWindowSize({width: window.innerWidth, height: window.innerHeight});
  //   })
  // })
  // const windowSize = useWindowSize();

  return (
    <main className={`${isDark? 'dark': ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {/* <h1 style={{textAlign: "center"}}>{windowSize.width} X {windowSize.height}</h1> */}
      {query === 'unmount' ? '' : <CountriesList query={query} />}
    </main>
  )
}




// import { useState } from "react";
// import CountriesList from "./CountriesList";
// import SearchBar from "./SearchBar";
// import SelectMenu from "./SelectMenu";

// const Home = () => {
//   const [query, setQuery] = useState('');

//   return (
//     <main>
//       <div className="search-filter-container">
//         <SearchBar setQuery={setQuery} />
//         <SelectMenu />
//       </div>
//       <CountriesList query={query} />
//     </main>
//   );
// };

// export default Home;
