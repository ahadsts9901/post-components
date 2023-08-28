import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// profile images

import profile1 from "./assets/profile 1.png"
import profile2 from "./assets/profile 2.jpg"
import profile3 from "./assets/profile 3.jpg"

// post images

import image1 from "./assets/post 1.avif"
import image2 from "./assets/post 2.avif"
import image3 from "./assets/post 3.avif"

function Header() {
  return <div className='header w-[100vw] flex justify-left items-center gap-[1em] p-[1em_2em] bg-[#3b5998] text-[#fff]'>
    <img src="https://avatars.githubusercontent.com/u/120649081?v=4" className='w-[3em] h-[3em] rounded-[100px]' />
    <h1 className='text-[1.5em] bg-[#3b5998]'>React Component Posts</h1>
  </div>
}


function Post(props) {
  return <div className='bg-[#fff] w-[100%] h-[fit-content] p-[1.5em] flex flex-col justify-right items-center gap-[1.5em]'>
    <div className='flex items-start gap-[1em] w-[100%] h-[fit-content]'>
      <img src={props.profileImg} className='w-[5em] h-[5em] object-cover rounded-[100px]' />
      <div className='flex flex-col justify-right items-start'>
        <h2 className='text-[2em] font-bold'>{props.name}</h2>
        <p className='text-[#999]'>{props.time}</p>
      </div>
    </div>
    <div className='flex flex-col justify-right items-center gap-[1em]'>
      <p>{props.text}</p>
      <img src={props.postImg} className='w-[100vw] h-[100vw] object-cover' />
    </div>
    <div className='grow flex justify-center items-center gap-[1em] w-[100%]'>
      <button className='flex justify-center items-center gap-[1em] p-[0.5em]'><i class="bi bi-hand-thumbs-up"></i>Like</button>
      <button className='flex justify-center items-center gap-[1em] p-[0.5em]'><i class="bi bi-chat-square"></i>Comment</button>
      <button className='flex justify-center items-center gap-[1em] p-[0.5em]'><i class="bi bi-share-fill"></i>Share</button>
    </div>
    <div className='w-[100%] p-[0.5em] bg-[#888]'></div>
  </div>
}

ReactDOM.render(<Header />, document.querySelector('#header'));

ReactDOM.render(<div className="className='w-[100%] h-[fit-content] flex flex-col justify-right items-center">

  <Post

    name="Inzamam Malik"
    time="19-Aug-2023 12:44 pm"
    profileImg={profile3}
    postImg={image1}
    text="Indulging in a burger is a journey that tantalizes taste buds with every bite. A masterpiece of simplicity and flavor, it's a timeless delight loved by many. A succulent patty, whether beef, chicken, or veggie, rests between soft buns, promising a medley of textures and tastes. Crisp lettuce, juicy tomatoes, and zesty condiments add freshness and zest. The burger isn't just a meal; it's an experience – a mingling of sizzling grill marks and savory aromas. From classic cheeseburgers to gourmet creations, it's a canvas for culinary innovation. So, venture into a world where comfort meets creativity, and savor the iconic delight that is the burger."

  />

  <Post

    name="Abdul Ahad"
    time="15-Jan-2022 3:34 pm"
    profileImg={profile1}
    postImg={image2}
    text="Photography captures life's fleeting moments, freezing them into eternal art. Through the lens, we unveil hidden stories, colors, and emotions. Each click is a unique perspective, a glimpse into a world often overlooked. From breathtaking landscapes to candid portraits, photography bridges cultures and languages, speaking a universal visual language. It's not just about the equipment; it's about vision and timing. As technology advances, photography evolves, empowering anyone to become a storyteller. With every frame, we paint with light, weaving tales that resonate without words. Photography isn't just a hobby; it's a way to celebrate life's beauty, one snapshot at a time."

  />

  <Post

    name="Bilal Zafar"
    time="04-Jan-2021 6:12 pm"
    profileImg={profile2}
    postImg={image3}
    text="In the bustling tapestry of nature, trees stand as silent guardians of the Earth's vitality. With roots firmly grounded and branches reaching for the sky, they paint the landscape with hues of green, offering shade, shelter, and sustenance. Beyond their ecological significance—purifying air, preventing soil erosion—trees symbolize resilience and growth. Seasons dance through their leaves, whispering stories of transformation. Ancient witnesses to time's passage, trees evoke a sense of tranquility, inviting contemplation beneath their boughs. As we marvel at their majesty, let's remember our responsibility to nurture and protect these gentle giants, ensuring a harmonious coexistence."

  />

</div>, document.querySelector('#posts'));