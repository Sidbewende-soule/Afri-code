import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface HeroBadge {
  readonly id: string;
  readonly name: string;
  readonly left: string;
  readonly top: string;
  readonly width: string;
  readonly height: string;
  readonly mobileBg: string;
  readonly mobileBorder: string;
}

export interface ServiceCard {
  readonly id: string;
  readonly badge: string;
  readonly title: string;
  readonly subtitle: string;
  readonly points: readonly string[];
  readonly ctaLabel: string;
  readonly ctaQuery: string;
}

export interface ServicePillar {
  readonly number: string;
  readonly title: string;
  readonly desc: string;
}

@Component({
  selector: 'app-nosservices',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nosservices.html',
  styleUrl: './nosservices.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Nosservices {
  /** Les 7 badges de services interactifs positionnés fidèlement autour de la carte d'Afrique */
  protected readonly heroBadges: readonly HeroBadge[] = [
    {
      id: 'dev-web-mobile',
      name: 'Développement web & mobile',
      left: '43.5%',
      top: '11.5%',
      width: '15.5%',
      height: '25.5%',
      mobileBg: 'from-[#162947] to-[#0A182F]',
      mobileBorder: 'border-[#0077FE]/40',
    },
    {
      id: 'hebergement',
      name: 'Hébergement',
      left: '60.5%',
      top: '8.5%',
      width: '16.0%',
      height: '23.5%',
      mobileBg: 'from-[#00A5CF] to-[#007090]',
      mobileBorder: 'border-[#00E5FF]/40',
    },
    {
      id: 'securite',
      name: 'Sécurité',
      left: '77.0%',
      top: '18.0%',
      width: '13.5%',
      height: '19.0%',
      mobileBg: 'from-[#0B8457] to-[#005C3B]',
      mobileBorder: 'border-[#25D366]/40',
    },
    {
      id: 'conseil-audit',
      name: 'Conseil & Audit IT',
      left: '37.5%',
      top: '34.5%',
      width: '12.5%',
      height: '17.0%',
      mobileBg: 'from-[#9013FE] to-[#60029E]',
      mobileBorder: 'border-[#BD10E0]/40',
    },
    {
      id: 'data-bigdata',
      name: 'Bases de données & Big Data',
      left: '75.5%',
      top: '38.0%',
      width: '16.5%',
      height: '17.0%',
      mobileBg: 'from-[#FF8C00] to-[#E65100]',
      mobileBorder: 'border-[#FFB74D]/40',
    },
    {
      id: 'design-uiux',
      name: 'Design UI/UX',
      left: '43.5%',
      top: '49.0%',
      width: '13.0%',
      height: '19.5%',
      mobileBg: 'from-[#00B4D8] to-[#0077B6]',
      mobileBorder: 'border-[#90E0EF]/40',
    },
    {
      id: 'accompagnement',
      name: 'Accompagnement',
      left: '74.0%',
      top: '55.5%',
      width: '13.5%',
      height: '17.5%',
      mobileBg: 'from-[#5E2B97] to-[#3B1569]',
      mobileBorder: 'border-[#9B51E0]/40',
    },
  ];

  /** Piliers méthodologiques fidèles au modèle de référence À Propos */
  protected readonly pillars: readonly ServicePillar[] = [
    {
      number: '01',
      title: 'Architecture & Performance',
      desc: 'Des solutions légères et ultra-rapides, conçues dès la première ligne pour les smartphones et les réseaux à débit variable.',
    },
    {
      number: '02',
      title: 'Ergonomie & Conversion',
      desc: 'Des interfaces intuitives et chaleureuses, pensées pour valoriser votre marque et transformer chaque visiteur en client fidèle.',
    },
    {
      number: '03',
      title: 'Accompagnement & Souveraineté',
      desc: 'Un code robuste qui vous appartient, une formation complète de vos équipes et une maintenance réactive pour grandir en toute sérénité.',
    },
  ];

  /** Les 3 offres principales de la maquette officielle */
  protected readonly serviceCards: readonly ServiceCard[] = [
    {
      id: 'presence',
      badge: '01 • PRÉSENCE',
      title: 'Exister sur le web',
      subtitle: 'Vous avez besoin d’un site web moderne et crédible pour valoriser votre activité ?',
      points: [
        'Site vitrine sur mesure & 100% responsive',
        'Optimisé pour smartphones & WhatsApp',
        'Livraison clé en main sécurisée & rapide',
      ],
      ctaLabel: 'Créer un site web',
      ctaQuery: 'site-web',
    },
    {
      id: 'impact',
      badge: '02 • IMPACT',
      title: 'Me faire connaître',
      subtitle: 'Vous souhaitez développer votre visibilité et bâtir une réputation solide sur Internet ?',
      points: [
        'Stratégie de marque & visibilité digitale',
        'Acquisition et fidélisation de clients',
        'Communication ciblée & tunnels WhatsApp',
      ],
      ctaLabel: 'Améliorer ma présence en ligne',
      ctaQuery: 'visibilite',
    },
    {
      id: 'performance',
      badge: '03 • PERFORMANCE',
      title: 'Me différencier',
      subtitle: 'Vous voulez vous démarquer nettement et figurer parmi les premiers sur Google ?',
      points: [
        'Référencement naturel Google (SEO local & pro)',
        'Vitesse de chargement éclair (Core Web Vitals)',
        'Expérience utilisateur exclusive et distinctive',
      ],
      ctaLabel: 'Référencer ma structure',
      ctaQuery: 'seo-differenciation',
    },
  ];
}
