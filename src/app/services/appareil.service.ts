import { Subject } from 'rxjs/Subject';

export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  addAppareil(name: string, status: string) {
      const appareilObject = {
        id: 0,
        name: '',
        status: ''
      };
      appareilObject.name = name;
      appareilObject.status = status;
      appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
      this.appareils.push(appareilObject);
      this.emitAppareilSubject();
  }

  emitAppareilSubject() {
      this.appareilsSubject.next(this.appareils.slice());
    }

  getAppareilById(id: number) {
      const appareil = this.appareils.find(
        (s) => {
          return s.id === id;
        }
      );
      return appareil;
  }

  //TOUs
  switchOnAll()
  {
    this.switchAll("allumé");
  }

  switchOffAll()
  {
    this.switchAll("éteint");
  }

  switchAll(etat: string)
  {
    console.log('On fait quoi:'+etat);
    for(let appareil of this.appareils)
    {
      appareil.status = etat;
    }
    this.emitAppareilSubject();
  }

  //Un seul à la fois
  switchOnOne(index: number)
  {
    this.switchOne(index,"allumé");
  }

  switchOffOne(index: number)
  {
    this.switchOne(index, "éteint");
  }

  switchOne(index: number, etat: string)
  {
    this.appareils[index].status = etat;
    this.emitAppareilSubject();
  }


}
