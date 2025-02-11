export default function Video({src}:{src:string}): React.ReactNode {
    return (
    <video width="100%" height="100%" loop autoPlay muted>
      <source src={src} type="video/mp4" />
    </video>
    );
  }