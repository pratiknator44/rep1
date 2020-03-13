import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeechComponent } from './speech/speech.component';
import { NewspeechComponent } from './newspeech/newspeech.component';
import { ViewSpeechComponent } from './view-speech/view-speech.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/speeches',
    pathMatch: 'full'
  },
  {
    path: 'speeches',
    component: SpeechComponent,
    children: [
      {
        path: 'addSpeech',
        component: NewspeechComponent
      },
      {
        path: 'viewSpeech',
        component: ViewSpeechComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
