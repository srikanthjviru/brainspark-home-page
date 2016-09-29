import React from 'react';
import './App.less';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
    static childContextTypes = {
      handlerFormFocus: React.PropTypes.func,
      removeFocusedClassInForm: React.PropTypes.func,
    }

    getChildContext() {
     return {
        handlerFormFocus: this.handlerFormFocus,
        removeFocusedClassInForm: this.removeFocusedClassInForm
     }
   }

   handlerFormFocus = (e) => {
       this.removeFocusedClassInForm(e);
       e.target.parentNode.classList.add('form__input--focused');
   }
   
   removeFocusedClassInForm = (e) => {
       const allFormsDivs = e.currentTarget.querySelectorAll('.form__input');
       allFormsDivs.forEach((element) => {
           const inputElement = element.querySelector('input');
           if(inputElement) {
               if(!inputElement.value) {
                   element.classList.remove('form__input--focused');
               }
           }

           const textareaElement = element.querySelector('textarea');
           if(textareaElement) {
               if(!textareaElement.value) {
                   element.classList.remove('form__input--focused');
               }
           }
       })
   }

   render() {
        return(
            <div className='App'>
                <Header />
                <div className='content'>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;
