import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <main>
    <div>
      <div>
        <ul>
          <li>
            <a href="for-directive">ForDirectiveComponent</a>
          </li>
          <li>
            <a href="if-directive">IfDirectiveComponent</a>
          </li>
          <li>
            <a href="switch-directive">SwitchDirectiveComponent</a>
          </li>
          <li>
            <a href="ngmodel-attribute">NgmodelAttributeComponent</a>
          </li>
          <li>
            <a href="ngclass-attribute">NgclassAttributeComponent</a>
          </li>
          <li>
            <a href="ngstyle-attribute">NgstyleAttributeComponent</a>
          </li>
        </ul>
      </div>
      <div>
        <router-outlet></router-outlet>
      </div>
    </div>
  </main>
  `,
})
export class AppComponent {
  title = 'angular-directives';
}
