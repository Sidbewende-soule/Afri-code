import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  readonly path: string;
  readonly label: string;
  readonly exact?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  protected readonly isMobileMenuOpen = signal(false);

  protected readonly navItems: readonly NavItem[] = [
    { path: '/', label: 'Accueil', exact: true },
    { path: '/a-propos', label: 'À propos' },
    { path: '/services', label: 'Nos Services' },
  ];

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
