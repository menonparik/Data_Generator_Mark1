import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private readonly API_KEY = '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'; // Replace with your actual OpenAI API key

  async generateRandomData(): Promise<string> {
    const prompt = 'Generate random data';
    const maxTokens = 50;
    const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    try {
      const response = await axios.post(url, {
        prompt,
        max_tokens: maxTokens
      }, {
        headers: {
          'Authorization': `Bearer ${this.API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      const data = response.data.choices[0].text.trim();
      return data;
    } catch (error) {
      console.error('Failed to generate random data:', error);
      throw error;
    }
  }
}