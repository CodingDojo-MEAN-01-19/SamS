export class Product {
  id: number;
  title: string;
  price: number;
  url: string;
  completed: boolean;
  constructor(data) {
    console.log('data', data);
    if (!data) {
      return;
    }
    // do i need this?
    this.id = data._id;
    this.title = data.title;
    this.price = data.price;
    this.url = data.url;
    this.completed = data.completed;
  }
}
