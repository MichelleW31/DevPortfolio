// BASE MODULES

// CUSTOM MODULES
import styles from './Bar.module.scss';

interface BarProps {
  bgColor: string;
  width: string;
}

const Bar = ({ bgColor, width }: BarProps) => {
  return (
    <section
      className={
        bgColor === '#5448A1' || bgColor === '#5448a1'
          ? styles.BarContainer
          : styles.BarContainerWhite
      }
      style={{ width: width, backgroundColor: bgColor, height: '25px' }}
    ></section>
  );
};

export default Bar;
