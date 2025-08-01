export default function ImageLink({ src, alt }: { src: string; alt: string }) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className="h-10 w-10 object-cover hover:scale-120 hover:animate-x-wiggle"
      />
    </div>
  );
}
