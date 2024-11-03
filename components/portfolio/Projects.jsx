'use client';
import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css'

const Projects = ({ images }) => {
  return (
    <Gallery>
      <div className='flex flex-wrap items-center space-x-2 space-y-3'>
        {images.map((image, index) => (
          <Item
            key={image.id}
            original={image.url}
            thumbnail={image.thumbnailUrl || image.url}
            width={1600} 
            height={900} 
          >
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src={image.url}
                alt='Project image'
                className='object-cover h-10 w-10 cursor-pointer' 
                width={40} 
                height={40} 
                sizes='100vw'
                priority={true}
              />
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
}

export default Projects;