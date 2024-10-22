// nickname-renderer.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers-renderer',
  template: `
    <a [href]="'/offers/'+params.data.Id" class="nickname-link">
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
export class OffersRendererComponent implements OnInit {
  params: any;

  constructor(private router: Router) {}
  agInit(params: any): void {
    this.params = params;
  }

  ngOnInit(): void {
  }
}
