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

|Name|Type|Description|Default|
|----|----|-----------|-------|
|**borderFill**|*String / Object*|Fill options for the border. Object format explained [here](#gradient-options)|```#808080```|
|**fontSize**|*Number*|Font size for the labels.|12|
|**heightDecrease**|*Number*|Rate at which successive bars decrease in height.|[Here](#height-decrease-calculation)|
|**scale**|*Number*|Maximum expected value.|1|
|**scalePadding**|*Number*|Space between the labels and the bullet chart.|7|
|**values**|*Array*|Explained [here](#values).|[]|
|**withBorder**|*Boolean*|Should a border be drawn around each box|```false```|

## Values

Object containing the values to render.

|Name|Type|Description|Default|
|----|----|-----------|-------|
|**fillColor**|*String*|Solid color to fill the bar (e.g.: #f00). Ignored if ```gradientOptions``` provided.|```#000```|
|**gradientOptions**|*Object*|An object with the options for the gradients, explained [here](#gradient-options).|{}|
|**name**|*String*|At the time, not in use.|*undefined*|
|**value**|*Number*|Should be less than the scale and greater than zero.|0|


## Gradient Options

Object containing the desired gradient options.

|Name|Type|Description|Default|
|----|----|-----------|-------|
|**endColor**|*String*|Final gradient color (e.g.: #0f0).|```#fff```|
|**endStop**|*Number*|Initial position for the gradient in the [(x0,y0), (x1,y1)] diagonal.|1|
|**startColor**|*String*|Initial gradient color (e.g.: #f00).|```#000```|
|**startStop**|*Number*|Initial position for the gradient in the [(x0,y0), (x1,y1)] diagonal|0|
|**x0**|*Number*|Initial horizontal position for the gradient|0|
|**x1**|*Number*|Final horizontal position for the gradient.|```<canvas>``` width|
|**y0**|*Number*|Initial vertical position for the gradient|0|
|**y1**|*Number*|Final vertical position for the gradient.|```<canvas>``` height|


## Height decrease calculation.

If no ```heightDecrease``` value is provided, it's calculated as:
```(<canvas height> - <fontSize> - <scalePadding>) / <values array length>```
