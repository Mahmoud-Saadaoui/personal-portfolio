'use client';
import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css'

const Projects = ({ images }) => {
  return (
    <Gallery>
      <div className='flex flex-wrap items-center'>
        {images.map((image, index) => (
          <Item
            key={image.id}
            original={image.url}
            thumbnail={image.thumbnailUrl || image.url}
            width={800} 
            height={450} 
          >
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src={image.url}
                alt='Project image'
                className='object-contain cursor-pointer border-r-2 border-slate-300 w-16 h-16' 
                width={0} 
                height={0} 
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