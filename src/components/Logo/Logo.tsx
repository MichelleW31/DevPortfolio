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
        src={
          'https://github.com/MichelleW31/DevPortfolio/blob/main/src/assets/my_logo_purple.png?raw=true'
        }
        style={{ height: 'auto', width: `${width}px` }}
      />
    </>
  );
};

export default Logo;
