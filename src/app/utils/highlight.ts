import { HLJSApi } from "highlight.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";

export function highlightCode(element: HTMLElement) {
    const hljs = (RevealHighlight() as any).hljs as HLJSApi;
    hljs.highlightElement(element);
}
