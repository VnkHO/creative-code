# Noise Function

Way that noice functions work:

Pass a coordinate, can be :

- 2D Coordinate (x, y)
- 3D Coordinate (x, y, z)
- 4D Coordinate (x, y ,z, w)

Example:

```
    v = noise2D(x, y)
    v = noise3D(x, y, z)
    v = noise4D(x, y, z, w)

```

With that coordiante, we get back a value for that coordinate which is `v` here and this value is between -1 and 1.
And this value is gonna be slowly varying between -1 and 1 based on the coordinate we pass in

```
    // Value is in -1...1 range
    const v = noise2D(x, y)

    // map to 0..1 range
    const n = v * 0.5 + 0.5

    // turn into a percentage
    const L = Math.floor(n * 100)

    // get color vlaue
    const hsl = `hsl(0, 0%, ${L}%`

```


More variation, manipulating: 
```
    // frequency of the noise signal

    const frequency = 5.0
    
    const v = noise2D(x * frequency, y * frequency)
```

