import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  Title!: string
  Desc!: string

  onSubmit() {
    const todo: Todo = {
      Sno: 5,
      Title: this.Title,
      Desc: this.Desc,
      IsActive: true
    }
    this.addTodo.emit(todo);
  }

}
