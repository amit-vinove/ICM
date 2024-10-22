// nickname-renderer.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subsProfile-renderer',
  template: `
    <a [href]="'/subscriptions/'+params.data.Id" class="nickname-link">
      {{ params.value }}
    </a>
  `,
  styles: [
    `
      .nickname-link {
        text-decoration: none;
        color: black;
        cursor: pointer;
      }
    `
  ]
})
export class SubsProfileRendererComponent implements OnInit {
  params: any;

  constructor(private router: Router) {}
  agInit(params: any): void {
    this.params = params;
  }

  ngOnInit(): void {
  }
}
