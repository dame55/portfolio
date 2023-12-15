import React from "react";
import Navitor from "../components/Navitor";
import './Styles.css';
import ana from './ana.jpg';

function About() {
  return (
    <div className="About">
      
<Navitor/>
      <div className="about-card">

       <h1>About</h1>
<ul>
<li>I am constantly honing my skills and pushing the boundaries of what is possible in frontend development. I love the challenge of finding unique and creative solutions to design problems, and I am always eager to explore new technologies and techniques to improve my work.

I believe that a great frontend developer not only has strong technical skills but also a keen eye for design and a deep understanding of user behavior. I strive to create seamless and intuitive interfaces that not only look great but also provide a smooth and enjoyable user experience.</li>
<li>
I am confident that with my dedication, passion, and creativity, I will be able to make a significant impact in the field of frontend development. I am excited about the opportunities that lie ahead and look forward to continuing to grow and excel in this dynamic and exciting industry.
</li>
<li>
  
In my free time, I enjoy working on personal projects and experimenting with different design concepts and coding languages. I am always looking for ways to expand my knowledge and stay at the forefront of the ever-evolving world of frontend development.
</li>
</ul>
<div className="ico">
    <a href="https://www.facebook.com/dameteferi1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAURJREFUWEftl08rBlEUxn+PhSVLG16+AqXsrMla+QaiKEvlGyiyk62tLyBbC4WyFdZS/ixsZPFoytS46b3zNmPcxZ3luWee+5vnnHs7IxJ7lBgPGShWkdYcsj0ELAAzgIFX4AV4lnQaAynXWwGyvQTsAZO/bSxpuDMg22vAfr8NOwOyPQ1cxL6+S6ADYDUloHNgNgC6BLaAK0mfMdhwvVFT274FpgLROUnXg4K0csps3wMTweY9SY//BfQAjGeg0gHbO4Ebm8BIECsuyPdK7EnSYd0S1m5q20XuR13hSt6ZpMW673UBdCRpPSWgbUm7KQGtSDppHagQtD0fCB8DY0Fs+Xv0KMM3kt7+BCgUtX0H9FK6hzJQ39LnksVORnYoOwTNfqVzD9XooQ1gNBzQJFUHtJjMj/Xa89BAqg2SM1DMvOQc+gL1ypEl+gFvAgAAAABJRU5ErkJggg==" alt=""/></a>
    <a href="https://twitter.com/dame_kumsa"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAApxJREFUWEftlk2IzlEUxn+Pr41IzEKhjK/sSJMsmGwmZDG+hpJEylBKGWVEGCEfJWXFwrCQsjGJsbGw9LGTj7JQSBYkG0nh6Oi+9b4z//d/7x0fjXpPvb3/us8957nnnHvuI4aZaZjxoUEoVpFGhv55hsxsFrALWATMBZ4AD4BeSf79y8xsFDBb0vNqkoNKZmYTgVZJfbHTDFw3s/3AQWB0nb2bgafAUmAnsErSixih3cBJoEPSrVRSZrYRuJyKB04BR4Fxkj5W9hVl6BqwFvgOrJN0OxbEzJqAZ8CEGDas3wM+AVOBNkmfywjdAFYGwA/gHNAj6Uu9YGbWAVxNJFOBvQeWSHoZK1l3SGU17g3QBdyU5CRrzMy8xHsyCDmJZZJeDdxTVLJW4G4d5+9Cn1ypPpmZXQC2ZhDqlnS2CF9EaATgfbQ6EsBT7if130xgYQahHZIupRJqAx4B18P1zIiTDG2XdCeVkGenHXgNzEgOkQdskfQ4ldAJYG+e/yy0X/EmST5WBllRD80DHsJfkyZ9ktbXO0Lha29mh4EDWedOB3dK6s0i5GAz2xbG+/j0WFGkT+fm6skcnUMVgJktD4+kp3dDNFQa4LiknjJoXYFmZguA+2lxklDezC43PgyJUCjbeaAzKVwctEmSz7ZSK5WwZubrpwGXJL9jFyW5aItakqY2sxbA9c58YHHUay2g33tQ0teUfamERgLbgUPApBTHAeMl2iLpW+qesqZ2zTsN8EF5DJiT6tSnRlCdRyT5d7LVEDKzFUH3NANTAH/5c83fQG/gId3QoqfDM7EPWAOMzWDj4t3V5pkydRnzV1ayMUF+uM7xpp4OTA4kXem5DvJ/f7X7Jb2NBUtZT2rqFEd/CtMgFMtkI0P/XYZ+AlpdvCVeY08JAAAAAElFTkSuQmCC" alt=""/></a>
    <a href="https://www.linkedin.com/in/dame-teferi-32789826b/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAghJREFUWEftlztoVFEQhr9PsBA7sQgiNmq0EQQbUWyMnaDGxgdYWfnCwkKF4IOglgoWQrAQGwkINtqIiCaNGGzEB2hlLwoiFoKMnHBXlrtnvbu6N7uQnXLP3DPf/mdmzhkZMHPAeBgCVZ1IVqGI2AScAkaBd8AN9UPVZr1YbwGKiM3Ac2BZU4AvwA71Yy+C/m2PHNAd4HDmoyn1ZD+AXgJJpbLNqmP9ALoLHMwEvq0e7wfQFmAGWNoU/FuRQ+8XHCgFjIgElapsA/C2qLI3dcOk/RdXY4yIEWAN8BX4pP6sUjlX9ruAc5kPJ9QXxZGuAlLyl+28OhcRh4AJYH2Twy/gCXBTfdwOLAeUelDqRWUbVx8VQGuBXILvAfYCRyuUuK6ezfn0GugpsLPqWIr1A+qDsm83QPvVhxUKdcgy7zanbv8foE6OrLF/uvtSm0h/OAVd0oZ0RE2+f6wbhToFugecUT8Xam4DUu4tz0CNqbN1An0HVqs/moNExIWi6spMR9TpOoHuqy0vhYjYDbQkMHBavVUn0DX1YlmGiNha3I/lpUvq1TqBJtXJDFB6gb7K5FCLfzdJ3Vz264qnbTnGFfVyBmgj8HoIBAwValwdwxzKPT+GVTbfJooxel+mZ0w3xumIWAGcyPik2e1Zpg+tBI5l/GfUNCW3v+3bPBMW7OfFNXX8i6wDp9BvPBA+NFyzxakAAAAASUVORK5CYII="  alt=""/></a>
  </div>
  <div className="anaa">
  <img src={ana} alt="" />
  </div>
  </div>
  </div>
      
  
  );
}

export default About;