import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SeatBookComponent } from "./seatbook/seatbook.component";
import { DbService } from "./service/db.service";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, SeatBookComponent],
  bootstrap: [AppComponent],
  providers: [DbService]
})
export class AppModule {}
