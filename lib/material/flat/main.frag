
	gl_FragColor.rgb = uColor;
	gl_FragColor.a = uOpacity;

	#pragma glslify: import('../../augment/fog/fog-main.frag')
