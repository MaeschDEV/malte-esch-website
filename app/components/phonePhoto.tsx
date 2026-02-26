import Image from "next/image";

interface PhonePhotoProps {
  srcLight: string;
  srcDark: string;
  alt: string;
}

const PhonePhoto = ({ srcLight, srcDark, alt }: PhonePhotoProps) => {
  return (
    <div className="w-64">
      <div className="mockup-phone">
        <div className="mockup-phone-camera"></div>
        <div className="mockup-phone-display">
          <Image
            src={srcLight}
            alt={alt}
            width={320}
            height={568}
            className="w-full h-auto block dark:hidden"
          />
          <Image
            src={srcDark}
            alt={alt}
            width={320}
            height={568}
            className="w-full h-auto hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};

export default PhonePhoto;
