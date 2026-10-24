import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useReducedMotion } from 'framer-motion'
import { MathUtils, Vector2 } from 'three'

const ParticleField = () => {
  const groupRef = useRef(null)
  const pointerRef = useRef(new Vector2())
  const elapsedRef = useRef(0)
  const reduceMotion = useReducedMotion()
  const positions = useMemo(() => {
    const count = 420
    const points = new Float32Array(count * 3)
    const goldenAngle = Math.PI * (3 - Math.sqrt(5))

    for (let index = 0; index < count; index += 1) {
      const y = 1 - (index / (count - 1)) * 2
      const radius = Math.sqrt(1 - y * y)
      const angle = goldenAngle * index
      const offset = index * 3

      points[offset] = Math.cos(angle) * radius
      points[offset + 1] = y
      points[offset + 2] = Math.sin(angle) * radius
    }

    return points
  }, [])
  const colors = useMemo(() => {
    const styles = getComputedStyle(document.documentElement)
    return {
      primary: styles.getPropertyValue('--accent-primary').trim(),
      secondary: styles.getPropertyValue('--accent-secondary').trim(),
    }
  }, [])

  useEffect(() => {
    const updatePointer = (event) => {
      pointerRef.current.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1,
      )
    }

    window.addEventListener('pointermove', updatePointer, { passive: true })
    return () => window.removeEventListener('pointermove', updatePointer)
  }, [])

  useFrame((_, delta) => {
    if (!groupRef.current || reduceMotion) return

    elapsedRef.current += delta
    groupRef.current.rotation.y = MathUtils.damp(
      groupRef.current.rotation.y,
      pointerRef.current.x * 0.25 + elapsedRef.current * 0.04,
      1.5,
      delta,
    )
    groupRef.current.rotation.x = MathUtils.damp(
      groupRef.current.rotation.x,
      pointerRef.current.y * 0.15,
      1.5,
      delta,
    )
  })

  return (
    <group ref={groupRef} rotation={[0.1, 0, 0]} scale={1.7}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color={colors.primary}
          size={0.012}
          sizeAttenuation
          transparent
          opacity={0.75}
          depthWrite={false}
        />
      </points>
      <mesh scale={1.005}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color={colors.secondary}
          wireframe
          transparent
          opacity={0.08}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}

const HeroCanvas = () => {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(
    () => typeof window === 'undefined' || !('IntersectionObserver' in window),
  )
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '100px' },
    )
    observer.observe(container)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 -z-10"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 1.25]}
        frameloop={reduceMotion || !isVisible ? 'demand' : 'always'}
        gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
        fallback={null}
      >
        <ParticleField />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base" />
    </div>
  )
}

export default HeroCanvas
