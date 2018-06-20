import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, ActionSheetController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage implements OnInit {
  mode: string = 'New';
  selectOptions = ['Easy', 'Medium', 'Hard'];
  recipeForm: FormGroup;

  constructor(private navParams: NavParams, private actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {
    this.mode = this.navParams.get('mode');
    this.initualizeForm();
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  onManageIngrediants() {
    const actionSheet = this.actionSheetCtrl.create({
      title: "What do you want to do?",
      buttons: [
        {
          text: 'Add Ingrediant',
          handler: () => {

          }
        },
        {
          text: 'Remove all Ingrediants',
          role: 'destructive',
          handler: () => {
            
          }
        },
        {
          text: 'Cancel',
          role: 'Cancel'
        }
      ]
    });
  }

  private initualizeForm() {
    this.recipeForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'difficulty': new FormControl('Medium', Validators.required)
    });
  }
}
