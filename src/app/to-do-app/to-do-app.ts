import { Component, signal } from '@angular/core';
import { LucideAngularModule, Trash2 } from 'lucide-angular';

@Component({
  selector: 'app-to-do-app',
  imports: [LucideAngularModule],
  templateUrl: './to-do-app.html',
  styleUrl: './to-do-app.css',
})
export class ToDoApp {
  readonly Trash = Trash2;
  newToDo = signal('');
  toDo = signal<{ text: string; done: boolean }[]>([]);

  addToDo() {
    const text = this.newToDo().trim();

    if (text === '') {
      return;
    }

    this.toDo.update((list) => [...list, { text, done: false }]);
    this.newToDo.set('');
  }

  toggleToDo(index: number) {
    this.toDo.update((list) =>
      list.map((item, idx) => (idx === index ? { ...item, done: !item.done } : item)),
    );
  }

  deleteToDo(index: number) {
    this.toDo.update((list) => list.filter((_, i) => i !== index));
  }
}
