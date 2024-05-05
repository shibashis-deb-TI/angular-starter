import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() user!: User | undefined;
  @Output() logout = new EventEmitter<void>();

  onLogout() {
    this.logout.emit()
  }
}
