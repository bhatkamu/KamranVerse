import { useRef, useEffect, useState } from 'react'

const base = import.meta.env.BASE_URL

const row1Images = [
  `${base}images/IMG_0561_Original.jpg`,
  `${base}images/IMG_0557_Original.jpg`,
  `${base}images/20240128_095435_Original_Original.jpg`,
  `${base}images/FullSizeRender_Original_Original.jpg`,
]
const row2Images = [
  `${base}images/IMG_4666_Original.jpg`,
  `${base}images/1690308803656_Original_Original_Original.jpg`,
  `${base}images/IMG_0471_Original.jpg`,
  `${base}images/E7FC3FBA-71ED-4A4B-802D-AED6730C6102_Original.jpg`,
]

const row3Images = [
  `${base}images/E7FC3FBA-71ED-4A4B-802D-AED6730C6102_Original.jpg`,
  `${base}images/IMG_0247_Original.jpg`,
  `${base}images/IMG_0063_Original.jpg`,
  `${base}images/E7FC3FBA-71ED-4A4B-802D-AED6730C6102_Original.jpg`,
]


function MarqueeRow({ images, direction, offset }: { images: string[]; direction: 'left' | 'right'; offset: number }) {
  const tripleImages = [...images, ...images, ...images]
  const translateX = direction === 'right' ? `translateX(${offset - 200}px)` : `translateX(-${offset - 200}px)`

  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-3"
        style={{
          transform: translateX,
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {tripleImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
            loading="lazy"
            draggable={false}
          />
        ))}
      </div>
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollOffset, setScrollOffset] = useState(0)
  const rafRef = useRef<number>(0)
  const sectionTopRef = useRef(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    sectionTopRef.current = section.offsetTop

    const handleScroll = () => {
      // Throttle with requestAnimationFrame to avoid re-renders on every scroll event
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0
        const offset = (window.scrollY - sectionTopRef.current + window.innerHeight) * 0.3
        setScrollOffset(offset)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-transparent pt-4 sm:pt-6 md:pt-8 pb-10">
      <div className="flex flex-col gap-3">
        <MarqueeRow images={row1Images} direction="right" offset={scrollOffset} />
        <MarqueeRow images={row2Images} direction="left" offset={scrollOffset} />
        <MarqueeRow images={row3Images} direction="right" offset={scrollOffset} />
      </div>
    </section>
  )
}