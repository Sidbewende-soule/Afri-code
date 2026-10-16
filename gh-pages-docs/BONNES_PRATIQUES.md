# GUIDE DES BONNES PRATIQUES DE DÉVELOPPEMENT — AFRI-CODE

Ce document définit les standards d'ingénierie logicielle pour assurer la pérennité, la robustesse, la rapidité et la maintenabilité du site **Afri-code**.

---

## 1. Standards d'Architecture Angular (v22+)

### Composants Standalone & OnPush
- **Composants Standalone obligatoires :** Aucun `NgModule` traditionnel. Tous les composants, directives et pipes sont déclarés avec `standalone: true` (comportement par défaut Angular moderne).
- **Stratégie de détection des changements :**  
  Appliquer systématiquement `changeDetection: ChangeDetectionStrategy.OnPush` sur tous les composants pour des performances optimales et une réactivité instantanée.

```typescript
@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceCardComponent {
  // ...
}
```

### Signaux Angular (Angular Signals)
- Privilégier les **Signals** (`signal()`, `computed()`) au lieu des mutations directes ou de `BehaviorSubject` complexes quand la réactivité locale suffit.
- Utiliser la nouvelle API d'entrées/sorties basée sur les signaux :
  - `readonly service = input.required<ServiceItem>();`
  - `readonly selectAction = output<string>();`

### Nouveau Control Flow natif
- Utiliser impérativement la syntaxe moderne `@if`, `@for`, `@switch` plutôt que les anciennes directives structurelles `*ngIf`, `*ngFor`.
- **Règle absolue pour `@for` :** Toujours spécifier une clé de suivi (`track`) unique et stable (ex: `track item.id`).

```html
@if (isLoading()) {
  <app-skeleton-loader />
} @else {
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    @for (service of services(); track service.id) {
      <app-service-card [service]="service" />
    } @empty {
      <p class="text-neutral-500">Aucun service disponible pour le moment.</p>
    }
  </div>
}
```

### Injection de dépendances moderne
- Remplacer les constructeurs surchargés par la fonction `inject()` :
```typescript
export class ContactComponent {
  private readonly router = inject(Router);
  private readonly meta = inject(Meta);
}
```

---

## 2. Organisation de la Structure du Projet

```text
src/app/
├── core/                   # Singletons, services centraux, layout global
│   ├── components/         # Header / Navbar, Footer
│   ├── layout/             # Main layout wrapper
│   └── services/           # Analytics, SEO, Theme
├── shared/                 # Éléments réutilisables dans toute l'application
│   ├── components/         # Boutons, Cards, Modal, Badges, WhatsApp-CTA
│   ├── directives/         # Animations, directives d'accessibilité
│   └── pipes/              # Formatage monnaie (FCFA), dates
├── pages/                  # Vues routées avec nommage culturel
│   ├── home/               # Accueil (L'Accueil & La Calebasse)
│   ├── services/           # Baobab (Solutions & Services)
│   ├── realisations/       # Traces (Réalisations concrètes)
│   ├── a-propos/           # Racines (Équipe & Vision)
│   └── contact/            # Palabre (Contact, WhatsApp, Devis)
└── app.routes.ts           # Définition des routes
```

---

## 3. Performance & Optimisation Réseau (Contexte Ouest-Africain)

En Afrique de l'Ouest, les connexions mobiles varient fréquemment entre 3G, 4G et fibre. L'application doit charger en moins de **1.5 seconde**, même sur un réseau modeste.

1. **Optimisation des Images :**
   - Toujours privilégier les formats modernes compressés (**WebP** ou **AVIF**).
   - Utiliser la directive Angular `NgOptimizedImage` (`ngSrc`) pour gérer automatiquement le lazy loading, le dimensionnement et la priorité de chargement.
   - Ne jamais charger une image brute de plusieurs mégaoctets sur le client.
2. **Lazy Loading des Pages :**
   - Charger chaque route de manière différée avec `loadComponent` :
     ```typescript
     {
       path: 'services',
       loadComponent: () => import('./pages/services/services').then(m => m.ServicesComponent)
     }
     ```
3. **Poids du Bundle :**
   - Éviter d'importer de lourdes bibliothèques d'icônes ou de composants UI tierces (type Angular Material lourd ou Lodash complet).
   - Privilégier des SVG légers intégrés inline ou optimisés avec Tailwind CSS.

---

## 4. Rigueur Éditoriale & Authenticité (Valeurs Afri-code)

- **Transparence totale :** Aucun faux témoignage, aucun client fictif, aucune fausse statistique. Tout ce qui est présenté dans "Traces" doit être vérifiable.
- **Orientation Bénéfices Métiers :** Les services doivent être expliqués à travers le prisme du client (ex: *"Gagnez du temps dans vos encaissements"*, *"Soyez trouvable par vos clients sur Google et WhatsApp"*), pas uniquement via du jargon technologique inaccessible.
- **Cohérence culturelle :** Les noms culturels des pages (`Baobab`, `Traces`, `Racines`, `Palabre`) doivent toujours être accompagnés d'un sous-titre explicite pour garantir une ergonomie sans friction.
