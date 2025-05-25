
function App() {
  //const gift ='female';
 const today ='friday'

 //if (gift === 'female') {
  //return <div className='display-1'>gift is a girl</div>
 //} else {
  //return (
    //<div className="display-1">gift is not a girl</div>
 // )
 //}

return (
  <section>
    {today === 'friday' ? <div className="display-6">today is friday</div> : 
    <div className="display-6">today is not friday</div>}
  </section>

)
}

export default App
