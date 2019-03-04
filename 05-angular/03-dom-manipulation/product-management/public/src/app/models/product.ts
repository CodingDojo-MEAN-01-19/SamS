export class Product {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  constructor(data) {
    console.log('data', data);
    if (!data) {
      return;
    }

    this.id = data._id;
    this.title = data.title;
    this.description = data.description;
    this.completed = data.completed;
  } // do i need this?
}
