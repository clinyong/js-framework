/**
 * 获取元素的子元素
 *
 * @param {ParentNode|Node} el
 */
exports.getChildren = function getChildren(el) {
  if (el.childElementCount) {
    return Array.prototype.slice.call(el.children);
  }

  const list = [];
  for (let node = el.firstChild; node; node = node.nextSibling) {
    if (node.nodeType === 1) {
      list.push(node);
    }
  }

  return list;
};

/**
 * 获取兄弟元素，当前元素向右的一个节点
 * nextSibling 和 nextElementSibling 的区别是，nextSibling 会获取到文本节点
 *
 * @param {Node} el
 */
exports.getNext = function getNext(el) {
  if ("nextElementSibling" in el) {
    return el.nextElementSibling;
  }

  while ((el = el.nextSibling)) {
    if (el.nodeType === 1) {
      return el;
    }
  }

  return null;
};

/**
 * 获取当前元素的上一个元素
 *
 * @param {Node} el
 */
exports.getPre = function getPre(el) {
  if ("previousElementSibling" in el) {
    return el.previousElementSibling;
  }

  while ((el = el.previousSibling)) {
    if (el.nodeType === 1) {
      return el;
    }
  }

  return null;
};

/**
 * 判断是不是 XML 文档
 * XML 的 nodeName 是区分大小写
 *
 * @param {*} doc
 */
exports.isXML = function isXML(doc) {
  return doc.createElement("p").nodeName !== doc.createElement("P").nodeName;
};
