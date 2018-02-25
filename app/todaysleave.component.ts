import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';
import {NavigationManager} from "./services/NavigationManager";

@Component({
    selector: 'app',
    templateUrl: 'app/html/todaysleave.component.html'
})

export class TodaysLeaveComponent {
    private showNavBar: boolean = true;
    private activeMenu: string = "todaysleave";

       constructor(private router: Router, private navigationManager: NavigationManager) {
        this.navigationManager.showNavBarEmitter.subscribe((mode) => {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (mode !== null) {
                this.showNavBar = mode;
            }
        });
        this.navigationManager.menuActivationEmitter.subscribe((menuName) => {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (menuName !== null) {
                this.activeMenu = menuName;
            }
        });

    }

    ngOnInit() {

    }

}