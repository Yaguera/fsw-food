import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
  return (
    <Image
      {...props}
      width={0}
      height={0}
      sizes="100vh"
      quality={100}
      className="h-auto w-full object-contain"
    />
  );
};

export default PromoBanner;
