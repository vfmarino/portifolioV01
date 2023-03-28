import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomePortifolioComponent } from './portifolio/home-portifolio/home-portifolio.component';
import { HomeyoutubeComponent } from './youtube/homeyoutube/homeyoutube.component';
import { SobreComponent } from './sobre/sobre.component';
import { QualificacoesComponent } from './qualificacoes/qualificacoes.component';
import { ContatoComponent } from './contato/contato.component';
import { GoogleFormsComponentComponent } from './google-forms-component/google-forms-component.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'youtube', component: HomeyoutubeComponent },
  { path: 'portfolio', component: HomePortifolioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'qualificacoes', component: QualificacoesComponent },
  { path: 'contato', component:ContatoComponent},
  { path : 'cadastro', component: GoogleFormsComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
