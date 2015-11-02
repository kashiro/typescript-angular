/// <reference path='../_all.ts' />

module todos {
  export interface ITodoScope extends ng.IScope {
    todos: TodoItem[];
    newTodo: string;
    editedTodo: TodoItem;
    remainingCount: number;
    doneCount: number;
    allChecked: boolean;
    statusFilter: any;
    location: ng.ILocationService;
    vm: TodoCtrl;
  }
}
