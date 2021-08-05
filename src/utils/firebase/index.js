import app from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './config'

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
        this.app = app
        this.auth = app.auth()
        this.googleProvider = new app.auth.GoogleAuthProvider()
    }

    async register(name, email, password) {
        const newUser = await this.auth.createUserWithEmailAndPassword(email, password)
        return newUser.user.updateProfile({
            displayName: name
        })
    }

    async login(email, password) {
        return await this.auth.signInWithEmailAndPassword(email, password)
    }

    async doSignInWithGoogle() {
        return await this.auth.signInWithPopup(this.googleProvider)
    }

    logout() {
        return this.auth.signOut()
    }
}

const firebase = new Firebase()
export default firebase
