import {ImmortalJellyfish} from "../models/ImmortalJellyfish.js";
import {VampireSquid} from "../models/VampireSquid.js";
import {Aardvark} from "../models/Aardvark.js";
import {BeardedDragon} from "../models/BeardedDragon.js";
import {Caracal} from "../models/Caracal.js";
import {Dolphin} from "../models/Dolphin.js";
import {Eel} from "../models/Eel.js";
import {Falcon} from "../models/Falcon.js";
import {Gecko} from "../models/Gecko.js";
import {HoneyBadger} from "../models/HoneyBadger.js";
import {Jerboa} from "../models/Jerboa.js";
import {Kinkajou} from "../models/Kinkajou.js";
import {Lamprey} from "../models/Lamprey.js";
import {Megalodon} from "../models/Megalodon.js";
import {NakedMoleRat} from "../models/NakedMoleRat.js";
import {Olm} from "../models/Olm.js"
import {Pademelon} from "../models/Pademelon.js"
import {Quail} from "../models/Quail.js"
import {Rhino} from "../models/Rhino.js"
import {Seahorse} from "../models/Seahorse.js"
import {Tarsier} from "../models/Tarsier.js"
import {Uakari} from "../models/Uakari.js"
import {Wolf} from "../models/Wolf.js"
import {Xerus} from "../models/Xerus.js"
import {Yak} from "../models/Yak.js"
import {Zonkey} from "../models/Zonkey.js"




let violet = new VampireSquid('Violet')
let irene = new ImmortalJellyfish('Irene')


export class ZooController{


scaryWaterFight(){
let total = 0
let x = Math.floor(Math.random()) * 10 
total += x
if(total <= 5) { console.log(violet + 'knockout blow') }
else console.log(irene + 'is the queen') 
}
}
