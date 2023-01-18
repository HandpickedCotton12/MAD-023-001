import firebase from 'firebase';
import '@react-native-firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBFcyWqK2rNT3XBKcSokmjEhyQeo1JOyzM",
    authDomain: "revenous-calorietracker.firebaseapp.com",
    databaseURL:"https://revenous-calorietrackerio.com",
    projectId: "revenous-calorietracker",
    storageBucket: "revenous-calorietracker.appspot.com",
    messagingSenderId: "529173064650",
    appId: "1:529173064650:web:68d8408bd753852e74bd33"
  };

class Fire{
    constructor (callback) {
        this.init(callback)
    }

    init(callback) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        }

        firebase.auth().onAuthStateChanged(user=>{
            if (user) {
                callback(null, user)
            } else {
                firebase
                .auth()
                .signInAnonymously()
                .catch(error=>{
                    callback(error)
                });
                
            }
        });
    }

    getLists(callback){
        let ref = this.ref.orderBy("name");

        this.unsubscribe = ref.onSnapshot(snapshot => {
            lists = []

            snapshot.forEach(doc => {
                lists.push({id: doc.id, ...doc.data()})
            })

            callback(lists)
        })
    }

    addList(list){
        let ref = this.ref;
        ref.add(list);
    }

    updateList(list){
        let ref = this.ref;
        ref.doc(list.id).update(list)
    }

    get userId(){
        return firebase.auth().currentUser.uid
    }

    get ref(){
        return firebase
        .firestore()
        .collection('users')
        .doc(this.userId)
        .collection('lists');
    }

    detach() {
        this.unsubscribe();
    }

}

export default Fire;