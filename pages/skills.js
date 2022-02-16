import Head from "next/head";
import styles from "../styles/Skills.module.scss";
import WhiteNavbar from "../components/Navbar/index.white";
import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import TrailingPointerCircle from "../components/TrailingPointerCircle";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import {AnaglyphEffect} from "three/examples/jsm/effects/AnaglyphEffect";
import {EffectComposer} from "three/examples/jsm/postprocessing/EffectComposer";
import {RenderPass} from "three/examples/jsm/postprocessing/RenderPass";
import {MaskPass} from "three/examples/jsm/postprocessing/MaskPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import {FilmPass} from "three/examples/jsm/postprocessing/FilmPass";
import {CopyShader} from "three/examples/jsm/shaders/CopyShader";
import {FilmShader} from "three/examples/jsm/shaders/FilmShader";
import {RGBShiftShader} from "three/examples/jsm/shaders/RGBShiftShader"
import { Material, Texture, AnimationMixer, AnimationAction } from "three";

export default function Skills() {
  const sectionBG = useRef();
  const switchOFF = useRef();
  const canvasWrapper = useRef();
  const canvasAnim = useRef();
  useEffect(() => {
    // Three Webgl Animation
    // Canvas
    const canvas = canvasAnim.current;

    // Scene
    const scene = new THREE.Scene();

    // Lights
    const pointLight = new THREE.AmbientLight(0xfff, 100);
    pointLight.position.x = 2;
    pointLight.position.y = 1;
    pointLight.position.z = 0.5;
    scene.add(pointLight);

    // const pointLightHelper = new THREE.PointLightHelper(pointLight, 2.4);
    // scene.add(pointLightHelper);

    // const axesHelper = new THREE.AxesHelper( 5 );
    // scene.add( axesHelper );

    // Loading Model
    const objs = [];
    const loader = new GLTFLoader();
    loader.load("/scene.gltf", (gltf) => {
      const mixer = new AnimationMixer(gltf.scene);
      for (const anim of gltf.animations) {
        mixer.clipAction(anim).play();
      }
      gltf.scene.scale.set(0.4, 0.4, 0.4);
      gltf.scene.rotation.copy(new THREE.Euler(0, (3 * Math.PI) / 2, 0));
      gltf.scene.position.set(2, 1, 0);
      scene.add(gltf.scene);
      objs.push({ gltf, mixer });
    });

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 1.95;
    camera.position.y = 0.9;
    camera.position.z = 0.6;
    scene.add(camera);

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /**
     * Post processing Effect
     */
    const composer = new EffectComposer(renderer);
    composer.addPass( new RenderPass(scene, camera) );
    const effect = new ShaderPass(FilmShader);
    effect.uniforms['time'].value = 0.0;
    effect.uniforms['nIntensity'].value = 0.5;
    effect.uniforms['sIntensity'].value = 0.5;
    effect.uniforms['sCount'].value = 200;
    effect.uniforms['grayscale'].value = 0;

    composer.addPass( effect );

    const effect1 = new ShaderPass(RGBShiftShader);
    effect1.uniforms['amount'].value = 0.0015;
    effect1.renderToScreen = true;
    composer.addPass( effect1 );


    /**
     * AnaglyphEffect
     */
    // const effect = new AnaglyphEffect(renderer);
    // effect.setSize(sizes.width, sizes.height);


    /**
     * Animate
     */
    const clock = new THREE.Clock();
    const tick = () => {
      objs.forEach(({ mixer }) => {
        mixer.update(clock.getDelta());
      });
      let change = clock.getDelta();
      effect.uniforms['time'].value = change*100;
      effect.uniforms['nIntensity'].value = 5;
      effect.uniforms['sIntensity'].value = 0;
      effect.uniforms['sCount'].value = 200;
      effect.uniforms['grayscale'].value = 0;
      composer.render(scene, camera);
      window.requestAnimationFrame(tick);
      // const elapsedTime = clock.getElapsedTime();

      // Update objects
      // sphere.rotation.y = 0.5 * elapsedTime;

      // Update Orbital Controls
      // controls.update()

      // Render
      // renderer.render(scene, camera);

      // Call tick again on the next frame
      // window.requestAnimationFrame(tick);
    };

    tick();

    const tl = gsap.timeline();
    tl.from(switchOFF.current, {
      duration: 0.8,
      width: 0,
      height: 0,
      ease: "power4.out(1.7)",
    });
    tl.to(switchOFF.current, {
      duration: 0.8,
      attr: { src: "/switchON.svg" },
    });
    tl.to(switchOFF.current, {
      duration: 0.4,
    });
    tl.to(sectionBG.current, {
      duration: 0.4,
      width: "100vw",
      height: "100vh",
      backgroundColor: "#000",
      ease: "power4.out(1.7)",
    }).to(switchOFF.current, {
      // Remove the div after animation is done
      width: 0,
      height: 0,
    });
    tl.from(canvasAnim.current, {
      width: 0,
      height: 0
    })
    tl.from(camera.position, {
      duration: 2,
      z: 20,
      ease: "power4.out(1.7)",
    })
    // tl.from(canvasAnim.current, {
    //   duration: 4,
    //   width: 0,
    //   height: 0,
    //   ease: "power4.out(1.7)",
    // })
    // tl.to(camera.rotation, {
    // })
    // console.log(objs)
  }, []);
  return (
    <>
      <Head>
        <title>Skills | AmreshSinha 👋</title>
        <meta name="description" content="Passionate Developer!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section ref={sectionBG}>
        <TrailingPointerCircle />
        <WhiteNavbar />
        <div className={styles.switchWrapper}>
          <img
            src="/switchOFF.svg"
            alt="switch"
            className={styles.switchSize}
            ref={switchOFF}
          />
          <canvas ref={canvasAnim}></canvas>
        </div>
      </section>
    </>
  );
}
