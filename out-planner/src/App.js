
import './App.css';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';



const clothing = [
  {
  description: 'Michael Kors Blue Dress Shirt',
  type: "top",
  dressCode: 'formal',
  imageUrl:
  'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/19226370_fpx.tif?$browse$&wid=376&fmt=webp',
  },
  {
  description: 'Calvin Klein Steel Gray Dress Shirt',
  type: "top",
  dressCode: 'formal',
  imageUrl:
  'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/19714862_fpx.tif?bgc=255,255,255&wid=400&qlt=90,0&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=webp',
  },
  {
  description: 'Michael Kors Pink Dress Shirt',
  type: "top",
  dressCode: 'formal',
  imageUrl:
  'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/21014523_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp',
  },
  {
  description: 'Michael Kors White Dress Shirt',
  type: "top",
  dressCode: 'formal',
  imageUrl:
  'https://slimages.macysassets.com/is/image/MCY/products/8/optimized/10468918_fpx.tif?$browse$&wid=376&fmt=webp',
  },
  {
  description: 'Alfani Short Sleeve Shirt',
  type: "top",
  dressCode: 'casual',
  
  imageUrl:
  'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/20929261_fpx.tif?$browse$&wid=376&fmt=webp',
  },
  {
  description: 'Tommy Hilfiger white Short Sleeve Shirt',
  type: "top",
  dressCode: 'casual',
  imageUrl:
  'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/8789631_fpx.tif?$browse$&wid=376&fmt=webp',
  },
  {
  description: 'Wrangler Graphic T-shirt',
  type: "top",
  dressCode: 'sport',
  imageUrl:
  'https://slimages.macysassets.com/is/image/MCY/products/8/optimized/21436348_fpx.tif?$browse$&wid=376&fmt=webp',
  },
  {
  description: 'Adidas red T-shirt',
  type: "top",
  dressCode: 'sport',
  imageUrl:
  'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/13336822_fpx.tif?$thumb$&wid=376',
  },
  {
  description: 'Nike Giannis Basketball Sneakers',
  type: "shoes",
  dressCode: 'sport',
  imageUrl:
  'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/21824750_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp',
  },
  {
  description: 'Adidas High Top Sneakers',
  type: "shoes",
  dressCode: 'sport',
  
  imageUrl:
  'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/18588060_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp',
  },
  {
  description: 'Sperry Brown Shoes',
  type: "shoes",
  dressCode: 'casual',
  imageUrl:
  'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/524862_fpx.tif?$thumb$&wid=376',
  },
  {
  description: 'Sperry Blue Shoes',
  type: "shoes",
  dressCode: 'casual',
  imageUrl:
  'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/21650286_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp',
  },
  {
  description: 'Casual White Pants',
  type: "bottom",
  dressCode: 'casual',
  imageUrl:
  'https://n.nordstrommedia.com/id/sr3/0e7486a9-93bb-47d9-947c-5a4052ff4157.jpeg?h=365&w=240&dpr=2',
  },
  {
  description: 'Dress Blue Pants',
  type: "bottom",
  dressCode: 'formal',
  imageUrl:
  'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/8353081_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp',
  },
  {
  description: 'Slim Fit Stretch Khaki Pants',
  type: "bottom",
  dressCode: 'casual',
  
  imageUrl:
  'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/10067433_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp',
  },
  {
  description: 'Brown Dress Pants',
  type: "bottom",
  dressCode: 'formal',
  imageUrl:
  'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/10067390_fpx.tif?$thumb$&wid=376',
  },
  {
  description: 'Black Dress Pants',
  type: "bottom",
  dressCode: 'formal',
  imageUrl:
  'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/11786133_fpx.tif?$browse$&wid=376&fmt=webp',
  },
  {
  description: 'Adidas Track Pants',
  type: "bottom",
  dressCode: 'sport',
  imageUrl:
  'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0d80911fe0e24f8eb67fac3800e8bee0_9366/Tiro_21_Sweat_Pants_Black_GM7336_21_model.jpg',
  },
  {
  description: 'Adidas Jogger Pants',
  type: "bottom",
  dressCode: 'sport',
  imageUrl:
  'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f5bf3559e3514ebc8afeac840145abf8_9366/tiro-21-sweat-pants.jpg',
  },
  ];



function App() {

  const casual = () => {

    let casualTops1 = []
    let casualBottoms2 = []
    let casualShoes3 = []
    clothing.map((clothes) => {

    if(clothes.dressCode === 'casual' && clothes.type === 'top') {
      casualTops1.push(clothes.imageUrl)
     let  randomIndex = Math.floor(Math.random() * casualTops1.length);
     let randomImage =  casualTops1[randomIndex]
     console.log(randomImage)
     document.getElementById('image1').src = randomImage
    }
    if(clothes.dressCode === 'casual' && clothes.type === 'bottom') {
      casualBottoms2.push(clothes.imageUrl)
     let  randomIndex2 = Math.floor(Math.random() * casualBottoms2.length);
     let randomImage2 =  casualBottoms2[randomIndex2]
     console.log(randomImage2)
     document.getElementById('image2').src = randomImage2
    }
    if(clothes.dressCode === 'casual' && clothes.type === 'shoes') {
      casualShoes3.push(clothes.imageUrl)
     let  randomIndex3 = Math.floor(Math.random() * casualShoes3.length);
     let randomImage3 =  casualShoes3[randomIndex3]
     console.log(randomImage3)
     document.getElementById('image3').src = randomImage3
  }
  }
  )
  }

  const sport = () => {

    let sportTops1 = []
    let sportBottoms2 = []
    let sportShoes3 = []
    clothing.map((clothes) => {

    if(clothes.dressCode === 'sport' && clothes.type === 'top') {
      sportTops1.push(clothes.imageUrl)
     let  randomIndex = Math.floor(Math.random() * sportTops1.length);
     let randomImage =  sportTops1[randomIndex]
     console.log(randomImage)
     document.getElementById('image1').src = randomImage
    }
    if(clothes.dressCode === 'sport' && clothes.type === 'bottom') {
      sportBottoms2.push(clothes.imageUrl)
     let  randomIndex2 = Math.floor(Math.random() * sportBottoms2.length);
     let randomImage2 =  sportBottoms2[randomIndex2]
     console.log(randomImage2)
     document.getElementById('image2').src = randomImage2
    }
    if(clothes.dressCode === 'sport' && clothes.type === 'shoes') {
      sportShoes3.push(clothes.imageUrl)
     let  randomIndex3 = Math.floor(Math.random() * sportShoes3.length);
     let randomImage3 =  sportShoes3[randomIndex3]
     console.log(randomImage3)
     document.getElementById('image3').src = randomImage3
  }
  }
  )
  }

  const formal = () => {

    let formalTops1 = []
    let formalBottoms2 = []
    let formalShoes3 = []
    clothing.map((clothes) => {

    if(clothes.dressCode === 'formal' && clothes.type === 'top') {
      formalTops1.push(clothes.imageUrl)
     let  randomIndex = Math.floor(Math.random() * formalTops1.length);
     let randomImage =  formalTops1[randomIndex]
     console.log(randomImage)
     document.getElementById('image1').src = randomImage
    }
    if(clothes.dressCode === 'formal' && clothes.type === 'bottom') {
      formalBottoms2.push(clothes.imageUrl)
     let  randomIndex2 = Math.floor(Math.random() * formalBottoms2.length);
     let randomImage2 =  formalBottoms2[randomIndex2]
     console.log(randomImage2)
     document.getElementById('image2').src = randomImage2
    }
    if(clothes.dressCode === 'formal' && clothes.type === 'shoes') {
      formalShoes3.push(clothes.imageUrl)
     let  randomIndex3 = Math.floor(Math.random() * formalShoes3.length);
     let randomImage3 =  formalShoes3[randomIndex3]
     console.log(randomImage3)
     document.getElementById('image3').src = randomImage3
  }
  }
  )
  }
  
return (
    <div className="App">

      

      <h5>OUTFIT PLANNER</h5>
      <h6>FIND WHAT TO WEAR</h6>
      <h5>Fashion Styles / Dress Code</h5>
      
      <Button variant="primary" size="sm" onClick={() => casual()}>Casual</Button>
      <br/>
      <br/>
      
      <Button variant="primary" size="sm" onClick={() => sport()}>Sport</Button>
      <br/>
      <br/>
      
      <Button variant="primary" size="sm" onClick={() => formal()}>Formal</Button>
      <br/>
      <br/>
      
        <h6>TOP</h6>
        <img id='image1'
      />

        <h6>BOTTOM</h6>
        <img id='image2'
      
      />
        <h6>SHOES</h6>
        <img id='image3'
      
      />
      

     {/*{clothing.map( clothing => (

      

      <img 
      src= {clothing.imageUrl}
      /> */}




     {/* ))} */}

    
      



      
      
      
    </div>
  );
}

export default App;
