# 3D Note

## Material

**MeshBasicMaterial**

Material is 3D, at least in context of Threejs, *it describes the surface quality of a mesh*.

For example, we may have a sphere and the sphere is exactly always white.

**MeshNormalMaterial**

Debugging purpose, it allows us to see and visualize the faces of the mesh.


**MeshStandardMaterial

When we start to try and replicate more of like, *what is around us with lighting, shading, shadow*. That is where we well is use *MeshStandardMaterial*
So if we don't have a light in our scene, we are not going to be able to see anything. (Try to be more like real life)

## Geometry

**TorusGeometry**

Geometry is just *the actual typology that we are working with*.
Whether it's a sphere or Torus Geometry or BoxGeometry or load models from the web.


## Mesh

Mesh is where we take those two concepts, we take *geometry* and we take *material* and we combine them into a sort of wrapper around those two concepts.

For example, if we want to create 100 BoxGeometry, it's better to use the *same instance*, the same box geometry or the same sphere geometry and then replicate it like clone it many times. Instead of create 100 differentes box geometry.


## Scene

When we combine all that together (Material, Geometry, Mesh), it forms the scence that we are rendering.


## Camera

**PerspectiveCamera**

 Camera in 3D, it's a virtual, almost like a virtual eye piece, or a virtual way of looking at the world.
 For exmaple like we are in helicopter.

 We are seeing two-point perspective.

 **OrthographicCamera**

It just changes the way that we see this virtual world.
Everyting looks kind of flat and it looks kind of two-dimensional and it's actually a very good camera for our sort of artsy purposes.
Example create a 2D, 2.5D game, etc..



And when we combine all that we end up with an image, or an animation.