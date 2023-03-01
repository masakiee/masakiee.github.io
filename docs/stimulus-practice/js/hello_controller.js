export class HelloController extends Controller {
    static targets = [ "name" ]

    connect() {
      console.log('Hello World');
    }
}