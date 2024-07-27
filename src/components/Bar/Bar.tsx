// BASE MODULES

// CUSTOM MODULES
import styles from './Bar.module.scss';

interface BarProps {
  width: string;
}

const Bar = ({ width }: BarProps) => {
  return (
    <section
      className={styles.BarContainer}
      style={{ width: width, backgroundColor: '#5448A1', height: '25px' }}
    ></section>
  );
};

export default Bar;
