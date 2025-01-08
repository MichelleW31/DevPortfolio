// BASE MODULES
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

// CUSTOM MODULES
import { IImage } from '../../types';
import styles from './ProjectImageGallery.module.scss';

interface ProjectImageGalleryProps {
  images: IImage[];
}

const ProjectImageGallery = ({ images }: ProjectImageGalleryProps) => {
  return (
    <section className={styles.ImageGalleryContainer}>
      <ImageGallery
        items={images}
        autoPlay={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
      />
    </section>
  );
};

export default ProjectImageGallery;
