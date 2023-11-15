describe('Todo Service', function() {
    const module = angular.mock.module;
    const inject = angular.mock.inject;

    var httpBackend: angular.IHttpBackendService;
    var todoService: App.TodoService;

    beforeEach(module('MyApp'));

    beforeEach(
        inject(
            function(
                $httpBackend: angular.IHttpBackendService,
                TodoService: App.TodoService
            ) 
            {
                httpBackend = $httpBackend;
                todoService = TodoService;
            }
        )
    );

    it('should get first and last name of scientists from json', function () {
        var dataTarget = [
            {
                'userId': 1,
                'id': 1,
                'title': 'delectus aut autem',
                'completed': false
            }
        ];
        var dataResult = [];
    
        httpBackend.whenGET(todoService.urlTodo).respond(dataTarget);

        var returnPromise = todoService.getTodo();
        returnPromise.then((response: any) => {
            dataResult = response.data;
        });

        httpBackend.flush(); // Simulates response from server
    
        expect(dataResult.length).toBeGreaterThan(0);
        expect(dataResult[0].title).toEqual(dataTarget[0].title);
    });
});