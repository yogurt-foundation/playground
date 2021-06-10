export function windowResizer() {
  // query the element
  const resizer = document.getElementById('windowResize');
  const leftSide = resizer.previousElementSibling;
  const rightSide = resizer.nextElementSibling;

  // current position of mouse
  let x = 0;

  // Width of left side
  let leftWidth = 0;

  // handle the mousedown event
  // that's triggered when user drags the resizer
  const mouseDownHandler = function (e) {
    // get the current mouse position
    x = e.clientX;

    leftWidth = leftSide.getBoundingClientRect().width;

    // attach the listeners to `document`
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  // attach the handler
  resizer.addEventListener('mousedown', mouseDownHandler);

  const mouseMoveHandler = function (e) {
    // how far the mouse has been moved
    const dx = e.clientX - x;

    const newLeftWidth =
      ((leftWidth + dx) * 100) /
      resizer.parentNode.getBoundingClientRect().width;
    leftSide.style.width = `${newLeftWidth}%`;

    resizer.style.cursor = 'col-resize';

    leftSide.style.userSelect = 'none';
    leftSide.style.pointerEvents = 'none';

    rightSide.style.userSelect = 'none';
    rightSide.style.pointerEvents = 'none';
  };

  const mouseUpHandler = function () {
    resizer.style.removeProperty('cursor');
    document.body.style.removeProperty('cursor');

    leftSide.style.removeProperty('user-select');
    leftSide.style.removeProperty('pointer-events');

    rightSide.style.removeProperty('user-select');
    rightSide.style.removeProperty('pointer-events');

    // remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);

    // update Monaco Editor
    document.initEditor();
  };
}

