import { ENVIRONMENT_INITIALIZER, inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { DialogService } from './shared/services/dialog.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

const initializeDialogService = () => () => inject(DialogService);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    NavBarComponent,
    MatDialogModule,
  ],
  providers: [
    {
      provide: ENVIRONMENT_INITIALIZER,
      useFactory: initializeDialogService,
      deps: [MatDialog],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
