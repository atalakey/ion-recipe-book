import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, ActionSheetController, AlertController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage implements OnInit {
  mode: string = 'New';
  selectOptions = ['Easy', 'Medium', 'Hard'];
  recipeForm: FormGroup;

  constructor(private navParams: NavParams, private actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController, private toastCtrl: ToastController) {}

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
            this.createNewIngrediantAlert().present();
          }
        },
        {
          text: 'Remove all Ingrediants',
          role: 'destructive',
          handler: () => {
            const fArray: FormArray = <FormArray>this.recipeForm.get('ingrediants');
            const len = fArray.length;
            if(len > 0) {
              for(let i = len - 1; i >= 0; i--) {
                fArray.removeAt(i);
              }

              const toast = this.toastCtrl.create({
                message: 'All Ingrediants were deleted!',
                duration: 1500,
                position: 'bottom'
              });
  
              toast.present();
            }
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    actionSheet.present();
  }

  private createNewIngrediantAlert () {
    return this.alertCtrl.create({
      title: 'Add Ingrediant',
      inputs: [
        {
          name: 'name',
          placeholder: 'name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: (data) => {
            if (data.name.trim() == '' || data.name == null) {
              const toast = this.toastCtrl.create({
                message: 'Please enter a valid value',
                duration: 1500,
                position: 'bottom'
              });

              toast.present();

              return;
            }

            (<FormArray>this.recipeForm.get('ingrediants')).push(new FormControl(data.name, Validators.required));

            const toast = this.toastCtrl.create({
              message: 'Item added!',
              duration: 1500,
              position: 'bottom'
            });

            toast.present();
          }
        }
      ]
    });
  }

  private initualizeForm() {
    this.recipeForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'difficulty': new FormControl('Medium', Validators.required),
      'ingrediants': new FormArray([])
    });
  }
}
