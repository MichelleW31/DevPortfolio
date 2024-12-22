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
        src={'./src/assets/my_logo_purple.png'}
        style={{ height: 'auto', width: `${width}px` }}
      />
    </>
  );
};

export default Logo;
