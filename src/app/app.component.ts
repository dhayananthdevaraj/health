
import { Component } from '@angular/core';
export interface pat{
id : number,
name : string,
result : string,
}@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
p : pat [ ] = [
{
id:1,
name:"A",
result:"P"
},
{
id:2,
name:"B",
result:"A"
},
]
filpat : pat [ ] = this.p
sr(event : any){
if(event.target.value.length > 0)
this.filpat = this.p.filter(data => data.result
=== event.target.value)
else this.filpat = this.p
}
}
