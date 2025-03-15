import { Routes } from '@angular/router';
import { MainPageComponent } from '../pages/main-page/main-page.component';
import { JuliaAndDaniaPageComponent } from '../pages/julia-and-dania-page/julia-and-dania-page.component';
import { KateAndMishaComponent } from '../pages/kate-and-misha/kate-and-misha.component';
import { KravchenkoComponent } from '../pages/kravchenko/kravchenko.component';
import { YeskovComponent } from '../pages/yeskov/yeskov.component';
import { BolshakovaComponent } from '../pages/bolshakova/bolshakova.component';
import { SergoAndVaryaComponent } from '../pages/sergo-and-varya/sergo-and-varya.component';
import { AlenaAndDenisComponent } from '../pages/alena-and-denis/alena-and-denis.component';
import { BridesParentsComponent } from '../pages/brides-parents/brides-parents.component';
import { BridesBrotherComponent } from '../pages/brides-brother/brides-brother.component';
import { FedchenkovaComponent } from '../pages/fedchenkova/fedchenkova.component';
import { GroomFatherComponent } from '../pages/groom-father/groom-father.component';
import { GroomMotherComponent } from '../pages/groom-mother/groom-mother.component';
import { GroomGrandmotherComponent } from '../pages/groom-grandmother/groom-grandmother.component';
import { GroomBrotherComponent } from '../pages/groom-brother/groom-brother.component';
import { IraAndVovaComponent } from '../pages/ira-and-vova/ira-and-vova.component';
import { RuzmatovsComponent } from '../pages/ruzmatovs/ruzmatovs.component';
import { SmertinsComponent } from '../pages/smertins/smertins.component';
import { Jeeks24Component } from '../pages/jeeks24/jeeks24.component';
import { NoHandsComponent } from '../pages/no-hands/no-hands.component';

export const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'julia', component: JuliaAndDaniaPageComponent},
    {path: 'kate', component: KateAndMishaComponent},
    {path: 'kravchenko', component: KravchenkoComponent},
    {path: 'yeskov', component: YeskovComponent},
    {path: 'bolshakova', component: BolshakovaComponent},
    {path: 'sergoAndVarya', component: SergoAndVaryaComponent},
    {path: 'alenaAndDenis', component: AlenaAndDenisComponent},
    {path: 'bridesParents', component: BridesParentsComponent},
    {path: 'bridesBrother', component: BridesBrotherComponent},
    {path: 'fedchenkova', component: FedchenkovaComponent},

    {path: 'groomFather', component: GroomFatherComponent},
    {path: 'groomMather', component: GroomMotherComponent},
    {path: 'groomGrandmother', component: GroomGrandmotherComponent},
    {path: 'groomBrother', component: GroomBrotherComponent},
    {path: 'iraAndVova', component: IraAndVovaComponent},
    {path: 'ruzmatovs', component: RuzmatovsComponent},
    {path: 'smertins', component: SmertinsComponent},
    {path: 'jeeks24', component: Jeeks24Component},
    {path: 'noHands', component: NoHandsComponent},

    {path: '**', redirectTo: ''}
];
