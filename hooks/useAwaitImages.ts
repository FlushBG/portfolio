import { useEffect, useState } from 'react';

type UseAwaitImagesHook = {
  areAllImagesLoaded: boolean;
};

const useAwaitImages = (): UseAwaitImagesHook => {
  const [areAllImagesLoaded, setAreAllImagesLoaded] = useState<boolean>(true);

  useEffect(() => {
    let imagesLoaded = 0;
    const allImages = document.getElementsByTagName('img');
    const onImageLoaded = () => {
      imagesLoaded++;
      if (imagesLoaded === allImages.length) {
        setAreAllImagesLoaded(true);
      }
    };

    for (let i = 0; i < allImages.length; i++) {
      const image = allImages.item(i) as HTMLImageElement;
      const clonedImage = new Image();
      clonedImage.onload = onImageLoaded;
      clonedImage.src = image.src;
    }
  }, []);

  return { areAllImagesLoaded };
};

export default useAwaitImages;
