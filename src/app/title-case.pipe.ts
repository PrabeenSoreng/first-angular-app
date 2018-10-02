import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {

    if(!value) return null;

    let words = value.split(' ');
    for(let index = 0; index < words.length; index++){
      let word = words[index];
      if(index > 0 && this.isPreposition(word))
        words[index] = word.toLowerCase();
      else
        words[index] = this.toTitleCase(word);
    }
    return words.join(' ');
  }

  private toTitleCase(word: string): string{
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isPreposition(word: string): boolean{
    let prepositions = ['of', 'the', 'with', 'at', 'form', 'to', 'in', 'for', 'on', 'by', 'about', 'like', 'through', 'over', 'before', 'between', 'after', 'since', 'without','under', 'within', 'along', 'among', 'off', 'above', 'near'];

    return prepositions.includes(word.toLowerCase())

  }
}
