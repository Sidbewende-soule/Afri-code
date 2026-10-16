# CHARTE GRAPHIQUE & DESIGN SYSTEM — AFRI-CODE

## 1. Identité & Philosophie Visuelle

L'identité visuelle d'**Afri-code** marie l'ancrage culturel africain avec l'ingénierie logicielle contemporaine. Elle exprime le professionnalisme, la proximité humaine, l'innovation et l'excellence.

> **Principe cardinal :**  
> Une esthétique africaine moderne, épurée et digne, sans accumulation de clichés folkloriques. Valoriser les matières, les gestes nobles (comme l'eau d'accueil offerte dans la calebasse) et la précision du code.

---

## 2. Palette Colorimétrique Officielle

Les couleurs ont été extraites directement pixel par pixel à partir de l'image de référence officielle ([`logo-africode.png`](file:///c:/STAGE_FARAKANLABS/Afri-code/public/logo-africode.png)).

### Couleurs Principales (Blanc & Jaune)

| Rôle | Nom | Valeur HEX | RGB | HSL | Classes Tailwind & Variables |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Couleur Principale (Clarté)** | **Blanc Pur & Écru** | `#FFFFFF` / `#FAF6F0` | `rgb(255, 255, 255)` | `hsl(0, 0%, 100%)` | `bg-afri-white` / `--color-afri-white`, `bg-afri-white-soft` |
| **Couleur Principale (Énergie)** | **Jaune Afri (Doré)** | `#FAAB03` | `rgb(250, 171, 3)` | `hsl(41, 98%, 50%)` | `bg-afri-yellow` / `--color-afri-yellow` (`bg-afri-gold`) |
| **Contraste & Structure** | **Bleu Nuit Afri** | `#001D51` | `rgb(0, 29, 81)` | `hsl(219, 100%, 16%)` | `bg-afri-blue` / `--color-afri-blue` |

### Nuancier Étendu (Variables & Déclinaisons)

```
Blanc & Surfaces Lumineuses (Couleur Principale) :
  - afri-white        : #FFFFFF (Blanc pur originel du logo, lisibilité et clarté maximale)
  - afri-white-pure   : #FFFFFF (Surfaces et cartes blanches éclatantes)
  - afri-white-soft   : #FAF6F0 (Fond général doux et reposant)
  - afri-white-cream  : #F1E3CC (Teinte crème chaleureuse)

Jaune Afri (Couleur Principale Solaire) :
  - afri-yellow       : #FAAB03 (Jaune solaire officiel du logo, boutons CTA, accents)
  - afri-yellow-light : #FFBC2E (Survol des boutons, reflets solaires)
  - afri-yellow-hover : #E59B02 (Survol interactif)
  - afri-yellow-dark  : #BF8201 (État actif / cliqué)
  - afri-yellow-subtle: #FFF8E7 (Arrière-plan des tags et badges jaunes)
  *(Alias équivalents afri-gold disponibles pour rétrocompatibilité)*

Bleu Nuit (Contraste & Structure) :
  - afri-blue-dark    : #001133 (Fonds sombres immersifs, contraste maximal)
  - afri-blue         : #001D51 (Couleur d'ancrage du logo, typographies sombres, structures)
  - afri-blue-light   : #002B7A (Survols, cartes secondaires sur fond sombre)
  - afri-blue-subtle  : #0D3C9B (Bordures subtiles, icônes secondaires)

Neutres & Sable :
  - afri-sand-dark    : #D9C4A3 (Bordures sur fond clair, séparateurs chaleureux)
  - afri-sand         : #F1E3CC (Teinte sable douce)
  - afri-sand-light   : #FAF6F0 (Fond des sections claires)
```

---

## 3. Typographie

### Polices recommandées (Google Fonts)

1. **Police d'affichage & Titres (Display / Headings) :**  
   - Famille : **`Plus Jakarta Sans`** (alternative : `Outfit`)  
   - Caractéristiques : Géométrique, contemporaine, chaleureuse et affirmée.  
   - Graisses utilisées : `SemiBold (600)`, `Bold (700)`, `ExtraBold (800)`.  
   - Usage : Titres `h1`, `h2`, `h3`, chiffres clés, boutons principaux.

2. **Police de lecture (Body text) :**  
   - Famille : **`Inter`**  
   - Caractéristiques : Lisibilité exceptionnelle sur tous les écrans (mobiles, tablettes, desktop).  
   - Graisses utilisées : `Regular (400)`, `Medium (500)`.  
   - Usage : Paragraphes, descriptions des services, mentions légales, formulaires.

3. **Police d'accent technique (Code / Métadonnées / Chiffres) :**  
   - Famille : **`Space Grotesk`** ou `JetBrains Mono`  
   - Caractéristiques : Précision technique évoquant l'ingénierie et le code informatique.  
   - Usage : Tags technologiques, dates, métadonnées, sous-titres techniques.

### Échelle Typographique (Mobile-First)

| Niveau | Taille Mobile | Taille Desktop | Graisse | Hauteur de ligne |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Title (`h1`)** | `2.25rem` (36px) | `3.75rem` (60px) | 800 (ExtraBold) | 1.1 |
| **Section Title (`h2`)** | `1.75rem` (28px) | `2.5rem` (40px) | 700 (Bold) | 1.2 |
| **Card Title (`h3`)** | `1.25rem` (20px) | `1.5rem` (24px) | 600 (SemiBold) | 1.3 |
| **Sous-titre / Lead** | `1.125rem` (18px) | `1.25rem` (20px) | 400 (Regular) | 1.5 |
| **Corps de texte** | `1rem` (16px) | `1rem` (16px) | 400 (Regular) | 1.6 |
| **Légende / Tag** | `0.875rem` (14px) | `0.875rem` (14px) | 500 (Medium) | 1.4 |

---

## 4. Règles d'Usage du Logo

Le logo Afri-code est l'élément central de notre identité visuelle :

- **Sur fond sombre (`#061A47` ou `#030D24`) :**  
  Utiliser la version du logo avec symbole lumineux et typographie blanche contrastée.
- **Sur fond clair (`#FAF6F0` ou `#FFFFFF`) :**  
  Utiliser la version contrastée avec symbole orange doré et texte bleu nuit.
- **Zone d'exclusion :**  
  Conserver un espace libre minimum équivalent à la hauteur du symbole tout autour du logo.
- **Interdictions strictes :**  
  - Ne jamais déformer les proportions du logo (conserver le ratio d'aspect strict).  
  - Ne pas changer arbitrairement les teintes du symbole ou de la typographie.  
  - Ne pas placer le logo sur un fond à motif complexe sans filtre d'assombrissement.

---

## 5. Univers Visuel & Iconographie

1. **Le concept d'accueil ("La Calebasse d'eau") :**  
   - Symbolise la tradition d'hospitalité et le respect du visiteur.  
   - Doit être mise en valeur avec élégance (lumière naturelle, plongée verticale, épurée).  
   - Présentée comme un geste d'accueil et de bienvenue chaleureux, sans prétendre à une coutume universelle figée.

2. **Éléments graphiques d'ornement :**  
   - Lignes de code subtiles associées à des trames géométriques épurées.  
   - Lueurs douces en dégradé radial orange doré (`glow-gold`) sur fond bleu nuit pour dynamiser l'interface sans surcharger.  
   - Effets de cartes en verre sombre (Glassmorphism sobre) : `backdrop-blur-md bg-[#061A47]/80 border border-white/10`.
