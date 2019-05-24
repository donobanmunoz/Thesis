import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import Image1 from '../../dist/images/slide1.jpeg';
import Image2 from '../../dist/images/slide2.jpeg';
import Image3 from '../../dist/images/slide3.jpeg';
import Image4 from '../../dist/images/slide4.jpeg';
import Image5 from '../../dist/images/slide5.jpeg';
import Image6 from '../../dist/images/slide6.jpeg';
import Image7 from '../../dist/images/slide7.jpeg';
import Image8 from '../../dist/images/slide8.jpeg';
import Image9 from '../../dist/images/slide9.jpeg';

const Example = () => (
  <div>
    <Carousel arrows infinite>
      <img src={Image1} />
      <img src={Image2} />
      <img src={Image3} />
      <img src={Image4} />
      <img src={Image5} />
      <img src={Image6} />
      <img src={Image7} />
      <img src={Image8} />
      <img src={Image9} />
    </Carousel>
  </div>
);

export default Example;
