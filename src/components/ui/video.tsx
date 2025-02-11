export default function Video({ src }: { src: string }) {
  return (
    <video className="w-full h-full" loop autoPlay muted>
      <source src={src} type="video/mp4"/>
    </video>
  );
}