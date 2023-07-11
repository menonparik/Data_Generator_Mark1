import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  messages: string[] = [];
  userMessage = '';

  constructor() { }

  ngOnInit() {
    this.addMessage('Bot', 'Hello! How can I assist you today?');
  }

  addMessage(sender: string, message: string) {
    this.messages.push(`${sender}: ${message}`);
  }

  async sendMessage() {
    if (this.userMessage.trim() === '') {
      return;
    }

    this.addMessage('User', this.userMessage);
    const api='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'
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        prompt: this.messages.join('\n'),
        max_tokens: 50,
      }, {
        headers: { 'Authorization':'Bearer ${api}'}
      });

      const botMessage = response.data.choices[0].text.trim();

      this.addMessage('Bot', botMessage);
      this.userMessage = '';
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  }

}
