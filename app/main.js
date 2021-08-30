import  {ZooController} from "./Controllers/ZooController.js"



let Zoo = new ZooController()

console.log(Zoo)

window['app'] = {
  controllers:{
    Zoo,
  }
}