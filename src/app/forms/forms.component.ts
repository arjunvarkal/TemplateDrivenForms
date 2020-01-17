import { Component } from '@angular/core' ;
import { IUser } from './forms.model' ;

@Component({
    selector : 'app-forms',
    templateUrl : './forms.component.html'
})

export class FormsComponent{
    myUser = new IUser('Arjun','Varkal','','') ;

}