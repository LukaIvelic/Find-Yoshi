
import * as THREE from 'three'

export default function BackgroundHandler() {

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.top = "0";
    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.add(new THREE.AxesHelper(50));
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 800);
    camera.lookAt(new THREE.Vector3(0, 0, 0))

    var geometry = new THREE.PlaneGeometry(window.innerWidth * 100, window.innerHeight * 100);
    var material = new THREE.MeshToonMaterial({ color: "0xffffff", side: THREE.DoubleSide });
    const plane = new THREE.Mesh(geometry, material);

    scene.add(plane);

    
    const light = new THREE.PointLight(0xffffff, 0.2, 100, 0.05);
    scene.add(light);
    function recapture(event){
        event.preventDefault();
        var x = (event.clientX / window.innerWidth) * 2 - 1;
        var y = -(event.clientY / window.innerHeight) * 2 + 1;

        let vector = new THREE.Vector3(x, y, 0.5);
        vector.unproject(camera);
        let dir = vector.sub(camera.position).normalize();
        let distance = -camera.position.z / dir.z;
        let pos = camera.position.clone().add(dir.multiplyScalar(distance));
        light.position.copy(pos);
        renderer.render(scene, camera);
    }

    renderer.render(scene, camera)

    renderer.domElement.onmousemove = recapture;
    window.addEventListener('resize', function() {
    var WIDTH = window.innerWidth,
      HEIGHT = window.innerHeight;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
  });

    const backgroundHandler = <>
        {/* <div onMouseMove={recapture} className='background-handler-div'></div> */}
    </>;

    return (backgroundHandler);
}
