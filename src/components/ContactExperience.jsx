import { Environment, OrbitControls } from '@react-three/drei'

import { Canvas } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
import { Computer } from './Models/Computer-optimized'


const ContactExperience = () => {
  return (
  <Canvas camera={{ position: [0, 15, 25], fov: 45 }} shadows={{ enabled: true, type: THREE.PCFSoftShadowMap }}>
    <ambientLight intensity={0.5} color='#fff4e6'/>
    <directionalLight position={[10, 20, 10]} intensity={2.5} color='ffd9b3'/>
    <directionalLight position={[-8, 15, 8]}  castShadow
    intensity={2.5} color='ffd9b3'/>
    <spotLight
    position={[-5,5,5]}
    angle={0.15}
    penumbra={1}
    intensity={1}
    castShadow
    />
    <OrbitControls
   enableZoom={false}
    minPolarAngle={Math.PI/5}
    maxPolarAngle={Math.PI/2}
    />
    

    <group scale={[1,1,1]}>
        <mesh receiveShadow position={[0,-1.5,0]} rotation={[-Math.PI/2,0,0]}>
        <planeGeometry args={[30,30]}/>
        <meshStandardMaterial  color="#4b1333"/>
        </mesh>
        </group>

        <group scale={0.08} position={[0,-1.5,-2]} castShadow >{/*This adjust the pov of the mode , the scale */}

        <Computer/>

        </group>

    </Canvas>
  )
}

export default ContactExperience

