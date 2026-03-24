export default function ProfilePic({ src, alt }: { src: string; alt: string }) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className="mx-5 h-30 w-30 rounded-full object-cover lg:h-50 lg:w-50"
      />
    </div>
  );
}
