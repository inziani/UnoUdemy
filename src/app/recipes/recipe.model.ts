export class Recipe
{
  public name: string;
  public despcription: string;
  public imagePath: string;

  constructor (name: string, desc: string, imagePath: string){
    this.name = name;
    this.despcription = desc;
    this.imagePath = imagePath;
  }
}
