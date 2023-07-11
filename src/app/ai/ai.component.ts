import { Component } from '@angular/core';
import { ChatService } from '../chat-service.service';

@Component({
  selector: 'app-ai',
  template: `
    <button (click)="generateRandomData()">Generate Random Data</button>
    <p>{{ randomData }}</p>`
})
export class AIComponent{
  randomData!: string;

  constructor(private ChatService: ChatService) {}

  async generateRandomData() {
    try {
      this.randomData = await this.ChatService.generateRandomData();
    } catch (error) {
      // Handle error
    }
  }
}


