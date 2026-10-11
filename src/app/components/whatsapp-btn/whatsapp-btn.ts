import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-whatsapp-btn',
  standalone: true,
  templateUrl: './whatsapp-btn.html',
  styleUrl: './whatsapp-btn.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappBtn {
  readonly phoneNumber = input<string>('22600000000');
  readonly message = input<string>("Bonjour Afri-code, j'aimerais échanger sur un projet numérique pour mon entreprise.");
  readonly label = input<string>('Discuter projet');
  readonly fullWidth = input<boolean>(false);

  protected readonly whatsappUrl = computed(() => {
    return `https://wa.me/${this.phoneNumber()}?text=${encodeURIComponent(this.message())}`;
  });
}
