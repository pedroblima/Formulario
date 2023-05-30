import { db } from "@/services/firebase"
import { child, get, ref, remove, set } from "firebase/database"
import { v4 } from "uuid"

export default function handler(req, res) {
    
  const id = req.query.id
  
    if(req.method == 'GET') {

      get(child(ref(db), 'disciplinas')).then(snapshot =>{
        
        const retorno =[]

        snapshot.forEach(item=>{
          retorno.push(item.val())
        })
        
      })

    } else if (req.method == 'PUT'){

      const uuid = v4()
      const dados = req.body
      dados.id = uuid
      set(ref(db, 'disciplinas/' + uuid), dados)  
    
    } else if (req.method == 'delete'){

      remove(ref(db, 'disciplinas/' + id))  

      res.status(200).json(id)

    }

}
  