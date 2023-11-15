namespace App
{
    let ngApp = angular.module('MyApp');

    export class TodoService 
    {
        public urlTodo = 'dummy.json';
        public values = [];

        constructor(private http: angular.IHttpService)
        {
        }

        public getTodo() 
        {
            const response = this.http.get(this.urlTodo);
            return response.then((result: any) => {
                const data = result.data;
                for (let i = 0; i < data.length; i++) {
                  this.values.push(data[i].firstName + ' ' + data[i].lastName);
                }
                return result;
            })
        }

        static Factory(http: angular.IHttpService)
        {
            return new TodoService(http);
        }
    }

    TodoService.Factory.$inject = ['$http'];
    ngApp.factory('TodoService', TodoService.Factory);
}
