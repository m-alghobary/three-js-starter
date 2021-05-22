import * as THREE from 'three';
import init from './core/init';
import { loop } from './core/utils';

const enableControls = true;

const { scene, camera, renderer, controls } = init({
	withControls: enableControls,
});

loop(() => {
	// Update Orbital Controls
	if (enableControls) controls.update();

	// Render
	renderer.render(scene, camera);
});
