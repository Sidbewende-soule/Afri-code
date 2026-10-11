# POLITIQUE ET BONNES PRATIQUES DE SÉCURITÉ — AFRI-CODE

La sécurité et la confidentialité sont des gages essentiels de crédibilité pour **Afri-code** auprès des entreprises partenaires. Ce document détaille les règles et mesures de sécurité techniques.

---

## 1. Sécurité Frontend & SSR (Angular 22)

### Prévention des Failles XSS (Cross-Site Scripting)
- **Sanitisation native d'Angular :** Angular sécurise par défaut les interpolations de template `{{ variable }}`.
- **Règle stricte sur `DomSanitizer` :**  
  Ne jamais utiliser `bypassSecurityTrustHtml`, `bypassSecurityTrustScript` ou `bypassSecurityTrustResourceUrl` avec des données fournies par l'utilisateur sans validation stricte.
- **Éviter `innerHTML` brut :** Ne jamais insérer de HTML non vérifié directement dans le DOM.

### Liens Externes & Numéros WhatsApp
- Pour tout lien ouvrant un nouvel onglet (`target="_blank"`), ajouter impérativement :
  ```html
  rel="noopener noreferrer"
  ```
  Cela empêche l'accès à `window.opener` et protège contre les attaques par détournement d'onglet (Reverse Tabnabbing).
- Pour les liens WhatsApp (`https://wa.me/...`) :
  - Encoder proprement le message prérempli avec `encodeURIComponent`.
  - Ne pas exposer de données confidentielles ou d'identifiants dans l'URL.

---

## 2. Protection du Formulaire de Contact & Anti-Spam

Comme le site ne dispose pas de back-office complexe au lancement, le formulaire de contact doit être particulièrement résistant aux robots et aux abus.

1. **Technique du Pot de Miel (Honeypot) :**
   - Ajouter un champ invisible pour les utilisateurs humains (ex: `name="website_url_check"` caché en CSS via `opacity-0 pointer-events-none absolute`).
   - Si ce champ est rempli lors de la soumission, la requête est immédiatement rejetée comme spam de robot sans déclencher d'e-mail.
2. **Protection Anti-Robot (Cloudflare Turnstile ou Google reCAPTCHA v3) :**
   - Préférer Cloudflare Turnstile pour sa légèreté et son respect de la vie privée sans friction pour l'utilisateur.
3. **Limitation de Débit (Rate Limiting) :**
   - Côté client : désactiver le bouton de soumission et stocker un horodatage local (`localStorage`) empêchant les envois répétés à moins de 60 secondes d'intervalle.
   - Côté serveur / API d'envoi : bloquer toute adresse IP effectuant plus de 5 requêtes par heure.
4. **Validation stricte des saisies :**
   - Assainir et vérifier la validité des adresses e-mail, numéros de téléphone et limiter la longueur des messages à 2 000 caractères.

---

## 3. Gestion des Secrets & Variables d'Environnement

- **Règle absolue :** Aucun secret, aucune clé privée d'API, aucun token ne doit être versionné dans Git.
- Utiliser le fichier [`.env.example`](file:///c:/STAGE_FARAKANLABS/Afri-code/.env.example) comme modèle documenté.
- Les fichiers réels `.env`, `.env.local` sont listés dans le [`.gitignore`](file:///c:/STAGE_FARAKANLABS/Afri-code/.gitignore).

---

## 4. En-têtes HTTP de Sécurité Recommandés (SSR / Hébergement)

Lorsque le serveur Express SSR ([`src/server.ts`](file:///c:/STAGE_FARAKANLABS/Afri-code/src/server.ts)) ou le serveur Web (Nginx, Netlify, Vercel) sert l'application, les en-têtes suivants doivent être configurés :

```http
# Empêche l'affichage du site dans une iframe (protection contre le clickjacking)
X-Frame-Options: SAMEORIGIN

# Empêche l'interprétation abusive des types MIME (MIME-sniffing)
X-Content-Type-Options: nosniff

# Politique stricte de transmission des référents
Referrer-Policy: strict-origin-when-cross-origin

# Force l'utilisation du HTTPS
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload

# Politique de sécurité du contenu (CSP)
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https:;
```

---

## 5. Maintenance & Dépendances

1. **Audit régulier des dépendances :**  
   Exécuter `npm audit` avant chaque mise en production pour détecter d'éventuelles vulnérabilités connues dans les paquets npm.
2. **Principe du moindre privilège :**  
   Ne pas accorder d'accès direct en écriture aux dépôts et serveurs sans revue de code ou validation préalable par un responsable technique.
