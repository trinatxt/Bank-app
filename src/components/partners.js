// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Partners = () => {
//   const navigate = useNavigate();

//   const handleSelect = () => {
//     navigate('/exchangepop1');
//   };

//   return (
//     <div className='max-w-[1000px] m-auto py-16 px-4'>
//       <h3 className='text-5xl md:text-5xl font-bold mb-8 text-center'>Partners</h3>
//       <div className='flex flex-wrap justify-center gap-4'>
//         <div className='relative border border-gray-300 rounded-lg overflow-hidden w-[calc(33.33% - 8px)] bg-white'>
//           <div className='h-[200px] relative'>
//             <img className='object-cover object-center w-full h-full' src="https://images.prismic.io/ascendaloyaltycorp/1196df89-40a5-4964-80a2-f2ea9d665a1a_Ascenda_Clients_ThaiAirways.png?auto=compress,format" alt="" />
//           </div>
//           <button onCLick={handleSelect} className='bg-grey text-black px-3 py-1 rounded shadow mt-4 w-full block'>Select</button>
//         </div>
//         <div className='relative border border-gray-300 rounded-lg overflow-hidden w-[calc(33.33% - 8px)] bg-white'>
//           <div className='h-[200px] relative'>
//             <img className='object-cover object-center w-full h-full' src="https://images.prismic.io/ascendaloyaltycorp/355b34f2-28b4-476b-abdf-43fb2820d728_Ascenda_Clients_ChinaEastern.png?auto=compress,format" alt="" />
//           </div>
//           <button className='bg-grey text-black px-3 py-1 rounded shadow mt-4 w-full block'>Select</button>
//         </div>
//         <div className='relative border border-gray-300 rounded-lg overflow-hidden w-[calc(33.33% - 8px)] bg-white'>
//           <div className='h-[200px] relative'>
//             <img className='object-cover object-center w-full h-full' src="https://images.prismic.io/ascendaloyaltycorp/1681d7eb-95ab-4794-99c4-7055fc8faf50_Krisflyer_logo.png?auto=compress,format" alt="" />
//           </div>
//           <button className='bg-grey text-black px-3 py-1 rounded shadow mt-4 w-full block'>Select</button>
//         </div>
//         <div className='relative border border-gray-300 rounded-lg overflow-hidden w-[calc(33.33% - 8px)] bg-white'>
//           <div className='h-[200px] relative'>
//             <img className='object-cover object-center w-full h-full' src="https://images.prismic.io/ascendaloyaltycorp/983ecf9a-e6ce-4821-8945-49135b4e9a97_Ascenda_Clients_BritishAirways.png?auto=compress,format" alt="" />
//           </div>
//           <button className='bg-grey text-black px-3 py-1 rounded shadow mt-4 w-full block'>Select</button>
//         </div>
//         <div className='relative border border-gray-300 rounded-lg overflow-hidden w-[calc(33.33% - 8px)] bg-white'>
//           <div className='h-[200px] relative'>
//             <img className='object-cover object-center w-full h-full' src="https://images.prismic.io/ascendaloyaltycorp/ae2e97a5-f0c7-44bd-acb4-2fbd55874796_Ascenda_Clients_EVAair.png?auto=compress,format" alt="" />
//           </div>
//           <button className='bg-grey text-black px-3 py-1 rounded shadow mt-4 w-full block'>Select</button>
//         </div>
//         <div className='relative border border-gray-300 rounded-lg overflow-hidden w-[calc(33.33% - 8px)] bg-white'>
//           <div className='h-[200px] relative'>
//             <img className='object-cover object-center w-full h-full' src="https://images.prismic.io/ascendaloyaltycorp/daa15fe7-e0ec-4800-8e77-1359b82764d5_7.png?auto=compress,format" alt="" />
//           </div>
//           <button className='bg-grey text-black px-3 py-1 rounded shadow mt-4 w-full block'>Select</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Partners;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ExchangePop1 from '../pages/exchangepop1';

// const Partners = () => {
//   const navigate = useNavigate();

//   const airlines = [
//     { name: 'airline 1', code: 'GJP'},
//     { name: 'airline 2', code: 'IPM'},
//     { name: 'airline 3', code: 'EAG'},
//     { name: 'airline 4', code: 'QAQ'},
//     { name: 'airline 5', code: 'CXC'},
//     { name: 'airline 6', code: 'MR'},
//   ]

//   const handleClick = (airlineCode) => {
//     navigate('/exchangepop1', { state: { airlineCode } });
//   };

//   return (
//     <main>
//       <div className='max-w-[1000px] m-auto py-16 px-4'>
//         <h3 className='text-5xl md:text-5xl font-bold mb-8 text-center'>Partners</h3>
//         <div className='flex flex-wrap justify-center gap-4'>
//             <div key={index} className='relative border border-gray-300 rounded-lg overflow-hidden w-1/2 bg-white'>
//               <div className='h-[200px]'>
//                 <img className='object-cover object-center w-full h-full' src="https://images.prismic.io/ascendaloyaltycorp/1196df89-40a5-4964-80a2-f2ea9d665a1a_Ascenda_Clients_ThaiAirways.png?auto=compress,format" alt="" />
//               </div>
//               <button onClick={() => handleClick(airlines[0].code)} className='bg-grey text-black px-3 py-1 rounded shadow mt-4 w-full block'>Select</button>
//             </div>
//           </div>
//           <div className='relative border border-gray-300 rounded-lg overflow-hidden w-1/2 bg-white'>
//             <div className='h-[200px] relative'>
//               <img className='object-cover object-center w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSamH5Wazg3aAikdVh0e0fwfXqu69FEnn7w&s" alt="" />
//             </div>
//             <button onClick={() => handleClick(airlines[1].code)} className='bg-grey text-black px-3 py-1 rounded shadow mt-4 w-full block'>Select</button>
//             </div>
//           <div className='relative border border-gray-300 rounded-lg overflow-hidden w-1/2 bg-white'>
//             <div className='h-[200px] relative'>
//               <img className='object-cover object-center w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFHyESjuOBihZSV5Rc-SRb04bqHR2lTerjQw&s" alt="" />
//             </div>
//             <button className='bg-grey text-black px-3 py-1 rounded shadow mt-4 w-full block' onClick={handleClick}>Select</button>
//           </div>
//           <div className='relative border border-gray-300 rounded-lg overflow-hidden w-1/2 bg-white'>
//             <div className='h-[200px] relative'>
//               <img className='object-cover object-center w-full h-full' src="data:image/png;base64,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" alt="" />
//             </div>
//             <button className='bg-grey text-black px-3 py-1 rounded shadow mt-4 w-full block' onClick={handleClick}>Select</button>
//           </div>
//           <div className='relative border border-gray-300 rounded-lg overflow-hidden w-1/2 bg-white'>
//             <div className='h-[200px] relative'>
//               <img className='object-cover object-center w-full h-full' src="data:image/png;base64,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" alt="" />
//             </div>
//             <button className='bg-grey text-black px-3 py-1 rounded shadow mt-4 w-full block' onClick={handleClick}>Select</button>
//           </div>
//           <div className='relative border border-gray-300 rounded-lg overflow-hidden w-1/2 bg-white'>
//             <div className='h-[200px] relative'>
//               <img className='object-cover object-center w-full h-full' src="data:image/png;base64,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" alt="" />
//             </div>
//             <button className='bg-grey text-black px-3 py-1 rounded shadow mt-4 w-full block' onClick={handleClick}>Select</button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Partners;


import React from 'react';
import { useNavigate } from 'react-router-dom';

const Partners = () => {
  const navigate = useNavigate();

  const airlines = [
    { name: 'Airline 1', code: 'GJP', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcYncI4xoCPougudgM6Kqva_tSjkAfXG7qQ&s' },
    { name: 'Airline 2', code: 'IPM', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSamH5Wazg3aAikdVh0e0fwfXqu69FEnn7w&s' },
    { name: 'Airline 3', code: 'EAG', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFHyESjuOBihZSV5Rc-SRb04bqHR2lTerjQw&s' },
    { name: 'Airline 4', code: 'QAQ', imageUrl: 'data:image/png;base64,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' },
    { name: 'Airline 5', code: 'CXC', imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAC5CAMAAADXsJC1AAAAY1BMVEX///+8m2q7mWe6l2S4lWC7mmjm2sq4lF63k1zTvqLCpHnYxa3MtJLVwafFqYH07+i1j1b49fHr4tXh08HJr4rez7q+nm/p39H6+PXQuZrHrIXw6eDk18bMtJP28u3Dpnyyi05tUjgUAAAK+0lEQVR4nO2cabOrKBCGXUhc467BJcn5/79y6AaNIqjn1p2qmap+vsy5BllemqZZHMchCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIL4fzDWSf969Y9kqt6Ocy+tCXNMGCUHSe7/RgU1nv9q7lXKAub7nuf7PgsC5v1wc8I88ueELIxbS3Z9anr6biWJ3pbndF94jpaSdbrK9kte31dU+cUM1xXqAu/mujcf8FwgNObCX6EPv3oC+A/zzZJEYWN83gSigHDaPc9C9iX4tBea8LQUAeRdwNYZumltt+Y9vAmgdX4Q94novlcX+BZB7r6PMrBPmmY+vHVjmamoyPcHY1Hifc/wyzvAXrjdsDeEznvNdFIvzK0/jmzuNk/lyBqrQe0q00ErfS9ZWpZHgRcYBGmx2sGgLL5K4d+ea6hX5Lt+Zirsc3P9xPA8vkGt4+zjMWxBaEq0Jg9d/2H/uRN5xGnTNOkQM4bdGGR2ATc5o4ZBtBEg/xR7QVAPz185gErIIfphbyNCENf/GDTNPLMgjcgolnkO2LvheFzth82KJULgRS9e9cqy6+M8ZeoO9dgl/exaWTG0h/f6WQlve/Eu1wiNLt5X2CZI6n2zwZcNmW4Khs5hNp8uBPE2BsQjdsnuoCZQusHNlbvGxOho3tuHOTNWLJKuN96pekUQZ/CsXn0mkQVYf9cEET4YXwjsEs7pQGm/P0smaLHpuwADH+8cjhTE9Tp92B4I4i6CPLGoQycop8J9dWbWQ0Yi/WxwMhLRmbnsykQNbsr77J9DMbs2KkGEf9EqcCDIbRGEm7VfMYkUsXcwrvaCOPfA0oI1VWBqjgk0JVOvtb7BdkEQdE6ev1Xk0pBx2Flfivay8ePZE8XufhJK0VseB9HYkwfz+Rfw6rfO8AOGEHrFRL7eMPoY7G1EvGQh6JiOfIjoR1EX0RWeMSJ2jBbi5Ggi9nAOQMs2NXNHZzUl0VE7twqCZA4qsjWrzBKHbHwI+KXDWUZ4XREi81DI9janMAminPVRzCqiG9HM6CDFzNu3Duseos/X9pkUxBldrMLqtSsWwkH88MCnQlczYdYvfSr5YhRkOvVNGFpYliNaHXBYG8cWzIB6fypBnBwUua1m9QuC8EFkyI4mvt6TYwVmI8uEsJt2sRGnHvOOkp2vG9SkFRjtE3V3t89mQWTk5oZL3HfuVCuxkvCCIz1gQST7ubMGZyan6vDgbEAk9oGggbbEjMMPowZ/+2wRxOEx+u252icWUiZxIPxOdrjXAbXuvvU3pjEOGXSZ+uje0P5SEKOFoJlp8+5XEId//FXQfDZkGnYeK7hL75cwZowLFOOQwXDuUBA5ZK4secbAOmRqtp+pVoIIEUCRQFbv1IfAEPNtk+lSnq9sVawJzfKZBTm1EOlUr8RluT2afhj2ODaCOAMqgm7hVJA39CI7qhJEqHPe0KOBqVbGIYMR8KEPkaHKYX/MeXlWW4IQQm/kVhAcCC6Dci44VahTaHci0Ils+flmCbWMgpzPMg6z7xZqwIaFWTqUSmuAJojzQkWaS6E7brvYo2eoyNeRgnkyQ1rjkLmfxiEydD9eVyrQU/gG6Z6mOFsXxOmxc4ZLgVlkKwqAsbtqKv7TMAgOItXD7q8uhPeSt3njQ5mOnsNOEOeBijQfi83u9kNsoXuvmUQGafdtNFkIxuWHPtVRy//TTYK5JoZJH0vZ7fftBXESuQF7RRBun2pwl3qdM4SFhhxNFiIN5GQ44CaBcXn31kZmbnbRsLTT224UxGlDuUdyYfk/2swRQ7GtF3CNq3CDheBW1vGMDjS+OVnp6mHpw+SS8OHeA5oEcabgUJDbapBgP5nmU8jgthkhOIZ209/eQmos3T89n+G46e4P2jCstGKBj7fzwDgODBuVRkGkl7cv/9f9jELrG7gqKNuuc3JjbAsWsrZm3ssjlAvzx8huOLjXS7x3zwxOTS7UVkFTmaLRGBZiZkHUsueKIGi5Xqd3Crg8fc0N/bRraLzJr2xdeQ5x6bBqlIdbrEsq2Grn+dQwc3tyPNJicQ09x8cITzuMC/XeM2bgVL5FEHB42wViJ9quH3bBPuaup8DudhESKOenz6qqnlMyYEVFxa+dVDllxuTgZn7XdTeGZ2fGuZg3YHgiRRfHnjoPMwZ+g97hM0J9oyD+brulRGva1gKy3fkLGURv28pxr86TR7u+PIb2ruz7KOpOHiAueCw070jUNxxh7k0mCzLzjG3fTho900JlMkxhVaii2wW50b0rsduHF0+mNYddOkBfcW98vOSA1xxY19Q26+ItnJXKdH5jXnIIQ4Ke6Yxi5QYLGWVXFtsprIUrAeHXzie8IhDo/l8+Dl+r+WN014f/Xpy2FwfLphVVG6VNk/bJ/eTtfHqIhH3ytExhfKonpDUrsjPdcr4eonUDPptmlSp162PayjbOj6dFqPX9kOefXA8hCIIgCIIgCIIgCIIgiHP4rzeeDG/8MpNN8qvv/r6i51nWH7zl9RzmrVkeNVHa9bjDVwZD02RNM+BnIXnyadLGxWTvx+e17BpWQzRo12h43/c3bVuxbD9D+unVkdTYZyI3ddBQNn3vqR/4AyqQqpcrKD+TW5G5p6oj68BT8RIma4ckb533lUun56gDkZe65Zrj3v87xhun8FHcVNyFbFjZsXg4TiJ1y4tlA7ksxKva6WojKnfX91m5eOe93H6oClGS2nTtxH/V7nCJZwg8K9QZRFvkTvuD6eqcO3XxdLisw0fU4C7Po3pnbKrH3xHkJvu2V7fKOnkmUS63QqfvBvlKhPXfT7iHoR1FeqI5XN+Z5nAfry7mvi+WYxcOZaivVD7qSuN8jIzpu+UAsy6EBDIl3HdUZQhBxv598NnVL9gKcp+b/5iPpc4FGYv9p3WZ6c4HCnL/UfvtK0EctnxcMi6WEcr2oSDZchaDgkjc7/cXqVOJx3/HQtx4qut6GuRFzHS+/3EP1LnRWpCwrypl5GtxmmB3cvjAnzUTQUGS+TyqCh9VpY6Z63C+a/AoVFZ5IE2lhgfF0vSVIPdwOdor0b/+5nNMO258n6bprgTJ5hs1VaC6fSNIU7fqDHYtCHySulUkiZKihXc3j3nYVPViTVXY18ncqUmgrkD3c4+UTA6TOmyr1/d4fiWIUwdXPiT7Ldsh85qv7z/nA059yIyrvxceweaWwiiGxUvYPi82RfHw9cyWY34cMkvPP5k8D03mm9DvQA4TIUi7KmstiFP5Zx8w/gFbQZ5hpBVs8SHvjSBOVKztNSlEZmnRTttTYy7cQsnmY/61D3HAe9WyjGz++a4qArPMcpC6EUQk+sWx9kW87SwTK82HuctXgowogkyXf51EizVbC9LiO1Go3QIHQZzqR6kkBcHXIDVXn4sO6mpYqq4UoFMdlrH3FaQCU/vNOf81uBqqqfo+p5QXh6Llu9P2K0hVpHCain+PRcNFQAB/NqP+fwDgmMkUh9svE3kBWiQ/0rbuhTDGCrv+DrOPmud5hwUmN6XwAwTh3vw1wrc6Fbx++I3Qn8DrNJ2EFFWfzufVbewOw2LNefSKlL2WySsdMnnQ/056+BuT1W720UKAMvICEWyNUZN8JeHt6wWtqZuHyCN/QA7y69Y8jod0aVr9uQ3D3PNj/0pAkb6pQbAxej2Uibw/8dD8wVE/QRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRDEf4N/AJa6iMTvJ6CwAAAAAElFTkSuQmCC' },
    { name: 'Airline 6', code: 'MR', imageUrl: 'data:image/png;base64,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'},
  ];

  const handleClick = (airlineCode) => {
    navigate('/exchangepop1', { state: { airlineCode } });
  };

  return (
    <main>
      <div className='max-w-[1000px] m-auto py-16 px-4'>
        <h3 className='text-5xl md:text-5xl font-bold mb-8 text-center'>Partners</h3>
        <div className='flex flex-wrap justify-center gap-4'>
          {airlines.map((airline, index) => (
            <div key={index} className='relative border border-gray-300 rounded-lg overflow-hidden w-1/3 bg-white'>
              <div className='h-[200px]'>
                {/* Use the specific airline image */}
                <img className='object-cover object-center w-full h-full' src={airline.imageUrl} alt={airline.name} />
              </div>
              <button onClick={() => handleClick(airline.code)} className='bg-grey text-black px-3 py-1 rounded shadow mt-4 w-full block'>Select</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Partners;
