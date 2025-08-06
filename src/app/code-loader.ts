import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, forkJoin, map, of } from 'rxjs';

export interface CodeFiles {
  htmlContent?: string;
  tsContent: string;
  path: string;
}

@Injectable({
  providedIn: 'root'
})
export class CodeLoaderService {
  private http = inject(HttpClient);

  private readonly default: CodeFiles = {
    htmlContent: '<!-- Default HTML content -->',
    tsContent: '// Default TypeScript content',
    path: ''
  }

  /**
   * Loads the HTML and TS files for a component as raw strings
   * @param path Relative path to the component (e.g., 'examples/control-flow/conditional')
   * @returns Observable with HTML and TS content as strings
   */
  loadComponentCode(path: string): Observable<CodeFiles> {
    if (!path) return of(this.default);
    // Normalize path by replacing backslashes with forward slashes
    const normalizedPath = path.replace(/\\/g, '/');

    // Extract the component name from the path (last segment)
    const segments = normalizedPath.split('/');
    const componentName = segments[segments.length - 1];

    // Construct paths to the files
    const htmlPath = `${normalizedPath}/${componentName}.component.html`;
    const tsPath = `${normalizedPath}/${componentName}.component.ts`;

    // Load both files as text
    return forkJoin({
      htmlContent: this.loadFileAsText(htmlPath),
      tsContent: this.loadFileAsText(tsPath)
    }).pipe(
      map(result => ({
        ...result,
        path: normalizedPath
      })),
      catchError(error => {
        console.error(`Error loading component code for ${path}:`, error);
        return of({
          htmlContent: `<!-- Error loading HTML for ${componentName} -->`,
          tsContent: `// Error loading TypeScript for ${componentName}`,
          path: normalizedPath
        });
      })
    );
  }

  /**
   * Loads a file as text
   * @param path Path to the file
   * @returns Observable with file content as string
   */
  private loadFileAsText(path: string): Observable<string> {
    return this.http.get(`/${path}`, { responseType: 'text' })
      .pipe(
        catchError(error => {
          console.error(`Error loading file ${path}:`, error);
          return of(`// Error loading file: ${path}`);
        })
      );
  }
}
