// nickname-renderer.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nickname-renderer',
  template: `
    <a [href]="'/providers-profile/'+params.data.id" class="nickname-link">
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
export class NicknameRendererComponent implements OnInit {
  params: any;

  constructor(private router: Router) {}
  agInit(params: any): void {
    this.params = params;
  }

  ngOnInit(): void {
  }
}
