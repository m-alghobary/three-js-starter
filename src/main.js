import * as THREE from 'three';
import init from './core/init';
import { loop } from './core/utils';

const { scene, camera, renderer, controls } = init();

loop(() => {
	// Update Orbital Controls
	controls?.update();

	// Render
	renderer.render(scene, camera);
});
