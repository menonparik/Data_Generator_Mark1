import { Component } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
 styleUrls: ['./ai.component.css']
})
export class AIComponent{
  
  userInputText: string = '';
  generatedText: string[] = [];
 
  generateSimilarText(): void {
    // Clear previously generated data
    this.generatedText = [];
 
    // Check if the user provided any input text
    if (!this.userInputText.trim()) {
      return;
    }
 
   
    const perturbationFactor = 0.1;
 
    // Generate similar text based on user input
    for (let i = 0; i < 5; i++) { 
      let similarText = '';
      for (const char of this.userInputText) {
        if (Math.random() < perturbationFactor) {
          similarText += String.fromCharCode(char.charCodeAt(0) + Math.floor(perturbationFactor * 26 * (Math.random() - 0.5)));
        } else {
          similarText += char;
        }
      }
      this.generatedText.push(similarText);
    }
  }
 }