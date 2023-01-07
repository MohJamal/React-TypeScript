type ButtonProps = {
  variant: "primary" | "secondary";
};

export const CustomButton = ({ variant }: ButtonProps) => {
  return <button className={`class-with-${variant}`}>Label</button>;
};
