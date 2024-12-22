// BASE MODULES

// CUSTOM MODULES

interface LogoProps {
  width: number;
}

const Logo = (props: LogoProps) => {
  const { width } = props;

  return (
    <>
      <img
        src={'./src/assets/projectImages/AARP/AARP_1.png'}
        style={{ height: 'auto', width: `${width}px` }}
      />
    </>
  );
};

export default Logo;
