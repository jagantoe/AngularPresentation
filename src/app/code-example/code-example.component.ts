import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { CodeLoaderService } from '../code-loader';

@Component({
    selector: 'app-code-example',
    standalone: true,
    imports: [CommonModule, AsyncPipe],
    templateUrl: './code-example.component.html',
    styleUrls: ['./code-example.component.scss']
})
export class CodeExampleComponent {
    private readonly codeLoader = inject(CodeLoaderService);

    // Modern input using signals
    readonly path = input<string>('control-flow/conditional');

    // UI state as signals
    readonly activeTab = signal<'html' | 'ts'>('html');
    readonly codeFiles$ = this.codeLoader.loadComponentCode(this.path());
}
