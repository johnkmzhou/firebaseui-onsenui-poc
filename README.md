# FirebaseUI and Onsen UI Proof-of-Concept

This is an example of how FirebaseUI React components can be used with OnsenUI. Note that the FirebaseAuth component is conditionally rendered by Redux state changes to work around the issue where internally it was triggering the `firebaseui.auth.AuthUI` widget to reset whenever the component unmounted. This led to the widget being removed when it actually needed to be rendered on more than one page.

I also used the same `createUserProfile` technique with react-redux-firebase that I employed in https://github.com/johnkmzhou/firebaseui-react-poc.