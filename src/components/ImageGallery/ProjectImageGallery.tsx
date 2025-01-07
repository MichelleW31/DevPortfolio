// BASE MODULES
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

// CUSTOM MODULES
import { IImage } from '../../types';
import { isDesktop } from '../../utilities/responsiveness';
import useWindowSize from '../../hooks/windowSize';
import styles from './ProjectImageGallery.module.scss';

interface ProjectImageGalleryProps {
  images: IImage[];
}

const ProjectImageGallery = ({ images }: ProjectImageGalleryProps) => {
  const windowSize = useWindowSize();

  const desktopImageView = images.map((image, index) => {
    return (
      <img src={image.original} key={index} className={styles.DesktopImage} />
    );
  });

  return (
    <>
      {isDesktop(windowSize) ? (
        <section className={styles.ImageGalleryContainer}>
          <ImageGallery
            items={images}
            autoPlay={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
          />
        </section>
      ) : (
        <section className={styles.ImageGalleryContainer}>
          <ImageGallery
            items={images}
            autoPlay={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
          />
        </section>
      )}
    </>
  );
};

export default ProjectImageGallery;
