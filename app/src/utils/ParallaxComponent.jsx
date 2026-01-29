import { useParallax } from "react-scroll-parallax"

export default function ParallaxComponent({children, className}) {
  const parallax = useParallax({speed:-12})

  return <div ref={parallax.ref} className={className}>
    {children}
  </div>;
}
