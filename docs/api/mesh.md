[back to index](./)
# [Mesh](https://github.com/glamjs/glam/tree/master/lib/mesh)

| type          | example |
| ------------- | ------------------------------------- |
| global object | `Glam.Mesh`                           |
| CommonJS ES5  | `var Mesh = require('glam/es5/mesh')` |
| CommonJS ES6  | `var Mesh = require('glam/lib/mesh')` |
| ES6           | `import { Mesh } from 'glam'`         |

The basic object in a scene. It consists of a [geometry](./geometry.md), material, and a transform. The geometry holds all of the buffers of data, while the material contains the shader and description of how to draw the object. The transform contains the positioning information.

## Example

```js
import Mesh       from "glam/lib/mesh"
import Camera     from "glam/lib/camera/perspective"
import Material   from "glam/lib/material/flat"
import Scene      from "glam/lib/scene"
import Geometry   from "glam/lib/geometry"
import Bunny      from 'bunny'

var scene    = Scene()
var camera   = Camera()
var material = Material()
var geometry = Geometry( Bunny )
var mesh     = Mesh( geometry, material )

scene.add( mesh )
material.shading.color = [0.1,0.3,0.4]
mesh.transform.position[1] = -20
scene.render( camera )
```

## API

### Mesh( geometry, material )

The default exported function creates the `mesh` object. 

| arg      | type     | description |
| -------- | -------- | ----------- |
| geometry | geometry | A glam geometry |
| material | material | A glam material |

### `mesh` Object

| property     | type        | description |
| ------------ | ----------- | ----------- |
| meta         | TODO        | TODO        |
| transform    | [transform](./transform)   | The transform information for positioning the mesh in the scene. |
| material     | material    | A glam material |
| geometry     | geometry    | A glam geometry |
