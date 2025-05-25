import Buttons from "./components/buttons"

function App() {
     function sayHello(){
      console.log('hello world')
     }
  return (
<section className="text-center">
  <Buttons btnName={'Login'} btnColor={"btn-primary"} clickEvent={sayHello} />
  <Buttons btnName={'Logout'} btnColor="btn-danger" />
  <Buttons btnName={'Signup'} btnColor="btn-success" />
  <Buttons btnName={'Next'} btnColor="btn-info" />
  <Buttons btnName={'Prev'} btnColor="btn-warning" />
  <Buttons btnName={'Click'} btnColor="btn-dark" />
</section>
     
  )
}

export default App
