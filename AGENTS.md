# INSTRUCTIONS ET RÈGLES DE DÉVELOPPEMENT — AFRI-CODE

Ce document définit les directives obligatoires pour toute IA ou développeur intervenant sur le projet **Afri-code**.

---

## 1. Identité du Projet & Philosophie
- **Projet :** Afri-code (Solutions numériques ancrées en Afrique de l'Ouest, Burkina Faso).
- **Valeurs fondamentales :** Ancrage culturel africain, professionnalisme, créativité contemporaine, humilité (le geste d'accueil de la calebasse d'eau), orientation bénéfices clients.
- **Règle absolue :** Pas de clichés folkloriques, pas d'accumulation de stéréotypes. Une esthétique africaine moderne, raffinée et technologique.

---

## 2. Charte Visuelle & Codes Couleurs
Respecter rigoureusement la palette officielle étalonnée depuis le logo officiel (`logo-africode.png`), où **le Blanc et le Jaune sont les couleurs principales** :
- **Blanc Pur & Écru (Couleur Principale 1) :** `#FFFFFF` (`--color-afri-white`) / `#FAF6F0` (`--color-afri-white-soft`) — Surfaces lumineuses, lisibilité maximale, fond principal clair et pur.
- **Jaune Afri (Couleur Principale 2) :** `#FAAB03` (`--color-afri-yellow` / `--color-afri-gold`) — Accents solaires, boutons d'action (CTA), badges, reflets et dynamisme.
- **Bleu Nuit Afri (Contraste & Structure) :** `#001D51` (`--color-afri-blue`) — Titres contrastés, typographies fortes, barre de navigation, contours et contrastes profonds.
- **Bleu Profond Sombre :** `#001133` (`--color-afri-blue-dark`) — Arrière-plans d'immersion Hero & Footer.
- **Écru Sable :** `#F1E3CC` (`--color-afri-sand`) — Fonds chaleureux doux, cartes d'accueil.

**Typographies :**
- Titres (`Display` / `Headings`) : `Plus Jakarta Sans`, font-weight 700 ou 800.
- Corps de texte (`Body`) : `Inter`, font-weight 400 ou 500.
- Accents techniques (`Code` / Métadonnées) : `Space Grotesk`.

---

## 3. Nomenclature Culturelle des Pages (1 Mot Court)
Ne pas dévier de la nomenclature définie avec l'équipe :
- `/` : **Accueil** (L'Accueil & La Calebasse d'eau)
- `/services` : **Baobab** (Services & Solutions robustes)
- `/realisations` : **Traces** (Réalisations concrètes et vérifiables)
- `/a-propos` : **Racines** (Équipe, Histoire & Vision)
- `/contact` : **Palabre** (Contact, Échange, WhatsApp)
- `/blog` (optionnel) : **Griot** (Conseils numériques & découvrabilité)

Chaque élément de navigation doit afficher le mot fort avec son sous-titre explicite pour une clarté instantanée.

---

## 4. Standards Techniques Angular & CSS
- **Angular 22+ :** Composants standalone obligatoires, détection `OnPush`, signaux (`signal()`, `computed()`), contrôle natif (`@if`, `@for` avec `track`).
- **Tailwind CSS v4 :** Utiliser les classes sémantiques basées sur les tokens Afri (`bg-afri-blue`, `text-afri-gold`, etc.).
- **Mobile-First :** Tester et concevoir pour mobile en priorité (>85% des utilisateurs cibles naviguent sur smartphone).
- **Performance :** Optimiser chaque image (WebP/AVIF), pas de dépendances lourdes inutiles.

---

## 5. Sécurité & Données
- Aucun secret ni clé API en clair dans le code.
- Tous les liens sortants doivent comporter `rel="noopener noreferrer"`.
- Formulaire de contact protégé par technique honeypot et limitation de débit.
- Liens WhatsApp sécurisés et messages encodés proprement.
