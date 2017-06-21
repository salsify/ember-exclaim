export default function joinStringContent(content) {
  if (Array.isArray(content)) {
    return content.join('');
  } else if (content && typeof content.toArray === 'function') {
    return content.toArray().join('');
  } else {
    return `${content}`;
  }
}
