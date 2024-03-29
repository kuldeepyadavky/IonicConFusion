import { Component, Inject } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
} from "ionic-angular";
import { Dish } from "../../shared/dish";
import { Comment } from "../../shared/comment";
import { FavoriteProvider } from "../../providers/favorite/favorite";

/**
 * Generated class for the DishdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-dishdetail",
  templateUrl: "dishdetail.html",
})
export class DishdetailPage {
  dish: Dish;
  errMess: string;
  avgstars: string;
  numcomments: number;
  favorite: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    @Inject("baseURL") public baseURL,
    private favoriteservice: FavoriteProvider,
    private toastCtrl: ToastController
  ) {
    this.dish = navParams.get("dish");
    this.numcomments = this.dish.comments.length;
    this.favorite = favoriteservice.isFavorite(this.dish.id);

    let total = 0;
    this.dish.comments.forEach((comment) => (total += comment.rating));
    this.avgstars = (total / this.numcomments).toFixed(2);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DishdetailPage");
  }

  addToFavorites() {
    console.log("Adding to Favorites", this.dish.id);
    this.favorite = this.favoriteservice.addFavorite(this.dish.id);
    this.toastCtrl
      .create({
        message: "Dish " + this.dish.id + " added as favorite successfully",
        position: "middle",
        duration: 3000,
      })
      .present();
  }
}
