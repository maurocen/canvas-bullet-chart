# Canvas Bullet Chart

## How to use
1. ```import bulletChart from 'canvas-bullet-chart'```
2. Call ```bulletChart(canvas, options)```.


# Function parameters

## canvas
It may be either a ```<canvas>``` element or an element id.

## options
Object containing the desired options and values.

### Allowed options

- **scale** *(Number)*: Maximum expected value.
- **values** *(Array)*: Explained [here](#values).
- **fontSize** *(Number)*: Font size for the labels.
- **scalePadding** *(Number)*: Space between the labels and the bullet chart.
- **heightDecrease** *(Number)*: Rate at which successive bars decrease in height.

## Values

Object containing the values to render.

- **name** *(String)*: At the time, not in use.
- **value** *(Number)*: Should be less than the scale and greater than zero.
- **fillColor** *(String)*: Solid color to fill the bar (e.g.: #f00).
- **gradientOptions** *(Object)*: An object with the options for the gradients, explained [here](#gradient-options).


## Gradient Options

Object containing the desired gradient options.

- **startColor** *(String)*: Initial gradient color (e.g.: #f00).
- **endColor** *(String)*: Final gradient color (e.g.: #0f0).
- **x0** *(Number)*: Initial horizontal position for the gradient.
- **x1** *(Number)*: Final horizontal position for the gradient.
- **y0** *(Number)*: Initial vertical position for the gradient.
- **y1** *(Number)*: Final vertical position for the gradient.
- **startStop** *(Number)*: Initial position for the gradient in the [(x0,y0), (x1,y1)] diagonal.
- **endStop** *(Number)*: Initial position for the gradient in the [(x0,y0), (x1,y1)] diagonal.
