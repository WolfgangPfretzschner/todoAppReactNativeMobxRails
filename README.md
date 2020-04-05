# Todo App with React Native, Mobx and Rails backend

![](https://gifyu.com/image/dJJl)

Instructions to run on IOS simulator

```bash
git clone 

#in directory root 
#install backend
cd backend
bundle install
#start rails server
rails server

#install frontend
cd ../frontend
npm install
cd ios
pod install
cd ..
#start app
npm run start
```

The app fetches seed todos from the api backend. 
You can add new todos, delete todos and mark them as checked.
The state change is not persistent to the backend.

Sorry no tests :( 
