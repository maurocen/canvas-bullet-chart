function getCanvas(canvas) {
  try {
    verifyCanvas(canvas);
    return canvas;
  } catch(err) {
    return document.getElementById(canvas);
  }
}

function verifyCanvas(canvas) {
  if (!(canvas && canvas.tagName === 'CANVAS')) {
    throw new Error('No canvas provided');
  }
}

function getContext(canvas) {
  verifyCanvas(canvas);

  return canvas.getContext('2d');
}

function createGradient(canvas, options) {
  verifyCanvas(canvas);

  const {
    height,
    width,
  } = canvas;

  const {
    endColor = '#fff',
    endStop = 1,
    startColor = '#000',
    startStop = 0,
    x0 = 0,
    x1 = width,
    y0 = 0,
    y1 = height,
  } = options;

  const context = getContext(canvas);

  const gradient = context.createLinearGradient(x0, y0, x1, y1);
  gradient.addColorStop(startStop, startColor);
  gradient.addColorStop(endStop, endColor);

  return gradient;
}

function drawBorder(context, options) {
  const {
    borderFill = '#fff',
    borderWidth = 0,
    height = 100,
    width = 100,
    x0 = 0,
    y0 = 0,
  } = options;

  context.fillStyle = borderFill;

  context.fillRect(
    x0 - borderWidth,
    y0 - borderWidth,
    width + borderWidth,
    height + borderWidth
  );
}

function drawScale(canvas, scale, fontSize = 24) {
  verifyCanvas(canvas);

  const context = getContext(canvas);

  const {
    width,
  } = canvas;

  context.font = `${fontSize}px Arial`;
  context.textAlign = "left";

  for (let i = 1; i < scale; i++) {
    context.fillText(i, i * (width/scale), fontSize);
  }
}

function drawRectangle(context, options) {
  const {
    borderWidth = 2,
    fillStyle = '#808080',
    height = 100,
    width = 100,
    withBorder = true,
    x0 = 0,
    y0 = 0,
  } = options;

  if (withBorder) {
    drawBorder(context, options);
  }

  const initialX = withBorder ? x0 + borderWidth : x0;
  const initialY = withBorder ? y0 + borderWidth : y0;
  const rectangleWidth = withBorder ? width - 2 * (borderWidth) : width;
  const rectangleHeight = withBorder ? height - 2 * (borderWidth) : height;

  context.fillStyle = fillStyle;
  context.fillRect(
    initialX,
    initialY,
    rectangleWidth,
    rectangleHeight,
  );
}

function bulletChart(providedCanvas, options) {
  const canvas = getCanvas(providedCanvas);

  verifyCanvas(canvas);

  const {
    height: canvasHeight,
    width,
  } = canvas;

  const {
    scale = 1,
    values = [],
    fontSize = 12,
    scalePadding = 7,
    withBorder = false,
  } = options;

  const maxHeight = canvasHeight - fontSize - scalePadding;
  const heightDecrease = options.heightDecrease || maxHeight / (values.length + 1);

  drawScale(canvas, scale, fontSize);

  const context = getContext(canvas);

  values.forEach(({ name, value = 0, fillColor = '#000', gradientOptions }, index) => {
    let fillStyle = fillColor;
    if (gradientOptions && Object.entries(gradientOptions).length > 0) {
      fillStyle = createGradient(canvas, gradientOptions);
    }

    height = maxHeight - (heightDecrease * index);

    drawRectangle(
      context,
      {
        borderWidth: 1,
        fillStyle,
        height,
        width: width * (value / scale),
        withBorder,
        y0: canvasHeight - maxHeight + ((maxHeight - height) / 2),
      }
    );
  });
}

module.exports = bulletChart;
