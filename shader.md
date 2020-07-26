# Shader

Shader is a small little program that looks a bit like this:

```
    // default floating point precision
    precision highp float;

    // Inputs
    varying vec2 vUv

    // Variables from JavaScript
    uniform float time;

    // Main function
    void main() {
        // Output color
        gl_Fragcolor = vec4(1.0);
    }

```

It's a small little program that is meant to do a single task and really well.

It's called *GLSL* means Shader language for WebGL/OpenGL

One way to try and visualize and conceptualize what a shader is to consider an image, like triangle, a colored triangle AS a *grid of pixels*

The shader --> how does each individual pixel get colored. 

```
    precision highp float;

    varying vec2 vUv;

    // Main function
    void main() {
        // Create a RGB color
        vec3 color = vec3(VuV.x)

        // Create an opacity
        float alpha = 1.0;

        // Output color
        gl_FragColor = vec4(color, alpha)
    }

```

Varying: Usually a coordinate or a number or a value that is coming from WebGL.
Uniform: The value is the same across all of the different pixels in our surface. It's uniformly constant.


