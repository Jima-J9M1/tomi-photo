export default function Video({ src, className }: { src: string, className?:string }) {
  return (
    <video className={`w-full h-full ${className}`} loop autoPlay muted>
      <source src={src} type="video/mp4"/>
    </video>
  );
}