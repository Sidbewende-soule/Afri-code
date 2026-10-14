import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact implements OnInit {
  private readonly route = inject(ActivatedRoute);

  private readonly serviceLabels: Record<string, string> = {
    'dev-web-mobile': 'Développement web & mobile',
    'hebergement': 'Hébergement & Cloud',
    'securite': 'Cybersécurité & Protection',
    'conseil-audit': 'Conseil & Audit IT',
    'data-bigdata': 'Bases de données & Big Data',
    'design-uiux': 'Design UI/UX & Ergonomie',
    'accompagnement': 'Accompagnement & Suivi technique',
    'site-web': 'Création de site web sur-mesure',
    'visibilite': 'Visibilité & Stratégie digitale',
    'seo-differenciation': 'Référencement naturel Google (SEO)',
  };

  /** Données saisies dans le formulaire */
  formData = signal({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  /** États de validation, de soumission et d'erreur */
  errorMessage = signal<string | null>(null);
  isSubmitted = signal(false);
  isSubmitting = signal(false);

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const serviceParam = params['service'];
      if (serviceParam && this.serviceLabels[serviceParam]) {
        const label = this.serviceLabels[serviceParam];
        this.formData.update((data) => ({
          ...data,
          subject: `Demande de projet : ${label}`,
          message:
            data.message ||
            `Bonjour l'équipe Afri-code,\n\nJe souhaite échanger avec vous au sujet du service « ${label} » pour notre projet.\n\nCordialement,`,
        }));
      }
    });
  }

  onSubmit(): void {
    const data = this.formData();
    if (!data.name.trim() || !data.email.trim() || !data.subject.trim() || !data.message.trim()) {
      this.errorMessage.set('Veuillez remplir tous les champs obligatoires (*).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      this.errorMessage.set('Veuillez renseigner une adresse email valide.');
      return;
    }

    this.errorMessage.set(null);
    this.isSubmitting.set(true);

    // Simulation d'envoi réussi
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      this.formData.set({ name: '', email: '', subject: '', message: '' });
    }, 700);
  }

  resetForm(): void {
    this.isSubmitted.set(false);
    this.errorMessage.set(null);
  }
}
