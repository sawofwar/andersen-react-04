const BigHeading = ({
  headingText,
  style,
}: {
  headingText?: string;
  style?: { marginTop: string; opacity?: number };
}) => {
  return <h1 style={style}>{headingText}</h1>;
};

export default BigHeading;
