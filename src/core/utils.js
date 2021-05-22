import { WebGLRenderer, Color, PerspectiveCamera, Clock } from 'three';

/**
 * Make and Configure a WebGLRenderer
 */
function makeRenderer(clearColor = '#21282a') {
	const renderer = new WebGLRenderer();
	renderer.setSize(innerWidth, innerHeight);
	renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
	renderer.setClearColor(new Color(clearColor), 1);
	document.body.prepend(renderer.domElement);

	return renderer;
}

/**
 * Make and Configure a PerspectiveCamera
 */
function makeCamera(pos = [0, 0, 3]) {
	const camera = new PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 100);
	camera.position.set(pos[0], pos[1], pos[2]);

	return camera;
}

/**
 * update camera & renderer aspect ratio on window resize
 */
function resizeHandler(renderer, camera) {
	// Update camera
	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();

	// Update renderer
	renderer.setSize(innerWidth, innerHeight);
	renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
}

/**
 * Run the render loop
 */
function loop(renderCallbac) {
	const clock = new Clock();
	const tick = () => {
		const elapsedTime = clock.getElapsedTime();

		renderCallbac(elapsedTime);

		// Call tick again on the next frame
		requestAnimationFrame(tick);
	};

	tick();
}

export { makeRenderer, makeCamera, resizeHandler, loop };
