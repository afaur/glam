import FromQuaternion      from 'gl-mat4/fromQuat'
import CreateMat4          from 'gl-mat4/create'
import RotationTranslation from 'gl-mat4/fromRotationTranslation'
import Multiply            from 'gl-mat4/multiply'
import Scale               from 'gl-mat4/scale'
import Identity            from 'gl-mat4/identity'
import Copy                from 'gl-mat4/copy'
import UpdateEuler         from './update-euler'

var rotationTranslation = CreateMat4()
var scale               = CreateMat4()

export default function updateTransform( transform ) {
	
	if( transform.flags.autoUpdate ) {
		
		UpdateEuler         ( transform )
		RotationTranslation ( rotationTranslation, transform.quaternion, transform.position )
		Identity            ( scale )
		Scale               ( scale, scale, transform.scale )
		Multiply            ( transform.local, rotationTranslation, scale )
		
		// TODO - Pull this out somewhere else to allow nested objects
		Copy                ( transform.global, transform.local )
		
	}
}