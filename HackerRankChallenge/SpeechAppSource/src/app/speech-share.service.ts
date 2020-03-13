import { Injectable } from '@angular/core';
import { ISpeechInterface } from './ispeech-interface';

@Injectable({
  providedIn: 'root'
})
export class SpeechShareService {
  speeches:ISpeechInterface[] = [];
  constructor() {
    this.speeches = [
      {
        author: 'Martin Luther King Jr',
        body: 'I am happy to join with you today in what will go down in history as the greates•t demonstration for freedom in        the history of our nation. Five ~core years ago a great American in whose symholic shado·w we stand today signed the Emancipation        Proclamation. This momen:tous cleeree is a great beacon   light of hope to millions of Negro slave·s who had been        ~e.arrd in the flames o[ withering injushcc. It came as a        joyous daybre,ak to end the long night of their captivity.        But 100 years late<r the Negro still is no•t fre·e. One hundred years later the 1i.fe of the Negro is still badly        erippled by the manacles of and the chains of        discriminatio11. One hnndred years later the Ne,gro live·s        on a lone,Jy i:"]and of poverty in the mids1t of a va1S1t ooean         of matE>.rial prospc·rity. Out> hundred years later the        egro is still larugui~hed iu the comer~s o.f Ame·rican        ~oci. ety and find;:; himself in exile in his own land. So        wo  torlay to r1r.amatize a s,hameful condition  In a sense we\'ve come to our nation\'s capital to cash        a eheck. Whrn the a. reb it ects of our Re:publie wrote the     magnificent. wonls of the Constitution a.nd the Declaration        o1 Independence, they we·re signing· a promiss to fall heir. \'I\'his no,te was a promise that all nwn-yc::;, bla,ek men as we11 as white rmm-wonld he g1mnmtPt\'d the unalienable rights of life, liherty a]l(l the pnrsni1 of ha.pine\'Ss. It is obvious today tha.t Amcri(·a lms <lcfaulted on this promissory note insofar as hP>r citi7.ens of co.Jo,r arr oncP:rned. Instead of ',
        date: 'January 1, 1990',
        title: 'I have a dream'
      },
      {
        author: 'Rafiki',
        body: 'As far as I see it, you can either run from it... or learn from it!',
        date: 'January 1, 1990',
        title: 'The Lion King'
      }
    ]
  }

  add(data) {
    this.speeches.push(data);
    console.log(this.speeches);
  }

  search(word: string) {
    let l = this.speeches.length;
    //let searchedBy = null;

    if(word.length === 0) return this.speeches;

    let ar = [];
    for(let x=0; x<l; x++) {
      if(this.speeches[x].title.search(word) !==-1) {
        let a = this.speeches[x];
        a['searchby'] = 'title';
        ar.push(this.speeches[x]);
      }
      else if(this.speeches[x].body.search(word) !==-1) {
        let a = this.speeches[x];
        a['searchby'] = 'body';
        ar.push(this.speeches[x]);
      }
      else if(this.speeches[x].author.search(word) !==-1) {
        let a = this.speeches[x];
        a['searchby'] = 'author';
        ar.push(this.speeches[x]);
      }
    }
    console.log(ar);
    return ar;
  }

  deleteByIndex(index) {
    this.speeches.splice(index, 1);
  }
}
