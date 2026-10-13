import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './a-propos.html',
  styleUrl: './a-propos.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class APropos {
  protected readonly values = [
    {
      title: "L'humain d'abord",
      description: 'Des solutions pensées pour les personnes, pas seulement pour la technologie.',
      icon: 'users',
    },
    {
      title: "L'innovation utile",
      description: 'Des outils digitaux concrets, adaptés aux réalités africaines.',
      icon: 'bulb',
    },
    {
      title: 'Un impact durable',
      description: "Des projets qui renforcent les communautés et préparent l'avenir.",
      icon: 'globe',
    },
  ];

  protected readonly pillars = [
    {
      number: '01',
      title: 'Ancrage & Proximité',
      desc: 'Nous comprenons les défis locaux de connectivité, de paiement et d’ergonomie pour concevoir des outils immédiatement adoptés.',
    },
    {
      number: '02',
      title: 'Excellence Technique',
      desc: 'Nous appliquons les standards de développement les plus exigeants pour garantir rapidité, sécurité et robustesse pérenne.',
    },
    {
      number: '03',
      title: 'Transmission & Impact',
      desc: 'Chaque solution déployée valorise les compétences et l’écosystème numérique africain en formant et responsabilisant les acteurs.',
    },
  ];

  protected readonly team = [
    {
      name: 'Dominique Soulé',
      role: 'Fondateur & Architecte Logiciel',
      bio: 'Passionné par la tech africaine et la conception de solutions à fort impact social et économique.',
      image: '3359001d5dfbcd863a9c04d8e3e00fcd.jpg',
    },
    {
      name: 'Ingénierie & Design Afri-code',
      role: 'Équipe Tech & Expérience Utilisateur',
      bio: 'Une équipe pluridisciplinaire unie pour façonner des plateformes web et mobiles fiables et élégantes.',
      image: 'femme-laptop-crop.png',
    },
  ];
}
