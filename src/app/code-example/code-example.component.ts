import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { CodeLoaderService } from '../code-loader';
import { CodeBlockComponent } from './code-block/code-block.component';

@Component({
    selector: 'app-code-example',
    standalone: true,
    imports: [CommonModule, AsyncPipe, CodeBlockComponent],
    templateUrl: './code-example.component.html',
    styleUrls: ['./code-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeExampleComponent {
    private readonly codeLoader = inject(CodeLoaderService);

    readonly path = input<string>('');
    readonly path$ = toObservable(this.path);
    readonly sideBySide = input<boolean>(false);

    readonly activeTab = signal<'html' | 'ts' | 'preview'>('ts');
    readonly codeFiles$ = this.path$.pipe(switchMap(path => this.codeLoader.loadComponentCode(path)));
}
