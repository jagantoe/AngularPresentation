import RevealHighlight from "reveal.js/plugin/highlight/highlight";

export function highlightCode(element: HTMLElement) {
    const hljs = (RevealHighlight() as any).hljs;
    hljs.highlightElement(element);
}
