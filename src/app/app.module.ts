import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { IonicStorageModule } from "@ionic/storage";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { AboutPage } from "../pages/about/about";
import { MenuPage } from "../pages/menu/menu";
import { ContactPage } from "../pages/contact/contact";
import { DishdetailPage } from "../pages/dishdetail/dishdetail";
import { FavoritesPage } from "../pages/favorites/favorites";
import { ReservationPage } from "../pages/reservation/reservation";
import { LoginPage } from "../pages/login/login";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { DishProvider } from "../providers/dish/dish";
import { LeaderProvider } from "../providers/leader/leader";
import { PromotionProvider } from "../providers/promotion/promotion";
import { ProcessHttpmsgProvider } from "../providers/process-httpmsg/process-httpmsg";
import { HttpModule } from "@angular/http";
import { baseURL } from "../shared/baseURL";
import { FavoriteProvider } from "../providers/favorite/favorite";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    MenuPage,
    ContactPage,
    DishdetailPage,
    FavoritesPage,
    ReservationPage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    MenuPage,
    ContactPage,
    DishdetailPage,
    FavoritesPage,
    ReservationPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DishProvider,
    LeaderProvider,
    PromotionProvider,
    ProcessHttpmsgProvider,
    { provide: "baseURL", useValue: baseURL },
    FavoriteProvider,
  ],
})
export class AppModule {}
