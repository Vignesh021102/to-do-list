
class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
       input: '',
        lists:[],
       striked:[]
      }
      this.handleChange = this.handleChange.bind(this);
       this.inputLists = this.inputLists.bind(this);
      this.deleteLists = this.deleteLists.bind(this);
       this.removeItem = this.removeItem.bind(this);
      this.strikedItem = this.strikedItem.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      })
    }
    deleteLists(){
      this.setState({
        lists:[],
        striked:[]
      })
    }
      inputLists() {
        this.setState({
          input:"",
          lists:[...this.state.lists,this.state.input]
        })
      }
    
    removeItem = index => {
          const newlists = this.state.lists.filter((x, i) => i !== index);
          this.setState({ lists: newlists});
    }
    strikedItem = index => {
      const newStriked = this.state.lists.filter((x,i) => i == index);
      console.log(newStriked)
      const newLists = this.state.lists.filter((x,i) => i !== index);
      console.log(newLists)
    this.setState({ 
      striked: [...this.state.striked,newStriked[0]],
      lists: newLists
    })
    }
    render() {
      console.log(this.state)
      return (
        <div id="container2">  
          <div id="inputs">
      <textarea id="input" type="text" value = {this.state.input} onChange= {this.handleChange} placeholder="  Type here..." />
            <div id="button-box"> <button class="button" id="list" onClick={this.inputLists} ><i class="fa fa-plus"></i></button>
              <button class="button" id="delete" onClick={this.deleteLists} ><i class="fa fa-trash"></i></button></div></div>
          
          { this.state.lists.map((x,index)=>{return <p class="notes" key={index}><div id="message">{x}</div> <div id="button-box2">
              <button  onClick={(e)=>{this.removeItem(index)}}><i class="fa fa-trash"></i></button>
              <button  onClick={(e)=>{this.strikedItem(index)}}><i class="fa fa-check"></i></button> </div>
              </p> })
            }
            {this.state.striked.map((x,index)=>{return <p class="notes deleted" key={index}>{x}</p>})}
         
        </div>
      )
    }
  }
  ReactDOM.render(<App />,document.getElementById("container"))