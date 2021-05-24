import { Scene, GridHelper } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { makeRenderer, makeCamera, resizeHandler } from './utils';

const defaultOptions = {
	withControls: false,
	showGrid: false,
	gridSize: [100, 50],
	cameraPos: [0, 0, 3],
	clearColor: '#21282a',
};

export default function init(options) {
	const _options = { ...defaultOptions, ...options };

	const scene = new Scene();
	const camera = makeCamera(_options.cameraPos);
	const renderer = makeRenderer(_options.clearColor);

	scene.add(camera);
	window.addEventListener('resize', () => resizeHandler(renderer, camera));

	// Orbit controls
	let controls = undefined;
	if (_options.withControls) {
		controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
	}

	// Grid helpers
	if (_options.showGrid) {
		scene.add(new GridHelper(gridSize[0], gridSize[1]));
	}

	return {
		scene,
		camera,
		renderer,
		controls,
	};
}
