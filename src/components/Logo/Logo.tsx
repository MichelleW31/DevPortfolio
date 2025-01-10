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
          'https://mydevportfolioimages.s3.us-west-1.amazonaws.com/my_logo_mid_purple.png'
        }
        style={{ height: 'auto', width: `${width}px` }}
      />
    </>
  );
};

export default Logo;
