// BASE MODULES

// CUSTOM MODULES
import styles from './TechnologyIcon.module.scss';

interface TechnologyIconProps {
  techName: string;
}

const TechnologyIcon = ({ techName }: TechnologyIconProps) => {
  return (
    <section className={styles.TechnologyIconContainer}>{techName}</section>
  );
};

export default TechnologyIcon;
