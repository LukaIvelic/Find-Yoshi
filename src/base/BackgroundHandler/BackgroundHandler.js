
import * as THREE from 'three'

export default function BackgroundHandler() {

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.zIndex = "-1";
    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.add(new THREE.AxesHelper(50));
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 800);
    camera.lookAt(new THREE.Vector3(0, 0, 0))

    var material = new THREE.MeshToonMaterial({color: 0xffffff});
    var geometry = new THREE.SphereGeometry(5);
    var box = new THREE.Mesh(geometry, material);
    // scene.add(box);

    geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);
    material = new THREE.MeshToonMaterial({ color: "0xffffff", side: THREE.DoubleSide });
    const plane = new THREE.Mesh(geometry, material);

    scene.add(plane);

    
    const light = new THREE.PointLight(0xffffff, 0.2, 100, 0.05);
    scene.add(light);
    function recapture(mouse){
        light.position.set(mouse.clientX - 1275, -mouse.clientY + 650, 0);
        renderer.render(scene, camera);
    }

    renderer.render(scene, camera)

    const backgroundHandler = <>
        <div onMouseMove={recapture} className='background-handler-div'></div>
    </>;

    return (backgroundHandler);
}
