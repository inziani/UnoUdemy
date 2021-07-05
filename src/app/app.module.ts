import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-list/course-detail/course-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component'
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { appRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';





@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseDetailComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerElementComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipesEditComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule { }
