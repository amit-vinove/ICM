import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  languages = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'Arabic' },
    { code: 'ml', label: 'Malay' },
    { code: 'sp', label: 'Spanish' },
    { code: 'pt', label: 'Portuguese' }
  ];

  constructor(private translate: TranslateService) {
    // Set the default language
    const savedLang = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang(savedLang);
    this.translate.use(savedLang);
    this.setDirection(savedLang);
  }

  ngOnInit() {}

  switchLanguage(lang: string) {
    this.translate.use(lang);
    // localStorage.setItem('language', lang);
    // this.setDirection(lang);
  }

  private setDirection(lang: string) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

}
