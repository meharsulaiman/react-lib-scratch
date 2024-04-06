function createDomElement(reactElement) {
  if (typeof reactElement.type === "function") {
    return createDomElement(reactElement.type(reactElement.props));
  }

  if (Array.isArray(reactElement)) {
    return reactElement.map((el) => createDomElement(el));
  }

  if (typeof reactElement === "string") {
    return document.createTextNode(reactElement);
  }

  const DOMElement = document.createElement(reactElement.type);

  reactElement.props.children.forEach((child) => {
    Object.entries(reactElement.props).forEach(([key, value]) => {
      console.log(key, value);
      // DOMElement[key] = value;
      if (key === "style") {
        const styleTransformer = Object.keys(value)
          .map((key) => `${key}: ${value[key]}`)
          .join(";");

        DOMElement.setAttribute(key, styleTransformer);
      } else {
        DOMElement.setAttribute(key, value);
      }
    });

    if (Array.isArray(child)) {
      const ArrayOfEl = child.map((el) => createDomElement(el));
      DOMElement.append(...ArrayOfEl);
    } else if (typeof child === "string") {
      const textNode = document.createTextNode(child);

      DOMElement.append(textNode);
    } else {
      DOMElement.append(createDomElement(child));
    }
  });

  return DOMElement;
}

function render(reactElement, roootElement) {
  const DOMElement = createDomElement(reactElement);

  if (Array.isArray(DOMElement)) {
    roootElement.append(...DOMElement);
  } else {
    roootElement.append(DOMElement);
  }
}

export default {
  render,
};
