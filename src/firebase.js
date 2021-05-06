import firebase from 'firebase'
import {ref} from 'vue'

const Config = {
    // apiKey: "******************",
    // authDomain: "***********",
    // projectId: "*****",
    // storageBucket: "*********",
    // messagingSenderId: "**************",
    // appId: "***************",
    // measurementId: "******"
  }

  const firebaseApp = firebase.initializeApp(Config)

  const db = firebaseApp.firestore()
  const userCollection = db.collection('Test')

  export const createUser = user =>{
      return userCollection.add(user)
  }
  
  export const getUser = async id=>{
      const user = await userCollection.doc(id).get()
      return user.exists ? user.data() : null
  }

  export const updateUser =(id,user)=>{
  return userCollection.doc(id).update(user)
}

export const deleteUser = id =>{
    return userCollection.doc(id).delete()
}
// all users
export const loadUsers = () =>{
    const users = ref([])
    userCollection.onSnapshot(snapshot =>{
        users.value = snapshot.docs.map(doc =>({id:doc.id, ...doc.data()}))
    })
    // onMounted(close)
    return users
}