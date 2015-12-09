[back to index](./)
# Glam.FogAugment
## [material/augment/fog](https://github.com/glamjs/glam/tree/master/lib/material/augment/fog)

Augment a material with fog. The further away the mesh is, the more it turns the color of the fog.

## Example

```js
import FlatMaterial from "glam/lib/material/flat"
import FogAugment   from "glam/lib/material/augment/fog"

var material = FlatMaterial({
		color: [1,0,0]
	})
	.use(FogAugment, {
		color : [1,1,1],
		near : 10,
		far: 100
	})
	// Additional augments can be added here

// Then to update the fog properties

material.shading.fog.near = 30
material.shading.fog.color[0] *= 0.8
```

### Live Examples

* [Flat Bunny with Fog Augment][example-fog] ([source][source-fog])

[example-fog]: http://glamjs.github.io/glam/examples/02-fog/
[source-fog]: https://github.com/glamjs/glam/blob/master/examples/02-fog/fog.js

## Supported Materials

* [FlatMaterial](./material-flat.md)
* [LitMaterial](./material-lit.md)

## API

### `fogProperties`/`material.shading.fog` Object

| property | type       | description |
| -------- | ---------- | ----------- |
| near     | number     | How near from the camera the fog should start affecting the object |
| far      | number     | How far from the camera the fog should start affecting the object |
| color    | RGB array  | The color of the fog. |


### FogAugment( MaterialFactory|material, fogProperties  ) => material

The FogAugment is easiest to use with the `material.use( FogAugment, fogProperties )` interface.
However it is perfectly valid to use as a function. It returns a factory function that creates
the original type of material with your augments.

| arg             | type     | description |
| --------------- | -------- | ----------- |
| MaterialFactory | function | A function that creates a material |
| fogProperties   | object   | What the fog should look like, {near, far, color} }

or

| arg             | type     | description |
| --------------- | -------- | ----------- |
| material        | object   | An existing configured material to use. |
| fogProperties   | object   | What the fog should look like, {near, far, color} }


```
var fogProperties = { color : [1,0,0], near: 10, far: 100 }
var flatRedFog = FogAugment( FlatMaterial, fogProperties )
var material = flatRedFog()
```

```
var flatProperties = { color : [0,0,1] }
var fogProperties = { color : [1,0,0], near: 10, far: 100 }
var flatBlue = FlatMaterial(flatProperties)
var flatBlueWithRedFog = FogAugment( flatBlue, fogProperties )
var material = flatBlueWithRedFog()
```