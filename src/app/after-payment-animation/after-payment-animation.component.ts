import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import * as THREE from "three";

@Component({
  selector: 'app-after-payment-animation',
  standalone: true,
  imports: [],
  templateUrl: './after-payment-animation.component.html',
  styleUrl: './after-payment-animation.component.css'
})
export class AfterPaymentAnimationComponent {


  router = inject(Router);



  ngOnInit(): void {
    this.createThreeJsBox();
    setTimeout(()=>{
      this.router.navigate(['/scanner'])
    },2000);

  }

  createThreeJsBox(): void {

    // scene setup ----------------------------------------------------------------------

    const canvas = document.getElementById('canvas-box');
    const scene = new THREE.Scene();

    if (!canvas) {return;}
    const renderer = new THREE.WebGLRenderer({canvas: canvas,});

    renderer.setClearColor(0xFFFFFF, 1); //0xFFFFFF
    renderer.setSize(window.innerWidth, window.innerHeight);
    const canvasSizes = {
      width: window.innerWidth/2,
      height: window.innerHeight/2,
    };

    //light
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    //camera
    const camera = new THREE.PerspectiveCamera(
      75,canvasSizes.width/canvasSizes.height, 0.01, 100
    );
    camera.position.z = 30;
    scene.add(camera);

    // responsive
    window.addEventListener('resize', () => {
      canvasSizes.width = window.innerWidth;
      canvasSizes.height = window.innerHeight;

      camera.aspect = canvasSizes.width / canvasSizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(canvasSizes.width, canvasSizes.height);
      renderer.render(scene, camera);
    });


    // Geometry ---------------------------
    const geometry = new THREE.BoxGeometry(2,2,2);
    const materialT = new THREE.MeshStandardMaterial({color: 0x0000ff });
    const box = new THREE.Mesh(geometry, materialT);
    scene.add(box);


    // Animate ------------------------------

    const clock = new THREE.Clock();

    const animateGeometry = () => {
      const elapsedTime = clock.getElapsedTime();

      box.rotation.x = -elapsedTime;
      box.rotation.y = -elapsedTime;
      box.rotation.z = -elapsedTime;

      renderer.render(scene, camera);

      window.requestAnimationFrame(animateGeometry);
    };

    //const loader = new GLTFLoader();

    animateGeometry();
  }
}
